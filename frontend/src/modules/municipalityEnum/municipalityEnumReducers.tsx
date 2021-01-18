import list from 'src/modules/municipalityEnum/list/municipalityEnumListReducers';
import form from 'src/modules/municipalityEnum/form/municipalityEnumFormReducers';
import view from 'src/modules/municipalityEnum/view/municipalityEnumViewReducers';
import destroy from 'src/modules/municipalityEnum/destroy/municipalityEnumDestroyReducers';
import importerReducer from 'src/modules/municipalityEnum/importer/municipalityEnumImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
