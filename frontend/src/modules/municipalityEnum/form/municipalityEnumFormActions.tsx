import MunicipalityEnumService from 'src/modules/municipalityEnum/municipalityEnumService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'MUNICIPALITYENUM_FORM';

const municipalityEnumFormActions = {
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
        type: municipalityEnumFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await MunicipalityEnumService.find(id);
      }

      dispatch({
        type: municipalityEnumFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: municipalityEnumFormActions.INIT_ERROR,
      });

      getHistory().push('/municipality-enum');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: municipalityEnumFormActions.CREATE_STARTED,
      });

      await MunicipalityEnumService.create(values);

      dispatch({
        type: municipalityEnumFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.municipalityEnum.create.success'),
      );

      getHistory().push('/municipality-enum');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: municipalityEnumFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: municipalityEnumFormActions.UPDATE_STARTED,
      });

      await MunicipalityEnumService.update(id, values);

      dispatch({
        type: municipalityEnumFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.municipalityEnum.update.success'),
      );

      getHistory().push('/municipality-enum');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: municipalityEnumFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default municipalityEnumFormActions;
