import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/foodSecuritySurvey/importer/foodSecuritySurveyImporterSelectors';
import FoodSecuritySurveyService from 'src/modules/foodSecuritySurvey/foodSecuritySurveyService';
import fields from 'src/modules/foodSecuritySurvey/importer/foodSecuritySurveyImporterFields';
import { i18n } from 'src/i18n';

const foodSecuritySurveyImporterActions = importerActions(
  'FOODSECURITYSURVEY_IMPORTER',
  selectors,
  FoodSecuritySurveyService.import,
  fields,
  i18n('entities.foodSecuritySurvey.importer.fileName'),
);

export default foodSecuritySurveyImporterActions;