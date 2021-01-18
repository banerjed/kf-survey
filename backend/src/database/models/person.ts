import { DataTypes } from 'sequelize';
import moment from 'moment';

/**
 * Person database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const person = sequelize.define(
    'person',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      firstName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          len: [2, 100],
          notEmpty: true,
        }
      },
      middleName: {
        type: DataTypes.TEXT,
      },
      lastName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          len: [3, 100],
          notEmpty: true,
        }
      },
      fullName: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      gender: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: [
          "Male",
          "Female"
        ],
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {

        }
      },
      dateOfBirth: {
        type: DataTypes.DATEONLY,
        get: function() {
          // @ts-ignore
          return this.getDataValue('dateOfBirth')
            ? moment
                // @ts-ignore
                .utc(this.getDataValue('dateOfBirth'))
                .format('YYYY-MM-DD')
            : null;
        },
      },
      roleInHousehold: {
        type: DataTypes.ENUM,
        values: [
          "Son",
          "Daughter",
          "Father",
          "Mother",
          "Kaka",
          "Mama",
          "Kaki",
          "Mami",
          "Mashi",
          "Mesho",
          "Chacha",
          "Chachi",
          "Dadu",
          "Dida",
          "Thakurda",
          "Thakuma",
          "Cousin",
          "Other"
        ],
      },
      livesAwayFromHome: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      isHeadOfHousehold: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      aadharNumber: {
        type: DataTypes.TEXT,
      },
      mobileNumber: {
        type: DataTypes.TEXT,
      },
      educationLevel: {
        type: DataTypes.ENUM,
        values: [
          "PrimarySchool",
          "MiddleSchool",
          "SecondarySchool",
          "HigherSecondary",
          "College",
          "Other"
        ],
      },
      primaryJob: {
        type: DataTypes.ENUM,
        values: [
          "Student",
          "Housewife",
          "Farmer",
          "ConstructionLaborer",
          "HouseMaid",
          "Other"
        ],
      },
      alternateLivelihood: {
        type: DataTypes.ENUM,
        values: [
          "Student",
          "Housewife",
          "Farmer",
          "Construction",
          "Fishing",
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
        {
          unique: true,
          fields: ['fullName', 'tenantId'],
          where: {
            deletedAt: null,
          },
        },
      ],
      timestamps: true,
      paranoid: true,
    },
  );

  person.associate = (models) => {
    models.person.belongsTo(models.household, {
      as: 'household',
      constraints: false,
    });

    models.person.hasMany(models.file, {
      as: 'picture',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: models.person.getTableName(),
        belongsToColumn: 'picture',
      },
    });
    
    models.person.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.person.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.person.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return person;
}
