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
 * Handles database operations for the HealthSurvey.
 * See https://sequelize.org/v5/index.html to learn how to customize it.
 */
class HealthSurveyRepository {
  /**
   * Creates the HealthSurvey.
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

    const record = await options.database.healthSurvey.create(
      {
        ...lodash.pick(data, [
          'surveyDate',
          'healthCondition',
          'weight',
          'height',
          'heartRate',
          'pulseRate',
          'bloodOxygenLevel',
          'smoking',
          'smokingFrequency',
          'drinking',
          'substanceAbuse',          
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

    await record.setPerson(data.person || null, {
      transaction,
    });
    await record.setChronicDisease1(data.chronicDisease1 || null, {
      transaction,
    });
    await record.setChronicDisease2(data.chronicDisease2 || null, {
      transaction,
    });
    await record.setChronicDisease3(data.chronicDisease3 || null, {
      transaction,
    });
  
    await FileRepository.replaceRelationFiles(
      {
        belongsTo: options.database.healthSurvey.getTableName(),
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
   * Updates the HealthSurvey.
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

    let record = await options.database.healthSurvey.findByPk(
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
          'surveyDate',
          'healthCondition',
          'weight',
          'height',
          'heartRate',
          'pulseRate',
          'bloodOxygenLevel',
          'smoking',
          'smokingFrequency',
          'drinking',
          'substanceAbuse',          
          'importHash',
        ]),
        updatedById: currentUser.id,
      },
      {
        transaction,
      },
    );

    await record.setPerson(data.person || null, {
      transaction,
    });
    await record.setChronicDisease1(data.chronicDisease1 || null, {
      transaction,
    });
    await record.setChronicDisease2(data.chronicDisease2 || null, {
      transaction,
    });
    await record.setChronicDisease3(data.chronicDisease3 || null, {
      transaction,
    });

    await FileRepository.replaceRelationFiles(
      {
        belongsTo: options.database.healthSurvey.getTableName(),
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
   * Deletes the HealthSurvey.
   *
   * @param {string} id
   * @param {Object} [options]
   */
  static async destroy(id, options: IRepositoryOptions) {
    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    let record = await options.database.healthSurvey.findByPk(
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
   * Finds the HealthSurvey and its relations.
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
        model: options.database.person,
        as: 'person',
      },
      {
        model: options.database.chronicDiseaseEnum,
        as: 'chronicDisease1',
      },
      {
        model: options.database.chronicDiseaseEnum,
        as: 'chronicDisease2',
      },
      {
        model: options.database.chronicDiseaseEnum,
        as: 'chronicDisease3',
      },
    ];

    const record = await options.database.healthSurvey.findByPk(
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
   * Counts the number of HealthSurveys based on the filter.
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

    return options.database.healthSurvey.count(
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
   * Finds the HealthSurveys based on the query.
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
        model: options.database.person,
        as: 'person',
      },
      {
        model: options.database.chronicDiseaseEnum,
        as: 'chronicDisease1',
      },
      {
        model: options.database.chronicDiseaseEnum,
        as: 'chronicDisease2',
      },
      {
        model: options.database.chronicDiseaseEnum,
        as: 'chronicDisease3',
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

      if (filter.person) {
        whereAnd.push({
          ['personId']: SequelizeFilterUtils.uuid(
            filter.person,
          ),
        });
      }

      if (filter.surveyDateRange) {
        const [start, end] = filter.surveyDateRange;

        if (start !== undefined && start !== null && start !== '') {
          whereAnd.push({
            surveyDate: {
              [Op.gte]: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          whereAnd.push({
            surveyDate: {
              [Op.lte]: end,
            },
          });
        }
      }

      if (filter.healthCondition) {
        whereAnd.push({
          healthCondition: filter.healthCondition,
        });
      }

      if (filter.smoking) {
        whereAnd.push({
          smoking: filter.smoking,
        });
      }

      if (filter.drinking) {
        whereAnd.push({
          drinking: filter.drinking,
        });
      }

      if (filter.substanceAbuse) {
        whereAnd.push({
          substanceAbuse: filter.substanceAbuse,
        });
      }

      if (filter.chronicDisease1) {
        whereAnd.push({
          ['chronicDisease1Id']: SequelizeFilterUtils.uuid(
            filter.chronicDisease1,
          ),
        });
      }

      if (filter.chronicDisease2) {
        whereAnd.push({
          ['chronicDisease2Id']: SequelizeFilterUtils.uuid(
            filter.chronicDisease2,
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
    } = await options.database.healthSurvey.findAndCountAll({
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
   * Lists the HealthSurveys to populate the autocomplete.
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

        ],
      });
    }

    const where = { [Op.and]: whereAnd };

    const records = await options.database.healthSurvey.findAll(
      {
        attributes: ['id', 'id'],
        where,
        limit: limit ? Number(limit) : undefined,
        order: [['id', 'ASC']],
      },
    );

    return records.map((record) => ({
      id: record.id,
      label: record.id,
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
        entityName: 'healthSurvey',
        entityId: record.id,
        action,
        values,
      },
      options,
    );
  }

  /**
   * Fills an array of HealthSurvey with relations and files.
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
   * Fill the HealthSurvey with the relations and files.
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

export default HealthSurveyRepository;
