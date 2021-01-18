import { DataTypes } from 'sequelize';
import moment from 'moment';

/**
 * HomeSurvey database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const homeSurvey = sequelize.define(
    'homeSurvey',
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
      homeType: {
        type: DataTypes.ENUM,
        values: [
          "Kacha_Bari",
          "OneStory_PuccaHouse",
          "TwoStory_PuccaHouse",
          "ThreeStory_PuccaHouse",
          "Other"
        ],
      },
      roofType: {
        type: DataTypes.ENUM,
        values: [
          "Concrete",
          "Asbestos",
          "Tiles",
          "Khorer_Chaal",
          "Other"
        ],
      },
      houseArea: {
        type: DataTypes.INTEGER,
      },
      numberOfRooms: {
        type: DataTypes.INTEGER,
      },
      hasElectricity: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      hasSanitation: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      sourceOfDrinkingWater: {
        type: DataTypes.ENUM,
        values: [
          "Tubewell",
          "Well",
          "Pond",
          "Tap",
          "Other"
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

  homeSurvey.associate = (models) => {
    models.homeSurvey.belongsTo(models.household, {
      as: 'household',
      constraints: false,
    });


    
    models.homeSurvey.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.homeSurvey.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.homeSurvey.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return homeSurvey;
}
