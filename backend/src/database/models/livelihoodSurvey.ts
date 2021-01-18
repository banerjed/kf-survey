import { DataTypes } from 'sequelize';
import moment from 'moment';

/**
 * LivelihoodSurvey database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const livelihoodSurvey = sequelize.define(
    'livelihoodSurvey',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      surveyDate: {
        type: DataTypes.DATEONLY,
        get: function() {
          // @ts-ignore
          return this.getDataValue('surveyDate')
            ? moment
                // @ts-ignore
                .utc(this.getDataValue('surveyDate'))
                .format('YYYY-MM-DD')
            : null;
        },
        allowNull: false,
      },
      annualHouseholdIncome: {
        type: DataTypes.INTEGER,
      },
      sizeOfFarm: {
        type: DataTypes.DECIMAL,
      },
      sizeOfPond: {
        type: DataTypes.DECIMAL,
      },
      whatIsFarmed: {
        type: DataTypes.TEXT,
      },
      doesFishing: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
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

      ],
      timestamps: true,
      paranoid: true,
    },
  );

  livelihoodSurvey.associate = (models) => {
    models.livelihoodSurvey.belongsTo(models.household, {
      as: 'household',
      constraints: false,
    });


    
    models.livelihoodSurvey.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.livelihoodSurvey.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.livelihoodSurvey.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return livelihoodSurvey;
}
