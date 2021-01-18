import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/healthSurvey/importer/healthSurveyImporterSelectors';
import HealthSurveyService from 'src/modules/healthSurvey/healthSurveyService';
import fields from 'src/modules/healthSurvey/importer/healthSurveyImporterFields';
import { i18n } from 'src/i18n';

const healthSurveyImporterActions = importerActions(
  'HEALTHSURVEY_IMPORTER',
  selectors,
  HealthSurveyService.import,
  fields,
  i18n('entities.healthSurvey.importer.fileName'),
);

export default healthSurveyImporterActions;