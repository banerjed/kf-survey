import listActions from 'src/modules/chronicDiseaseEnum/list/chronicDiseaseEnumListActions';
import ChronicDiseaseEnumService from 'src/modules/chronicDiseaseEnum/chronicDiseaseEnumService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'CHRONICDISEASEENUM_DESTROY';

const chronicDiseaseEnumDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: chronicDiseaseEnumDestroyActions.DESTROY_STARTED,
      });

      await ChronicDiseaseEnumService.destroyAll([id]);

      dispatch({
        type: chronicDiseaseEnumDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.chronicDiseaseEnum.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/chronic-disease-enum');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: chronicDiseaseEnumDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: chronicDiseaseEnumDestroyActions.DESTROY_ALL_STARTED,
      });

      await ChronicDiseaseEnumService.destroyAll(ids);

      dispatch({
        type: chronicDiseaseEnumDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.chronicDiseaseEnum.destroyAll.success'),
      );

      getHistory().push('/chronic-disease-enum');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: chronicDiseaseEnumDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default chronicDiseaseEnumDestroyActions;
