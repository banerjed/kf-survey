import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'person',
    label: i18n('entities.govtBenefitsSurvey.fields.person'),
    schema: schemas.relationToOne(
      i18n('entities.govtBenefitsSurvey.fields.person'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'surveyDate',
    label: i18n('entities.govtBenefitsSurvey.fields.surveyDate'),
    schema: schemas.date(
      i18n('entities.govtBenefitsSurvey.fields.surveyDate'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'hasKanyashri',
    label: i18n('entities.govtBenefitsSurvey.fields.hasKanyashri'),
    schema: schemas.boolean(
      i18n('entities.govtBenefitsSurvey.fields.hasKanyashri'),
      {},
    ),
  },
  {
    name: 'hasPmAwasYojana',
    label: i18n('entities.govtBenefitsSurvey.fields.hasPmAwasYojana'),
    schema: schemas.boolean(
      i18n('entities.govtBenefitsSurvey.fields.hasPmAwasYojana'),
      {},
    ),
  },
  {
    name: 'hasChiefMinisterRelief',
    label: i18n('entities.govtBenefitsSurvey.fields.hasChiefMinisterRelief'),
    schema: schemas.boolean(
      i18n('entities.govtBenefitsSurvey.fields.hasChiefMinisterRelief'),
      {},
    ),
  },
  {
    name: 'hasSwasthyaSathi',
    label: i18n('entities.govtBenefitsSurvey.fields.hasSwasthyaSathi'),
    schema: schemas.boolean(
      i18n('entities.govtBenefitsSurvey.fields.hasSwasthyaSathi'),
      {},
    ),
  },
];