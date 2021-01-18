import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'household',
    label: i18n('entities.livelihoodSurvey.fields.household'),
    schema: schemas.relationToOne(
      i18n('entities.livelihoodSurvey.fields.household'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'surveyDate',
    label: i18n('entities.livelihoodSurvey.fields.surveyDate'),
    schema: schemas.date(
      i18n('entities.livelihoodSurvey.fields.surveyDate'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'annualHouseholdIncome',
    label: i18n('entities.livelihoodSurvey.fields.annualHouseholdIncome'),
    schema: schemas.integer(
      i18n('entities.livelihoodSurvey.fields.annualHouseholdIncome'),
      {},
    ),
  },
  {
    name: 'sizeOfFarm',
    label: i18n('entities.livelihoodSurvey.fields.sizeOfFarm'),
    schema: schemas.decimal(
      i18n('entities.livelihoodSurvey.fields.sizeOfFarm'),
      {},
    ),
  },
  {
    name: 'sizeOfPond',
    label: i18n('entities.livelihoodSurvey.fields.sizeOfPond'),
    schema: schemas.decimal(
      i18n('entities.livelihoodSurvey.fields.sizeOfPond'),
      {},
    ),
  },
  {
    name: 'whatIsFarmed',
    label: i18n('entities.livelihoodSurvey.fields.whatIsFarmed'),
    schema: schemas.string(
      i18n('entities.livelihoodSurvey.fields.whatIsFarmed'),
      {},
    ),
  },
  {
    name: 'doesFishing',
    label: i18n('entities.livelihoodSurvey.fields.doesFishing'),
    schema: schemas.boolean(
      i18n('entities.livelihoodSurvey.fields.doesFishing'),
      {},
    ),
  },
];