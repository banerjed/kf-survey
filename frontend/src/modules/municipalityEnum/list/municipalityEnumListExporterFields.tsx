import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.municipalityEnum.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.municipalityEnum.fields.name'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.municipalityEnum.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.municipalityEnum.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
