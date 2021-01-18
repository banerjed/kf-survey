import list from 'src/modules/livelihoodSurvey/list/livelihoodSurveyListReducers';
import form from 'src/modules/livelihoodSurvey/form/livelihoodSurveyFormReducers';
import view from 'src/modules/livelihoodSurvey/view/livelihoodSurveyViewReducers';
import destroy from 'src/modules/livelihoodSurvey/destroy/livelihoodSurveyDestroyReducers';
import importerReducer from 'src/modules/livelihoodSurvey/importer/livelihoodSurveyImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
