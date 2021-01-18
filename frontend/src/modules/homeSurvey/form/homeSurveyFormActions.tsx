import HomeSurveyService from 'src/modules/homeSurvey/homeSurveyService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'HOMESURVEY_FORM';

const homeSurveyFormActions = {
  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,

  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,

  UPDATE_STARTED: `${prefix}_UPDATE_STARTED`,
  UPDATE_SUCCESS: `${prefix}_UPDATE_SUCCESS`,
  UPDATE_ERROR: `${prefix}_UPDATE_ERROR`,

  doInit: (id) => async (dispatch) => {
    try {
      dispatch({
        type: homeSurveyFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await HomeSurveyService.find(id);
      }

      dispatch({
        type: homeSurveyFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: homeSurveyFormActions.INIT_ERROR,
      });

      getHistory().push('/home-survey');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: homeSurveyFormActions.CREATE_STARTED,
      });

      await HomeSurveyService.create(values);

      dispatch({
        type: homeSurveyFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.homeSurvey.create.success'),
      );

      getHistory().push('/home-survey');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: homeSurveyFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: homeSurveyFormActions.UPDATE_STARTED,
      });

      await HomeSurveyService.update(id, values);

      dispatch({
        type: homeSurveyFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.homeSurvey.update.success'),
      );

      getHistory().push('/home-survey');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: homeSurveyFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default homeSurveyFormActions;
