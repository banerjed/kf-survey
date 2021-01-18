import ChronicDiseaseEnumService from 'src/modules/chronicDiseaseEnum/chronicDiseaseEnumService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'CHRONICDISEASEENUM_FORM';

const chronicDiseaseEnumFormActions = {
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
        type: chronicDiseaseEnumFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await ChronicDiseaseEnumService.find(id);
      }

      dispatch({
        type: chronicDiseaseEnumFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: chronicDiseaseEnumFormActions.INIT_ERROR,
      });

      getHistory().push('/chronic-disease-enum');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: chronicDiseaseEnumFormActions.CREATE_STARTED,
      });

      await ChronicDiseaseEnumService.create(values);

      dispatch({
        type: chronicDiseaseEnumFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.chronicDiseaseEnum.create.success'),
      );

      getHistory().push('/chronic-disease-enum');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: chronicDiseaseEnumFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: chronicDiseaseEnumFormActions.UPDATE_STARTED,
      });

      await ChronicDiseaseEnumService.update(id, values);

      dispatch({
        type: chronicDiseaseEnumFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.chronicDiseaseEnum.update.success'),
      );

      getHistory().push('/chronic-disease-enum');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: chronicDiseaseEnumFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default chronicDiseaseEnumFormActions;
