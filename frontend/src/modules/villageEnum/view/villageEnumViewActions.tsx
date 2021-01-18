import VillageEnumService from 'src/modules/villageEnum/villageEnumService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'VILLAGEENUM_VIEW';

const villageEnumViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: villageEnumViewActions.FIND_STARTED,
      });

      const record = await VillageEnumService.find(id);

      dispatch({
        type: villageEnumViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: villageEnumViewActions.FIND_ERROR,
      });

      getHistory().push('/village-enum');
    }
  },
};

export default villageEnumViewActions;
