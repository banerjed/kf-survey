import list from 'src/modules/healthSurvey/list/healthSurveyListReducers';
import form from 'src/modules/healthSurvey/form/healthSurveyFormReducers';
import view from 'src/modules/healthSurvey/view/healthSurveyViewReducers';
import destroy from 'src/modules/healthSurvey/destroy/healthSurveyDestroyReducers';
import importerReducer from 'src/modules/healthSurvey/importer/healthSurveyImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
