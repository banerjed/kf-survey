import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.govtBenefitsSurvey.fields.id'),
  },
  {
    name: 'person',
    label: i18n('entities.govtBenefitsSurvey.fields.person'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'surveyDate',
    label: i18n('entities.govtBenefitsSurvey.fields.surveyDate'),
  },
  {
    name: 'hasKanyashri',
    label: i18n('entities.govtBenefitsSurvey.fields.hasKanyashri'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'hasPmAwasYojana',
    label: i18n('entities.govtBenefitsSurvey.fields.hasPmAwasYojana'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'hasChiefMinisterRelief',
    label: i18n('entities.govtBenefitsSurvey.fields.hasChiefMinisterRelief'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'hasSwasthyaSathi',
    label: i18n('entities.govtBenefitsSurvey.fields.hasSwasthyaSathi'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.govtBenefitsSurvey.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.govtBenefitsSurvey.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
