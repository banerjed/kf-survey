import { DataTypes } from 'sequelize';

/**
 * VillageEnum database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const villageEnum = sequelize.define(
    'villageEnum',
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

  villageEnum.associate = (models) => {



    
    models.villageEnum.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.villageEnum.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.villageEnum.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return villageEnum;
}
