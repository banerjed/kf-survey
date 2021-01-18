import MunicipalityEnumService from 'src/modules/municipalityEnum/municipalityEnumService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'MUNICIPALITYENUM_VIEW';

const municipalityEnumViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: municipalityEnumViewActions.FIND_STARTED,
      });

      const record = await MunicipalityEnumService.find(id);

      dispatch({
        type: municipalityEnumViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: municipalityEnumViewActions.FIND_ERROR,
      });

      getHistory().push('/municipality-enum');
    }
  },
};

export default municipalityEnumViewActions;
