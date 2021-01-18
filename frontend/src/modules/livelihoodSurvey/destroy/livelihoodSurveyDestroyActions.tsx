import listActions from 'src/modules/livelihoodSurvey/list/livelihoodSurveyListActions';
import LivelihoodSurveyService from 'src/modules/livelihoodSurvey/livelihoodSurveyService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'LIVELIHOODSURVEY_DESTROY';

const livelihoodSurveyDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: livelihoodSurveyDestroyActions.DESTROY_STARTED,
      });

      await LivelihoodSurveyService.destroyAll([id]);

      dispatch({
        type: livelihoodSurveyDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.livelihoodSurvey.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/livelihood-survey');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: livelihoodSurveyDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: livelihoodSurveyDestroyActions.DESTROY_ALL_STARTED,
      });

      await LivelihoodSurveyService.destroyAll(ids);

      dispatch({
        type: livelihoodSurveyDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.livelihoodSurvey.destroyAll.success'),
      );

      getHistory().push('/livelihood-survey');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: livelihoodSurveyDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default livelihoodSurveyDestroyActions;
