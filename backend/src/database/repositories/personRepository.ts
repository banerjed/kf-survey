import SequelizeRepository from '../../database/repositories/sequelizeRepository';
import AuditLogRepository from '../../database/repositories/auditLogRepository';
import lodash from 'lodash';
import SequelizeFilterUtils from '../../database/utils/sequelizeFilterUtils';
import Error404 from '../../errors/Error404';
import Sequelize from 'sequelize';
import FileRepository from './fileRepository';
import { IRepositoryOptions } from './IRepositoryOptions';

const Op = Sequelize.Op;

/**
 * Handles database operations for the Person.
 * See https://sequelize.org/v5/index.html to learn how to customize it.
 */
class PersonRepository {
  /**
   * Creates the Person.
   *
   * @param {Object} data
   * @param {Object} [options]
   */
  static async create(data, options: IRepositoryOptions) {
    const currentUser = SequelizeRepository.getCurrentUser(
      options,
    );

    const tenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    const record = await options.database.person.create(
      {
        ...lodash.pick(data, [
          'firstName',
          'middleName',
          'lastName',
          'fullName',
          'gender',
          'age',
          'dateOfBirth',
          'roleInHousehold',
          'livesAwayFromHome',
          'isHeadOfHousehold',
          'aadharNumber',
          'mobileNumber',
          'educationLevel',
          'primaryJob',
          'alternateLivelihood',          
          'importHash',
        ]),
        tenantId: tenant.id,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      {
        transaction,
      },
    );

    await record.setHousehold(data.household || null, {
      transaction,
    });
  
    await FileRepository.replaceRelationFiles(
      {
        belongsTo: options.database.person.getTableName(),
        belongsToColumn: 'picture',
        belongsToId: record.id,
      },
      data.picture,
      options,
    );
  
    await this._createAuditLog(
      AuditLogRepository.CREATE,
      record,
      data,
      options,
    );

    return this.findById(record.id, options);
  }

  /**
   * Updates the Person.
   *
   * @param {Object} data
   * @param {Object} [options]
   */
  static async update(id, data, options: IRepositoryOptions) {
    const currentUser = SequelizeRepository.getCurrentUser(
      options,
    );

    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    let record = await options.database.person.findByPk(
      id,
      {
        transaction,
      },
    );

    const tenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    if (
      !record ||
      String(record.tenantId) !== String(tenant.id)
    ) {
      throw new Error404();
    }

    record = await record.update(
      {
        ...lodash.pick(data, [
          'firstName',
          'middleName',
          'lastName',
          'fullName',
          'gender',
          'age',
          'dateOfBirth',
          'roleInHousehold',
          'livesAwayFromHome',
          'isHeadOfHousehold',
          'aadharNumber',
          'mobileNumber',
          'educationLevel',
          'primaryJob',
          'alternateLivelihood',          
          'importHash',
        ]),
        updatedById: currentUser.id,
      },
      {
        transaction,
      },
    );

    await record.setHousehold(data.household || null, {
      transaction,
    });

    await FileRepository.replaceRelationFiles(
      {
        belongsTo: options.database.person.getTableName(),
        belongsToColumn: 'picture',
        belongsToId: record.id,
      },
      data.picture,
      options,
    );

    await this._createAuditLog(
      AuditLogRepository.UPDATE,
      record,
      data,
      options,
    );

    return this.findById(record.id, options);
  }

  /**
   * Deletes the Person.
   *
   * @param {string} id
   * @param {Object} [options]
   */
  static async destroy(id, options: IRepositoryOptions) {
    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    let record = await options.database.person.findByPk(
      id,
      {
        transaction,
      },
    );

    const tenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    if (
      !record ||
      String(record.tenantId) !== String(tenant.id)
    ) {
      throw new Error404();
    }

    await record.destroy({
      transaction,
    });

    await this._createAuditLog(
      AuditLogRepository.DELETE,
      record,
      record,
      options,
    );
  }

  /**
   * Finds the Person and its relations.
   *
   * @param {string} id
   * @param {Object} [options]
   */
  static async findById(id, options: IRepositoryOptions) {
    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    const include = [
      {
        model: options.database.household,
        as: 'household',
      },
    ];

    const record = await options.database.person.findByPk(
      id,
      {
        include,
        transaction,
      },
    );

    const tenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    if (
      !record ||
      String(record.tenantId) !== String(tenant.id)
    ) {
      throw new Error404();
    }

    return this._fillWithRelationsAndFiles(record, options);
  }

  /**
   * Counts the number of Persons based on the filter.
   *
   * @param {Object} filter
   * @param {Object} [options]
   */
  static async count(filter, options: IRepositoryOptions) {
    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    const tenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    return options.database.person.count(
      {
        where: {
          ...filter,
          tenantId: tenant.id,
        },
        transaction,
      },
    );
  }

  /**
   * Finds the Persons based on the query.
   * See https://sequelize.org/v5/manual/querying.html to learn how to
   * customize the query.
   *
   * @param {Object} query
   * @param {Object} query.filter
   * @param {number} query.limit
   * @param  {number} query.offset
   * @param  {string} query.orderBy
   * @param {Object} [options]
   *
   * @returns {Promise<Object>} response - Object containing the rows and the count.
   */
  static async findAndCountAll(
    { filter, limit = 0, offset = 0, orderBy = '' },
    options: IRepositoryOptions,
  ) {
    const tenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    let whereAnd: Array<any> = [];
    let include = [
      {
        model: options.database.household,
        as: 'household',
      },      
    ];

    whereAnd.push({
      tenantId: tenant.id,
    });

    if (filter) {
      if (filter.id) {
        whereAnd.push({
          ['id']: SequelizeFilterUtils.uuid(filter.id),
        });
      }

      if (filter.lastName) {
        whereAnd.push(
          SequelizeFilterUtils.ilike(
            'person',
            'lastName',
            filter.lastName,
          ),
        );
      }

      if (filter.fullName) {
        whereAnd.push(
          SequelizeFilterUtils.ilike(
            'person',
            'fullName',
            filter.fullName,
          ),
        );
      }

      if (filter.gender) {
        whereAnd.push({
          gender: filter.gender,
        });
      }

      if (
        filter.livesAwayFromHome === true ||
        filter.livesAwayFromHome === 'true' ||
        filter.livesAwayFromHome === false ||
        filter.livesAwayFromHome === 'false'
      ) {
        whereAnd.push({
          livesAwayFromHome:
            filter.livesAwayFromHome === true ||
            filter.livesAwayFromHome === 'true',
        });
      }

      if (
        filter.isHeadOfHousehold === true ||
        filter.isHeadOfHousehold === 'true' ||
        filter.isHeadOfHousehold === false ||
        filter.isHeadOfHousehold === 'false'
      ) {
        whereAnd.push({
          isHeadOfHousehold:
            filter.isHeadOfHousehold === true ||
            filter.isHeadOfHousehold === 'true',
        });
      }

      if (filter.aadharNumber) {
        whereAnd.push(
          SequelizeFilterUtils.ilike(
            'person',
            'aadharNumber',
            filter.aadharNumber,
          ),
        );
      }

      if (filter.mobileNumber) {
        whereAnd.push(
          SequelizeFilterUtils.ilike(
            'person',
            'mobileNumber',
            filter.mobileNumber,
          ),
        );
      }

      if (filter.household) {
        whereAnd.push({
          ['householdId']: SequelizeFilterUtils.uuid(
            filter.household,
          ),
        });
      }

      if (filter.createdAtRange) {
        const [start, end] = filter.createdAtRange;

        if (
          start !== undefined &&
          start !== null &&
          start !== ''
        ) {
          whereAnd.push({
            ['createdAt']: {
              [Op.gte]: start,
            },
          });
        }

        if (
          end !== undefined &&
          end !== null &&
          end !== ''
        ) {
          whereAnd.push({
            ['createdAt']: {
              [Op.lte]: end,
            },
          });
        }
      }
    }

    const where = { [Op.and]: whereAnd };

    let {
      rows,
      count,
    } = await options.database.person.findAndCountAll({
      where,
      include,
      limit: limit ? Number(limit) : undefined,
      offset: offset ? Number(offset) : undefined,
      order: orderBy
        ? [orderBy.split('_')]
        : [['createdAt', 'DESC']],
      transaction: SequelizeRepository.getTransaction(
        options,
      ),
    });

    rows = await this._fillWithRelationsAndFilesForRows(
      rows,
      options,
    );

    return { rows, count };
  }

  /**
   * Lists the Persons to populate the autocomplete.
   * See https://sequelize.org/v5/manual/querying.html to learn how to
   * customize the query.
   *
   * @param {Object} query
   * @param {number} limit
   */
  static async findAllAutocomplete(query, limit, options: IRepositoryOptions) {
    const tenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    let whereAnd: Array<any> = [{
      tenantId: tenant.id,
    }];

    if (query) {
      whereAnd.push({
        [Op.or]: [
          { ['id']: SequelizeFilterUtils.uuid(query) },
          {
            [Op.and]: SequelizeFilterUtils.ilike(
              'person',
              'lastName',
              query,
            ),
          },
        ],
      });
    }

    const where = { [Op.and]: whereAnd };

    const records = await options.database.person.findAll(
      {
        attributes: ['id', 'lastName'],
        where,
        limit: limit ? Number(limit) : undefined,
        order: [['lastName', 'ASC']],
      },
    );

    return records.map((record) => ({
      id: record.id,
      label: record.lastName,
    }));
  }

  /**
   * Creates an audit log of the operation.
   *
   * @param {string} action - The action [create, update or delete].
   * @param {object} record - The sequelize record
   * @param {object} data - The new data passed on the request
   * @param {object} options
   */
  static async _createAuditLog(
    action,
    record,
    data,
    options: IRepositoryOptions,
  ) {
    let values = {};

    if (data) {
      values = {
        ...record.get({ plain: true }),
        picture: data.picture,
      };
    }

    await AuditLogRepository.log(
      {
        entityName: 'person',
        entityId: record.id,
        action,
        values,
      },
      options,
    );
  }

  /**
   * Fills an array of Person with relations and files.
   *
   * @param {Array} rows
   * @param {Object} [options]
   */
  static async _fillWithRelationsAndFilesForRows(
    rows,
    options: IRepositoryOptions,
  ) {
    if (!rows) {
      return rows;
    }

    return Promise.all(
      rows.map((record) =>
        this._fillWithRelationsAndFiles(record, options),
      ),
    );
  }

  /**
   * Fill the Person with the relations and files.
   *
   * @param {Object} record
   * @param {Object} [options]
   */
  static async _fillWithRelationsAndFiles(record, options: IRepositoryOptions) {
    if (!record) {
      return record;
    }

    const output = record.get({ plain: true });

    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    output.picture = await FileRepository.fillDownloadUrl(
      await record.getPicture({
        transaction,
      }),
    );

    return output;
  }
}

export default PersonRepository;
