import list from 'src/modules/govtBenefitsSurvey/list/govtBenefitsSurveyListReducers';
import form from 'src/modules/govtBenefitsSurvey/form/govtBenefitsSurveyFormReducers';
import view from 'src/modules/govtBenefitsSurvey/view/govtBenefitsSurveyViewReducers';
import destroy from 'src/modules/govtBenefitsSurvey/destroy/govtBenefitsSurveyDestroyReducers';
import importerReducer from 'src/modules/govtBenefitsSurvey/importer/govtBenefitsSurveyImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
