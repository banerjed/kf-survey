import list from 'src/modules/homeSurvey/list/homeSurveyListReducers';
import form from 'src/modules/homeSurvey/form/homeSurveyFormReducers';
import view from 'src/modules/homeSurvey/view/homeSurveyViewReducers';
import destroy from 'src/modules/homeSurvey/destroy/homeSurveyDestroyReducers';
import importerReducer from 'src/modules/homeSurvey/importer/homeSurveyImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
