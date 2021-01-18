import HomeSurveyService from 'src/modules/homeSurvey/homeSurveyService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'HOMESURVEY_VIEW';

const homeSurveyViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: homeSurveyViewActions.FIND_STARTED,
      });

      const record = await HomeSurveyService.find(id);

      dispatch({
        type: homeSurveyViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: homeSurveyViewActions.FIND_ERROR,
      });

      getHistory().push('/home-survey');
    }
  },
};

export default homeSurveyViewActions;
