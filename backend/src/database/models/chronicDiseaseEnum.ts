import { DataTypes } from 'sequelize';

/**
 * ChronicDiseaseEnum database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const chronicDiseaseEnum = sequelize.define(
    'chronicDiseaseEnum',
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

  chronicDiseaseEnum.associate = (models) => {



    
    models.chronicDiseaseEnum.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.chronicDiseaseEnum.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.chronicDiseaseEnum.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return chronicDiseaseEnum;
}
