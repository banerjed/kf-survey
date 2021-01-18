import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.livelihoodSurvey.fields.id'),
  },
  {
    name: 'household',
    label: i18n('entities.livelihoodSurvey.fields.household'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'surveyDate',
    label: i18n('entities.livelihoodSurvey.fields.surveyDate'),
  },
  {
    name: 'annualHouseholdIncome',
    label: i18n('entities.livelihoodSurvey.fields.annualHouseholdIncome'),
  },
  {
    name: 'sizeOfFarm',
    label: i18n('entities.livelihoodSurvey.fields.sizeOfFarm'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'sizeOfPond',
    label: i18n('entities.livelihoodSurvey.fields.sizeOfPond'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'whatIsFarmed',
    label: i18n('entities.livelihoodSurvey.fields.whatIsFarmed'),
  },
  {
    name: 'doesFishing',
    label: i18n('entities.livelihoodSurvey.fields.doesFishing'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.livelihoodSurvey.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.livelihoodSurvey.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
