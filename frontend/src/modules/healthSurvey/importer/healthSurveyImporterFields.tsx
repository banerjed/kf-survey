import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';
import healthSurveyEnumerators from 'src/modules/healthSurvey/healthSurveyEnumerators';

export default [
  {
    name: 'person',
    label: i18n('entities.healthSurvey.fields.person'),
    schema: schemas.relationToOne(
      i18n('entities.healthSurvey.fields.person'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'surveyDate',
    label: i18n('entities.healthSurvey.fields.surveyDate'),
    schema: schemas.date(
      i18n('entities.healthSurvey.fields.surveyDate'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'healthCondition',
    label: i18n('entities.healthSurvey.fields.healthCondition'),
    schema: schemas.enumerator(
      i18n('entities.healthSurvey.fields.healthCondition'),
      {
        "options": healthSurveyEnumerators.healthCondition
      },
    ),
  },
  {
    name: 'weight',
    label: i18n('entities.healthSurvey.fields.weight'),
    schema: schemas.decimal(
      i18n('entities.healthSurvey.fields.weight'),
      {},
    ),
  },
  {
    name: 'height',
    label: i18n('entities.healthSurvey.fields.height'),
    schema: schemas.decimal(
      i18n('entities.healthSurvey.fields.height'),
      {},
    ),
  },
  {
    name: 'heartRate',
    label: i18n('entities.healthSurvey.fields.heartRate'),
    schema: schemas.string(
      i18n('entities.healthSurvey.fields.heartRate'),
      {},
    ),
  },
  {
    name: 'pulseRate',
    label: i18n('entities.healthSurvey.fields.pulseRate'),
    schema: schemas.decimal(
      i18n('entities.healthSurvey.fields.pulseRate'),
      {},
    ),
  },
  {
    name: 'bloodOxygenLevel',
    label: i18n('entities.healthSurvey.fields.bloodOxygenLevel'),
    schema: schemas.string(
      i18n('entities.healthSurvey.fields.bloodOxygenLevel'),
      {},
    ),
  },
  {
    name: 'picture',
    label: i18n('entities.healthSurvey.fields.picture'),
    schema: schemas.images(
      i18n('entities.healthSurvey.fields.picture'),
      {},
    ),
  },
  {
    name: 'smoking',
    label: i18n('entities.healthSurvey.fields.smoking'),
    schema: schemas.enumerator(
      i18n('entities.healthSurvey.fields.smoking'),
      {
        "options": healthSurveyEnumerators.smoking
      },
    ),
  },
  {
    name: 'smokingFrequency',
    label: i18n('entities.healthSurvey.fields.smokingFrequency'),
    schema: schemas.string(
      i18n('entities.healthSurvey.fields.smokingFrequency'),
      {},
    ),
  },
  {
    name: 'drinking',
    label: i18n('entities.healthSurvey.fields.drinking'),
    schema: schemas.enumerator(
      i18n('entities.healthSurvey.fields.drinking'),
      {
        "options": healthSurveyEnumerators.drinking
      },
    ),
  },
  {
    name: 'substanceAbuse',
    label: i18n('entities.healthSurvey.fields.substanceAbuse'),
    schema: schemas.enumerator(
      i18n('entities.healthSurvey.fields.substanceAbuse'),
      {
        "options": healthSurveyEnumerators.substanceAbuse
      },
    ),
  },
  {
    name: 'chronicDisease1',
    label: i18n('entities.healthSurvey.fields.chronicDisease1'),
    schema: schemas.relationToOne(
      i18n('entities.healthSurvey.fields.chronicDisease1'),
      {},
    ),
  },
  {
    name: 'chronicDisease2',
    label: i18n('entities.healthSurvey.fields.chronicDisease2'),
    schema: schemas.relationToOne(
      i18n('entities.healthSurvey.fields.chronicDisease2'),
      {},
    ),
  },
  {
    name: 'chronicDisease3',
    label: i18n('entities.healthSurvey.fields.chronicDisease3'),
    schema: schemas.relationToOne(
      i18n('entities.healthSurvey.fields.chronicDisease3'),
      {},
    ),
  },
];