import listActions from 'src/modules/govtBenefitsSurvey/list/govtBenefitsSurveyListActions';
import GovtBenefitsSurveyService from 'src/modules/govtBenefitsSurvey/govtBenefitsSurveyService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'GOVTBENEFITSSURVEY_DESTROY';

const govtBenefitsSurveyDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: govtBenefitsSurveyDestroyActions.DESTROY_STARTED,
      });

      await GovtBenefitsSurveyService.destroyAll([id]);

      dispatch({
        type: govtBenefitsSurveyDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.govtBenefitsSurvey.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/govt-benefits-survey');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: govtBenefitsSurveyDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: govtBenefitsSurveyDestroyActions.DESTROY_ALL_STARTED,
      });

      await GovtBenefitsSurveyService.destroyAll(ids);

      dispatch({
        type: govtBenefitsSurveyDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.govtBenefitsSurvey.destroyAll.success'),
      );

      getHistory().push('/govt-benefits-survey');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: govtBenefitsSurveyDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default govtBenefitsSurveyDestroyActions;
