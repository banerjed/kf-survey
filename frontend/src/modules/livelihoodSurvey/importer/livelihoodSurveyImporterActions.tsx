import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/livelihoodSurvey/importer/livelihoodSurveyImporterSelectors';
import LivelihoodSurveyService from 'src/modules/livelihoodSurvey/livelihoodSurveyService';
import fields from 'src/modules/livelihoodSurvey/importer/livelihoodSurveyImporterFields';
import { i18n } from 'src/i18n';

const livelihoodSurveyImporterActions = importerActions(
  'LIVELIHOODSURVEY_IMPORTER',
  selectors,
  LivelihoodSurveyService.import,
  fields,
  i18n('entities.livelihoodSurvey.importer.fileName'),
);

export default livelihoodSurveyImporterActions;