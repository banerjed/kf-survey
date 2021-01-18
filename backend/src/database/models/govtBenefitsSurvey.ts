import { DataTypes } from 'sequelize';
import moment from 'moment';

/**
 * GovtBenefitsSurvey database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const govtBenefitsSurvey = sequelize.define(
    'govtBenefitsSurvey',
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
      hasKanyashri: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      hasPmAwasYojana: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      hasChiefMinisterRelief: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      hasSwasthyaSathi: {
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

  govtBenefitsSurvey.associate = (models) => {
    models.govtBenefitsSurvey.belongsTo(models.person, {
      as: 'person',
      constraints: false,
    });


    
    models.govtBenefitsSurvey.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.govtBenefitsSurvey.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.govtBenefitsSurvey.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return govtBenefitsSurvey;
}
