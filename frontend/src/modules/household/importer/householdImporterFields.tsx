import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'householdName',
    label: i18n('entities.household.fields.householdName'),
    schema: schemas.string(
      i18n('entities.household.fields.householdName'),
      {
        "required": true,
        "max": 255
      },
    ),
  },
  {
    name: 'address',
    label: i18n('entities.household.fields.address'),
    schema: schemas.string(
      i18n('entities.household.fields.address'),
      {},
    ),
  },
  {
    name: 'members',
    label: i18n('entities.household.fields.members'),
    schema: schemas.relationToMany(
      i18n('entities.household.fields.members'),
      {},
    ),
  },
  {
    name: 'village',
    label: i18n('entities.household.fields.village'),
    schema: schemas.relationToOne(
      i18n('entities.household.fields.village'),
      {},
    ),
  },
  {
    name: 'gramPanchayat',
    label: i18n('entities.household.fields.gramPanchayat'),
    schema: schemas.relationToOne(
      i18n('entities.household.fields.gramPanchayat'),
      {},
    ),
  },
  {
    name: 'municipality',
    label: i18n('entities.household.fields.municipality'),
    schema: schemas.relationToOne(
      i18n('entities.household.fields.municipality'),
      {},
    ),
  },
  {
    name: 'district',
    label: i18n('entities.household.fields.district'),
    schema: schemas.relationToOne(
      i18n('entities.household.fields.district'),
      {},
    ),
  },
];