import listActions from 'src/modules/homeSurvey/list/homeSurveyListActions';
import HomeSurveyService from 'src/modules/homeSurvey/homeSurveyService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'HOMESURVEY_DESTROY';

const homeSurveyDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: homeSurveyDestroyActions.DESTROY_STARTED,
      });

      await HomeSurveyService.destroyAll([id]);

      dispatch({
        type: homeSurveyDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.homeSurvey.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/home-survey');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: homeSurveyDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: homeSurveyDestroyActions.DESTROY_ALL_STARTED,
      });

      await HomeSurveyService.destroyAll(ids);

      dispatch({
        type: homeSurveyDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.homeSurvey.destroyAll.success'),
      );

      getHistory().push('/home-survey');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: homeSurveyDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default homeSurveyDestroyActions;
