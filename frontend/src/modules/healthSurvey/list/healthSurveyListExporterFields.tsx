import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.healthSurvey.fields.id'),
  },
  {
    name: 'person',
    label: i18n('entities.healthSurvey.fields.person'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'surveyDate',
    label: i18n('entities.healthSurvey.fields.surveyDate'),
  },
  {
    name: 'healthCondition',
    label: i18n('entities.healthSurvey.fields.healthCondition'),
  },
  {
    name: 'weight',
    label: i18n('entities.healthSurvey.fields.weight'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'height',
    label: i18n('entities.healthSurvey.fields.height'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'heartRate',
    label: i18n('entities.healthSurvey.fields.heartRate'),
  },
  {
    name: 'pulseRate',
    label: i18n('entities.healthSurvey.fields.pulseRate'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'bloodOxygenLevel',
    label: i18n('entities.healthSurvey.fields.bloodOxygenLevel'),
  },
  {
    name: 'picture',
    label: i18n('entities.healthSurvey.fields.picture'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'smoking',
    label: i18n('entities.healthSurvey.fields.smoking'),
  },
  {
    name: 'smokingFrequency',
    label: i18n('entities.healthSurvey.fields.smokingFrequency'),
  },
  {
    name: 'drinking',
    label: i18n('entities.healthSurvey.fields.drinking'),
  },
  {
    name: 'substanceAbuse',
    label: i18n('entities.healthSurvey.fields.substanceAbuse'),
  },
  {
    name: 'chronicDisease1',
    label: i18n('entities.healthSurvey.fields.chronicDisease1'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'chronicDisease2',
    label: i18n('entities.healthSurvey.fields.chronicDisease2'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'chronicDisease3',
    label: i18n('entities.healthSurvey.fields.chronicDisease3'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.healthSurvey.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.healthSurvey.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
