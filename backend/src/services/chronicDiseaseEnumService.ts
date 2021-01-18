import ChronicDiseaseEnumRepository from '../database/repositories/chronicDiseaseEnumRepository';
import Error400 from '../errors/Error400';
import SequelizeRepository from '../database/repositories/sequelizeRepository';
import { IServiceOptions } from './IServiceOptions';

/**
 * Handles ChronicDiseaseEnum operations
 */
export default class ChronicDiseaseEnumService {
  options: IServiceOptions;

  constructor(options) {
    this.options = options;
  }

  /**
   * Creates a ChronicDiseaseEnum.
   *
   * @param {*} data
   */
  async create(data) {
    const transaction = await SequelizeRepository.createTransaction(
      this.options.database,
    );

    try {
      const record = await ChronicDiseaseEnumRepository.create(data, {
        ...this.options,
        transaction,
      });

      await SequelizeRepository.commitTransaction(
        transaction,
      );

      return record;
    } catch (error) {
      await SequelizeRepository.rollbackTransaction(
        transaction,
      );

      SequelizeRepository.handleUniqueFieldError(
        error,
        this.options.language,
        'chronicDiseaseEnum',
      );

      throw error;
    }
  }

  /**
   * Updates a ChronicDiseaseEnum.
   *
   * @param {*} id
   * @param {*} data
   */
  async update(id, data) {
    const transaction = await SequelizeRepository.createTransaction(
      this.options.database,
    );

    try {
      const record = await ChronicDiseaseEnumRepository.update(
        id,
        data,
        {
          ...this.options,
          transaction,
        },
      );

      await SequelizeRepository.commitTransaction(
        transaction,
      );

      return record;
    } catch (error) {
      await SequelizeRepository.rollbackTransaction(
        transaction,
      );

      SequelizeRepository.handleUniqueFieldError(
        error,
        this.options.language,
        'chronicDiseaseEnum',
      );

      throw error;
    }
  }

  /**
   * Destroy all ChronicDiseaseEnums with those ids.
   *
   * @param {*} ids
   */
  async destroyAll(ids) {
    const transaction = await SequelizeRepository.createTransaction(
      this.options.database,
    );

    try {
      for (const id of ids) {
        await ChronicDiseaseEnumRepository.destroy(id, {
          ...this.options,
          transaction,
        });
      }

      await SequelizeRepository.commitTransaction(
        transaction,
      );
    } catch (error) {
      await SequelizeRepository.rollbackTransaction(
        transaction,
      );
      throw error;
    }
  }

  /**
   * Finds the ChronicDiseaseEnum by Id.
   *
   * @param {*} id
   */
  async findById(id) {
    return ChronicDiseaseEnumRepository.findById(id, this.options);
  }

  /**
   * Finds ChronicDiseaseEnums for Autocomplete.
   *
   * @param {*} search
   * @param {*} limit
   */
  async findAllAutocomplete(search, limit) {
    return ChronicDiseaseEnumRepository.findAllAutocomplete(
      search,
      limit,
      this.options,
    );
  }

  /**
   * Finds ChronicDiseaseEnums based on the query.
   *
   * @param {*} args
   */
  async findAndCountAll(args) {
    return ChronicDiseaseEnumRepository.findAndCountAll(
      args,
      this.options,
    );
  }

  /**
   * Imports a list of ChronicDiseaseEnums.
   *
   * @param {*} data
   * @param {*} importHash
   */
  async import(data, importHash) {
    if (!importHash) {
      throw new Error400(
        this.options.language,
        'importer.errors.importHashRequired',
      );
    }

    if (await this._isImportHashExistent(importHash)) {
      throw new Error400(
        this.options.language,
        'importer.errors.importHashExistent',
      );
    }

    const dataToCreate = {
      ...data,
      importHash,
    };

    return this.create(dataToCreate);
  }

  /**
   * Checks if the import hash already exists.
   * Every item imported has a unique hash.
   *
   * @param {*} importHash
   */
  async _isImportHashExistent(importHash) {
    const count = await ChronicDiseaseEnumRepository.count(
      {
        importHash,
      },
      this.options,
    );

    return count > 0;
  }
}
