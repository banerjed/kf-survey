import FoodSecuritySurveyService from 'src/modules/foodSecuritySurvey/foodSecuritySurveyService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'FOODSECURITYSURVEY_VIEW';

const foodSecuritySurveyViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: foodSecuritySurveyViewActions.FIND_STARTED,
      });

      const record = await FoodSecuritySurveyService.find(id);

      dispatch({
        type: foodSecuritySurveyViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: foodSecuritySurveyViewActions.FIND_ERROR,
      });

      getHistory().push('/food-security-survey');
    }
  },
};

export default foodSecuritySurveyViewActions;
