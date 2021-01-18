import { DataTypes } from 'sequelize';

/**
 * MunicipalityEnum database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const municipalityEnum = sequelize.define(
    'municipalityEnum',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      importHash: {
        type: DataTypes.STRING(255),
        allowNull: true,        
      },
    },
    {
      indexes: [
        {
          unique: true,
          fields: ['importHash', 'tenantId'],
          where: {
            deletedAt: null,
          },
        },
        {
          unique: true,
          fields: ['name', 'tenantId'],
          where: {
            deletedAt: null,
          },
        },
      ],
      timestamps: true,
      paranoid: true,
    },
  );

  municipalityEnum.associate = (models) => {



    
    models.municipalityEnum.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.municipalityEnum.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.municipalityEnum.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return municipalityEnum;
}
