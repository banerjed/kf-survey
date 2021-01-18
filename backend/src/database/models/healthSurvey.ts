import { DataTypes } from 'sequelize';
import moment from 'moment';

/**
 * HealthSurvey database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const healthSurvey = sequelize.define(
    'healthSurvey',
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
      healthCondition: {
        type: DataTypes.ENUM,
        values: [
          "Healthy",
          "Sickly",
          "VerySickly",
          "Underweight",
          "Anaemic"
        ],
      },
      weight: {
        type: DataTypes.DECIMAL,
      },
      height: {
        type: DataTypes.DECIMAL,
      },
      heartRate: {
        type: DataTypes.TEXT,
      },
      pulseRate: {
        type: DataTypes.DECIMAL,
      },
      bloodOxygenLevel: {
        type: DataTypes.TEXT,
      },
      smoking: {
        type: DataTypes.ENUM,
        values: [
          "None",
          "Ganja",
          "Bidi",
          "Cigarette"
        ],
      },
      smokingFrequency: {
        type: DataTypes.TEXT,
      },
      drinking: {
        type: DataTypes.ENUM,
        values: [
          "Occasional",
          "Daily",
          "FewDaysPerWeek"
        ],
      },
      substanceAbuse: {
        type: DataTypes.ENUM,
        values: [
          "None",
          "Drugs",
          "Ganja"
        ],
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

  healthSurvey.associate = (models) => {
    models.healthSurvey.belongsTo(models.person, {
      as: 'person',
      constraints: false,
    });

    models.healthSurvey.belongsTo(models.chronicDiseaseEnum, {
      as: 'chronicDisease1',
      constraints: false,
    });

    models.healthSurvey.belongsTo(models.chronicDiseaseEnum, {
      as: 'chronicDisease2',
      constraints: false,
    });

    models.healthSurvey.belongsTo(models.chronicDiseaseEnum, {
      as: 'chronicDisease3',
      constraints: false,
    });

    models.healthSurvey.hasMany(models.file, {
      as: 'picture',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: models.healthSurvey.getTableName(),
        belongsToColumn: 'picture',
      },
    });
    
    models.healthSurvey.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.healthSurvey.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.healthSurvey.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return healthSurvey;
}
