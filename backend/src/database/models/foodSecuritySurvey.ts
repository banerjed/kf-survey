import { DataTypes } from 'sequelize';
import moment from 'moment';

/**
 * FoodSecuritySurvey database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const foodSecuritySurvey = sequelize.define(
    'foodSecuritySurvey',
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
      },
      enoughToEat: {
        type: DataTypes.ENUM,
        values: [
          "OneMealPerDay",
          "TwoMealsPerDay",
          "ThreeMealsPerDay",
          "FourMealsPerDay"
        ],
      },
      proteinSource: {
        type: DataTypes.ENUM,
        values: [
          "Eggs",
          "Chicken",
          "Fish",
          "Meat",
          "Soyabean"
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

  foodSecuritySurvey.associate = (models) => {
    models.foodSecuritySurvey.belongsTo(models.household, {
      as: 'household',
      constraints: false,
    });


    
    models.foodSecuritySurvey.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.foodSecuritySurvey.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.foodSecuritySurvey.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return foodSecuritySurvey;
}
