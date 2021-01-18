import { DataTypes } from 'sequelize';

/**
 * Household database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const household = sequelize.define(
    'household',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      householdName: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      address: {
        type: DataTypes.TEXT,
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
          fields: ['householdName', 'tenantId'],
          where: {
            deletedAt: null,
          },
        },
      ],
      timestamps: true,
      paranoid: true,
    },
  );

  household.associate = (models) => {
    models.household.hasMany(models.person, {
      as: 'members',
      constraints: false,
      foreignKey: 'householdId',
    });

    models.household.belongsTo(models.villageEnum, {
      as: 'village',
      constraints: false,
    });

    models.household.belongsTo(models.gramPanchayatEnum, {
      as: 'gramPanchayat',
      constraints: false,
    });

    models.household.belongsTo(models.municipalityEnum, {
      as: 'municipality',
      constraints: false,
    });

    models.household.belongsTo(models.districtEnum, {
      as: 'district',
      constraints: false,
    });


    
    models.household.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.household.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.household.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return household;
}
