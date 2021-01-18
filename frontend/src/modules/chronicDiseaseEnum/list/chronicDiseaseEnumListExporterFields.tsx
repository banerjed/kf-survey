import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.chronicDiseaseEnum.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.chronicDiseaseEnum.fields.name'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.chronicDiseaseEnum.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.chronicDiseaseEnum.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
