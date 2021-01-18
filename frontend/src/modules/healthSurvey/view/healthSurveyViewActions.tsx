import HealthSurveyService from 'src/modules/healthSurvey/healthSurveyService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'HEALTHSURVEY_VIEW';

const healthSurveyViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: healthSurveyViewActions.FIND_STARTED,
      });

      const record = await HealthSurveyService.find(id);

      dispatch({
        type: healthSurveyViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: healthSurveyViewActions.FIND_ERROR,
      });

      getHistory().push('/health-survey');
    }
  },
};

export default healthSurveyViewActions;
