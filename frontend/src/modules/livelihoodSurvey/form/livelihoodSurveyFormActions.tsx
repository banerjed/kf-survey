import LivelihoodSurveyService from 'src/modules/livelihoodSurvey/livelihoodSurveyService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'LIVELIHOODSURVEY_FORM';

const livelihoodSurveyFormActions = {
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
        type: livelihoodSurveyFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await LivelihoodSurveyService.find(id);
      }

      dispatch({
        type: livelihoodSurveyFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: livelihoodSurveyFormActions.INIT_ERROR,
      });

      getHistory().push('/livelihood-survey');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: livelihoodSurveyFormActions.CREATE_STARTED,
      });

      await LivelihoodSurveyService.create(values);

      dispatch({
        type: livelihoodSurveyFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.livelihoodSurvey.create.success'),
      );

      getHistory().push('/livelihood-survey');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: livelihoodSurveyFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: livelihoodSurveyFormActions.UPDATE_STARTED,
      });

      await LivelihoodSurveyService.update(id, values);

      dispatch({
        type: livelihoodSurveyFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.livelihoodSurvey.update.success'),
      );

      getHistory().push('/livelihood-survey');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: livelihoodSurveyFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default livelihoodSurveyFormActions;
