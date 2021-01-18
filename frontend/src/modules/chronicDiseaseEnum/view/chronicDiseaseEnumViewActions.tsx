import ChronicDiseaseEnumService from 'src/modules/chronicDiseaseEnum/chronicDiseaseEnumService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'CHRONICDISEASEENUM_VIEW';

const chronicDiseaseEnumViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: chronicDiseaseEnumViewActions.FIND_STARTED,
      });

      const record = await ChronicDiseaseEnumService.find(id);

      dispatch({
        type: chronicDiseaseEnumViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: chronicDiseaseEnumViewActions.FIND_ERROR,
      });

      getHistory().push('/chronic-disease-enum');
    }
  },
};

export default chronicDiseaseEnumViewActions;
