import list from 'src/modules/chronicDiseaseEnum/list/chronicDiseaseEnumListReducers';
import form from 'src/modules/chronicDiseaseEnum/form/chronicDiseaseEnumFormReducers';
import view from 'src/modules/chronicDiseaseEnum/view/chronicDiseaseEnumViewReducers';
import destroy from 'src/modules/chronicDiseaseEnum/destroy/chronicDiseaseEnumDestroyReducers';
import importerReducer from 'src/modules/chronicDiseaseEnum/importer/chronicDiseaseEnumImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
