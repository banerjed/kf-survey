import DistrictEnumService from 'src/modules/districtEnum/districtEnumService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'DISTRICTENUM_FORM';

const districtEnumFormActions = {
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
        type: districtEnumFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await DistrictEnumService.find(id);
      }

      dispatch({
        type: districtEnumFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: districtEnumFormActions.INIT_ERROR,
      });

      getHistory().push('/district-enum');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: districtEnumFormActions.CREATE_STARTED,
      });

      await DistrictEnumService.create(values);

      dispatch({
        type: districtEnumFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.districtEnum.create.success'),
      );

      getHistory().push('/district-enum');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: districtEnumFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: districtEnumFormActions.UPDATE_STARTED,
      });

      await DistrictEnumService.update(id, values);

      dispatch({
        type: districtEnumFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.districtEnum.update.success'),
      );

      getHistory().push('/district-enum');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: districtEnumFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default districtEnumFormActions;
