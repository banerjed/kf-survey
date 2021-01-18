import GramPanchayatEnumService from 'src/modules/gramPanchayatEnum/gramPanchayatEnumService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'GRAMPANCHAYATENUM_VIEW';

const gramPanchayatEnumViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: gramPanchayatEnumViewActions.FIND_STARTED,
      });

      const record = await GramPanchayatEnumService.find(id);

      dispatch({
        type: gramPanchayatEnumViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: gramPanchayatEnumViewActions.FIND_ERROR,
      });

      getHistory().push('/gram-panchayat-enum');
    }
  },
};

export default gramPanchayatEnumViewActions;
