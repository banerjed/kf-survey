import list from 'src/modules/districtEnum/list/districtEnumListReducers';
import form from 'src/modules/districtEnum/form/districtEnumFormReducers';
import view from 'src/modules/districtEnum/view/districtEnumViewReducers';
import destroy from 'src/modules/districtEnum/destroy/districtEnumDestroyReducers';
import importerReducer from 'src/modules/districtEnum/importer/districtEnumImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
