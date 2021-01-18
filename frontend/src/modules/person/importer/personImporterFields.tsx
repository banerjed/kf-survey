import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';
import personEnumerators from 'src/modules/person/personEnumerators';

export default [
  {
    name: 'firstName',
    label: i18n('entities.person.fields.firstName'),
    schema: schemas.string(
      i18n('entities.person.fields.firstName'),
      {
        "required": true,
        "min": 2,
        "max": 100
      },
    ),
  },
  {
    name: 'middleName',
    label: i18n('entities.person.fields.middleName'),
    schema: schemas.string(
      i18n('entities.person.fields.middleName'),
      {},
    ),
  },
  {
    name: 'lastName',
    label: i18n('entities.person.fields.lastName'),
    schema: schemas.string(
      i18n('entities.person.fields.lastName'),
      {
        "required": true,
        "min": 3,
        "max": 100
      },
    ),
  },
  {
    name: 'fullName',
    label: i18n('entities.person.fields.fullName'),
    schema: schemas.string(
      i18n('entities.person.fields.fullName'),
      {
        "required": true,
        "max": 255
      },
    ),
  },
  {
    name: 'gender',
    label: i18n('entities.person.fields.gender'),
    schema: schemas.enumerator(
      i18n('entities.person.fields.gender'),
      {
        "required": true,
        "options": personEnumerators.gender
      },
    ),
  },
  {
    name: 'age',
    label: i18n('entities.person.fields.age'),
    schema: schemas.integer(
      i18n('entities.person.fields.age'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'dateOfBirth',
    label: i18n('entities.person.fields.dateOfBirth'),
    schema: schemas.date(
      i18n('entities.person.fields.dateOfBirth'),
      {},
    ),
  },
  {
    name: 'roleInHousehold',
    label: i18n('entities.person.fields.roleInHousehold'),
    schema: schemas.enumerator(
      i18n('entities.person.fields.roleInHousehold'),
      {
        "options": personEnumerators.roleInHousehold
      },
    ),
  },
  {
    name: 'livesAwayFromHome',
    label: i18n('entities.person.fields.livesAwayFromHome'),
    schema: schemas.boolean(
      i18n('entities.person.fields.livesAwayFromHome'),
      {},
    ),
  },
  {
    name: 'isHeadOfHousehold',
    label: i18n('entities.person.fields.isHeadOfHousehold'),
    schema: schemas.boolean(
      i18n('entities.person.fields.isHeadOfHousehold'),
      {},
    ),
  },
  {
    name: 'aadharNumber',
    label: i18n('entities.person.fields.aadharNumber'),
    schema: schemas.string(
      i18n('entities.person.fields.aadharNumber'),
      {},
    ),
  },
  {
    name: 'mobileNumber',
    label: i18n('entities.person.fields.mobileNumber'),
    schema: schemas.string(
      i18n('entities.person.fields.mobileNumber'),
      {},
    ),
  },
  {
    name: 'educationLevel',
    label: i18n('entities.person.fields.educationLevel'),
    schema: schemas.enumerator(
      i18n('entities.person.fields.educationLevel'),
      {
        "options": personEnumerators.educationLevel
      },
    ),
  },
  {
    name: 'primaryJob',
    label: i18n('entities.person.fields.primaryJob'),
    schema: schemas.enumerator(
      i18n('entities.person.fields.primaryJob'),
      {
        "options": personEnumerators.primaryJob
      },
    ),
  },
  {
    name: 'alternateLivelihood',
    label: i18n('entities.person.fields.alternateLivelihood'),
    schema: schemas.enumerator(
      i18n('entities.person.fields.alternateLivelihood'),
      {
        "options": personEnumerators.alternateLivelihood
      },
    ),
  },
  {
    name: 'household',
    label: i18n('entities.person.fields.household'),
    schema: schemas.relationToOne(
      i18n('entities.person.fields.household'),
      {},
    ),
  },
  {
    name: 'picture',
    label: i18n('entities.person.fields.picture'),
    schema: schemas.images(
      i18n('entities.person.fields.picture'),
      {},
    ),
  },
];