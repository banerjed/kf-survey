import listActions from 'src/modules/villageEnum/list/villageEnumListActions';
import VillageEnumService from 'src/modules/villageEnum/villageEnumService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'VILLAGEENUM_DESTROY';

const villageEnumDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: villageEnumDestroyActions.DESTROY_STARTED,
      });

      await VillageEnumService.destroyAll([id]);

      dispatch({
        type: villageEnumDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.villageEnum.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/village-enum');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: villageEnumDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: villageEnumDestroyActions.DESTROY_ALL_STARTED,
      });

      await VillageEnumService.destroyAll(ids);

      dispatch({
        type: villageEnumDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.villageEnum.destroyAll.success'),
      );

      getHistory().push('/village-enum');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: villageEnumDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default villageEnumDestroyActions;
