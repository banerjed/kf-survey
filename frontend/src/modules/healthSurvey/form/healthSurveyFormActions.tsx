import HealthSurveyService from 'src/modules/healthSurvey/healthSurveyService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'HEALTHSURVEY_FORM';

const healthSurveyFormActions = {
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
        type: healthSurveyFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await HealthSurveyService.find(id);
      }

      dispatch({
        type: healthSurveyFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: healthSurveyFormActions.INIT_ERROR,
      });

      getHistory().push('/health-survey');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: healthSurveyFormActions.CREATE_STARTED,
      });

      await HealthSurveyService.create(values);

      dispatch({
        type: healthSurveyFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.healthSurvey.create.success'),
      );

      getHistory().push('/health-survey');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: healthSurveyFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: healthSurveyFormActions.UPDATE_STARTED,
      });

      await HealthSurveyService.update(id, values);

      dispatch({
        type: healthSurveyFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.healthSurvey.update.success'),
      );

      getHistory().push('/health-survey');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: healthSurveyFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default healthSurveyFormActions;
