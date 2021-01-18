import FoodSecuritySurveyService from 'src/modules/foodSecuritySurvey/foodSecuritySurveyService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'FOODSECURITYSURVEY_FORM';

const foodSecuritySurveyFormActions = {
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
        type: foodSecuritySurveyFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await FoodSecuritySurveyService.find(id);
      }

      dispatch({
        type: foodSecuritySurveyFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: foodSecuritySurveyFormActions.INIT_ERROR,
      });

      getHistory().push('/food-security-survey');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: foodSecuritySurveyFormActions.CREATE_STARTED,
      });

      await FoodSecuritySurveyService.create(values);

      dispatch({
        type: foodSecuritySurveyFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.foodSecuritySurvey.create.success'),
      );

      getHistory().push('/food-security-survey');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: foodSecuritySurveyFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: foodSecuritySurveyFormActions.UPDATE_STARTED,
      });

      await FoodSecuritySurveyService.update(id, values);

      dispatch({
        type: foodSecuritySurveyFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.foodSecuritySurvey.update.success'),
      );

      getHistory().push('/food-security-survey');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: foodSecuritySurveyFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default foodSecuritySurveyFormActions;
