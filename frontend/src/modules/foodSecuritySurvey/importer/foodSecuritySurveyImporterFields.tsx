import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';
import foodSecuritySurveyEnumerators from 'src/modules/foodSecuritySurvey/foodSecuritySurveyEnumerators';

export default [
  {
    name: 'household',
    label: i18n('entities.foodSecuritySurvey.fields.household'),
    schema: schemas.relationToOne(
      i18n('entities.foodSecuritySurvey.fields.household'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'surveyDate',
    label: i18n('entities.foodSecuritySurvey.fields.surveyDate'),
    schema: schemas.date(
      i18n('entities.foodSecuritySurvey.fields.surveyDate'),
      {},
    ),
  },
  {
    name: 'enoughToEat',
    label: i18n('entities.foodSecuritySurvey.fields.enoughToEat'),
    schema: schemas.enumerator(
      i18n('entities.foodSecuritySurvey.fields.enoughToEat'),
      {
        "options": foodSecuritySurveyEnumerators.enoughToEat
      },
    ),
  },
  {
    name: 'proteinSource',
    label: i18n('entities.foodSecuritySurvey.fields.proteinSource'),
    schema: schemas.enumerator(
      i18n('entities.foodSecuritySurvey.fields.proteinSource'),
      {
        "options": foodSecuritySurveyEnumerators.proteinSource
      },
    ),
  },
];