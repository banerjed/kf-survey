import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/homeSurvey/importer/homeSurveyImporterSelectors';
import HomeSurveyService from 'src/modules/homeSurvey/homeSurveyService';
import fields from 'src/modules/homeSurvey/importer/homeSurveyImporterFields';
import { i18n } from 'src/i18n';

const homeSurveyImporterActions = importerActions(
  'HOMESURVEY_IMPORTER',
  selectors,
  HomeSurveyService.import,
  fields,
  i18n('entities.homeSurvey.importer.fileName'),
);

export default homeSurveyImporterActions;