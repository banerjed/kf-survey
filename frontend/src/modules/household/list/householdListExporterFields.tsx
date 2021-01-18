import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.household.fields.id'),
  },
  {
    name: 'householdName',
    label: i18n('entities.household.fields.householdName'),
  },
  {
    name: 'address',
    label: i18n('entities.household.fields.address'),
  },
  {
    name: 'members',
    label: i18n('entities.household.fields.members'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'village',
    label: i18n('entities.household.fields.village'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'gramPanchayat',
    label: i18n('entities.household.fields.gramPanchayat'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'municipality',
    label: i18n('entities.household.fields.municipality'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'district',
    label: i18n('entities.household.fields.district'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.household.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.household.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
