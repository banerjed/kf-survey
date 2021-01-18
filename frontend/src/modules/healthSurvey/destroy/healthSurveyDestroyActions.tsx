import listActions from 'src/modules/healthSurvey/list/healthSurveyListActions';
import HealthSurveyService from 'src/modules/healthSurvey/healthSurveyService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'HEALTHSURVEY_DESTROY';

const healthSurveyDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: healthSurveyDestroyActions.DESTROY_STARTED,
      });

      await HealthSurveyService.destroyAll([id]);

      dispatch({
        type: healthSurveyDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.healthSurvey.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/health-survey');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: healthSurveyDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: healthSurveyDestroyActions.DESTROY_ALL_STARTED,
      });

      await HealthSurveyService.destroyAll(ids);

      dispatch({
        type: healthSurveyDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.healthSurvey.destroyAll.success'),
      );

      getHistory().push('/health-survey');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: healthSurveyDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default healthSurveyDestroyActions;
