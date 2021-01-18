import { DataTypes } from 'sequelize';

/**
 * GramPanchayatEnum database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const gramPanchayatEnum = sequelize.define(
    'gramPanchayatEnum',
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

  gramPanchayatEnum.associate = (models) => {



    
    models.gramPanchayatEnum.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.gramPanchayatEnum.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.gramPanchayatEnum.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return gramPanchayatEnum;
}
