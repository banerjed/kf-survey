import GovtBenefitsSurveyService from 'src/modules/govtBenefitsSurvey/govtBenefitsSurveyService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'GOVTBENEFITSSURVEY_VIEW';

const govtBenefitsSurveyViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: govtBenefitsSurveyViewActions.FIND_STARTED,
      });

      const record = await GovtBenefitsSurveyService.find(id);

      dispatch({
        type: govtBenefitsSurveyViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: govtBenefitsSurveyViewActions.FIND_ERROR,
      });

      getHistory().push('/govt-benefits-survey');
    }
  },
};

export default govtBenefitsSurveyViewActions;
