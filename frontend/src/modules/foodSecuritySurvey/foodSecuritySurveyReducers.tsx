import list from 'src/modules/foodSecuritySurvey/list/foodSecuritySurveyListReducers';
import form from 'src/modules/foodSecuritySurvey/form/foodSecuritySurveyFormReducers';
import view from 'src/modules/foodSecuritySurvey/view/foodSecuritySurveyViewReducers';
import destroy from 'src/modules/foodSecuritySurvey/destroy/foodSecuritySurveyDestroyReducers';
import importerReducer from 'src/modules/foodSecuritySurvey/importer/foodSecuritySurveyImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
