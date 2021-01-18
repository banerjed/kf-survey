import GramPanchayatEnumService from 'src/modules/gramPanchayatEnum/gramPanchayatEnumService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'GRAMPANCHAYATENUM_FORM';

const gramPanchayatEnumFormActions = {
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
        type: gramPanchayatEnumFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await GramPanchayatEnumService.find(id);
      }

      dispatch({
        type: gramPanchayatEnumFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: gramPanchayatEnumFormActions.INIT_ERROR,
      });

      getHistory().push('/gram-panchayat-enum');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: gramPanchayatEnumFormActions.CREATE_STARTED,
      });

      await GramPanchayatEnumService.create(values);

      dispatch({
        type: gramPanchayatEnumFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.gramPanchayatEnum.create.success'),
      );

      getHistory().push('/gram-panchayat-enum');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: gramPanchayatEnumFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: gramPanchayatEnumFormActions.UPDATE_STARTED,
      });

      await GramPanchayatEnumService.update(id, values);

      dispatch({
        type: gramPanchayatEnumFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.gramPanchayatEnum.update.success'),
      );

      getHistory().push('/gram-panchayat-enum');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: gramPanchayatEnumFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default gramPanchayatEnumFormActions;
