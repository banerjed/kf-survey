import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';
import homeSurveyEnumerators from 'src/modules/homeSurvey/homeSurveyEnumerators';

export default [
  {
    name: 'household',
    label: i18n('entities.homeSurvey.fields.household'),
    schema: schemas.relationToOne(
      i18n('entities.homeSurvey.fields.household'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'surveyDate',
    label: i18n('entities.homeSurvey.fields.surveyDate'),
    schema: schemas.date(
      i18n('entities.homeSurvey.fields.surveyDate'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'homeType',
    label: i18n('entities.homeSurvey.fields.homeType'),
    schema: schemas.enumerator(
      i18n('entities.homeSurvey.fields.homeType'),
      {
        "options": homeSurveyEnumerators.homeType
      },
    ),
  },
  {
    name: 'roofType',
    label: i18n('entities.homeSurvey.fields.roofType'),
    schema: schemas.enumerator(
      i18n('entities.homeSurvey.fields.roofType'),
      {
        "options": homeSurveyEnumerators.roofType
      },
    ),
  },
  {
    name: 'houseArea',
    label: i18n('entities.homeSurvey.fields.houseArea'),
    schema: schemas.integer(
      i18n('entities.homeSurvey.fields.houseArea'),
      {},
    ),
  },
  {
    name: 'numberOfRooms',
    label: i18n('entities.homeSurvey.fields.numberOfRooms'),
    schema: schemas.integer(
      i18n('entities.homeSurvey.fields.numberOfRooms'),
      {},
    ),
  },
  {
    name: 'hasElectricity',
    label: i18n('entities.homeSurvey.fields.hasElectricity'),
    schema: schemas.boolean(
      i18n('entities.homeSurvey.fields.hasElectricity'),
      {},
    ),
  },
  {
    name: 'hasSanitation',
    label: i18n('entities.homeSurvey.fields.hasSanitation'),
    schema: schemas.boolean(
      i18n('entities.homeSurvey.fields.hasSanitation'),
      {},
    ),
  },
  {
    name: 'sourceOfDrinkingWater',
    label: i18n('entities.homeSurvey.fields.sourceOfDrinkingWater'),
    schema: schemas.enumerator(
      i18n('entities.homeSurvey.fields.sourceOfDrinkingWater'),
      {
        "options": homeSurveyEnumerators.sourceOfDrinkingWater
      },
    ),
  },
];