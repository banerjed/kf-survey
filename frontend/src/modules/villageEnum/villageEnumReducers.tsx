import list from 'src/modules/villageEnum/list/villageEnumListReducers';
import form from 'src/modules/villageEnum/form/villageEnumFormReducers';
import view from 'src/modules/villageEnum/view/villageEnumViewReducers';
import destroy from 'src/modules/villageEnum/destroy/villageEnumDestroyReducers';
import importerReducer from 'src/modules/villageEnum/importer/villageEnumImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
