import list from 'src/modules/gramPanchayatEnum/list/gramPanchayatEnumListReducers';
import form from 'src/modules/gramPanchayatEnum/form/gramPanchayatEnumFormReducers';
import view from 'src/modules/gramPanchayatEnum/view/gramPanchayatEnumViewReducers';
import destroy from 'src/modules/gramPanchayatEnum/destroy/gramPanchayatEnumDestroyReducers';
import importerReducer from 'src/modules/gramPanchayatEnum/importer/gramPanchayatEnumImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
