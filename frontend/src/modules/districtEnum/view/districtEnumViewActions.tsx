import DistrictEnumService from 'src/modules/districtEnum/districtEnumService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'DISTRICTENUM_VIEW';

const districtEnumViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: districtEnumViewActions.FIND_STARTED,
      });

      const record = await DistrictEnumService.find(id);

      dispatch({
        type: districtEnumViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: districtEnumViewActions.FIND_ERROR,
      });

      getHistory().push('/district-enum');
    }
  },
};

export default districtEnumViewActions;
