import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.foodSecuritySurvey.fields.id'),
  },
  {
    name: 'household',
    label: i18n('entities.foodSecuritySurvey.fields.household'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'surveyDate',
    label: i18n('entities.foodSecuritySurvey.fields.surveyDate'),
  },
  {
    name: 'enoughToEat',
    label: i18n('entities.foodSecuritySurvey.fields.enoughToEat'),
  },
  {
    name: 'proteinSource',
    label: i18n('entities.foodSecuritySurvey.fields.proteinSource'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.foodSecuritySurvey.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.foodSecuritySurvey.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
