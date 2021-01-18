import LivelihoodSurveyService from 'src/modules/livelihoodSurvey/livelihoodSurveyService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'LIVELIHOODSURVEY_VIEW';

const livelihoodSurveyViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: livelihoodSurveyViewActions.FIND_STARTED,
      });

      const record = await LivelihoodSurveyService.find(id);

      dispatch({
        type: livelihoodSurveyViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: livelihoodSurveyViewActions.FIND_ERROR,
      });

      getHistory().push('/livelihood-survey');
    }
  },
};

export default livelihoodSurveyViewActions;
