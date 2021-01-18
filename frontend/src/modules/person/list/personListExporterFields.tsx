import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.person.fields.id'),
  },
  {
    name: 'firstName',
    label: i18n('entities.person.fields.firstName'),
  },
  {
    name: 'middleName',
    label: i18n('entities.person.fields.middleName'),
  },
  {
    name: 'lastName',
    label: i18n('entities.person.fields.lastName'),
  },
  {
    name: 'fullName',
    label: i18n('entities.person.fields.fullName'),
  },
  {
    name: 'gender',
    label: i18n('entities.person.fields.gender'),
  },
  {
    name: 'age',
    label: i18n('entities.person.fields.age'),
  },
  {
    name: 'dateOfBirth',
    label: i18n('entities.person.fields.dateOfBirth'),
  },
  {
    name: 'roleInHousehold',
    label: i18n('entities.person.fields.roleInHousehold'),
  },
  {
    name: 'livesAwayFromHome',
    label: i18n('entities.person.fields.livesAwayFromHome'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'isHeadOfHousehold',
    label: i18n('entities.person.fields.isHeadOfHousehold'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'aadharNumber',
    label: i18n('entities.person.fields.aadharNumber'),
  },
  {
    name: 'mobileNumber',
    label: i18n('entities.person.fields.mobileNumber'),
  },
  {
    name: 'educationLevel',
    label: i18n('entities.person.fields.educationLevel'),
  },
  {
    name: 'primaryJob',
    label: i18n('entities.person.fields.primaryJob'),
  },
  {
    name: 'alternateLivelihood',
    label: i18n('entities.person.fields.alternateLivelihood'),
  },
  {
    name: 'household',
    label: i18n('entities.person.fields.household'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'picture',
    label: i18n('entities.person.fields.picture'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.person.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.person.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
