import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/govtBenefitsSurvey/importer/govtBenefitsSurveyImporterSelectors';
import GovtBenefitsSurveyService from 'src/modules/govtBenefitsSurvey/govtBenefitsSurveyService';
import fields from 'src/modules/govtBenefitsSurvey/importer/govtBenefitsSurveyImporterFields';
import { i18n } from 'src/i18n';

const govtBenefitsSurveyImporterActions = importerActions(
  'GOVTBENEFITSSURVEY_IMPORTER',
  selectors,
  GovtBenefitsSurveyService.import,
  fields,
  i18n('entities.govtBenefitsSurvey.importer.fileName'),
);

export default govtBenefitsSurveyImporterActions;