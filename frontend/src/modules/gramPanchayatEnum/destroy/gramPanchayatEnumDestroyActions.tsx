import listActions from 'src/modules/gramPanchayatEnum/list/gramPanchayatEnumListActions';
import GramPanchayatEnumService from 'src/modules/gramPanchayatEnum/gramPanchayatEnumService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'GRAMPANCHAYATENUM_DESTROY';

const gramPanchayatEnumDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: gramPanchayatEnumDestroyActions.DESTROY_STARTED,
      });

      await GramPanchayatEnumService.destroyAll([id]);

      dispatch({
        type: gramPanchayatEnumDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.gramPanchayatEnum.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/gram-panchayat-enum');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: gramPanchayatEnumDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: gramPanchayatEnumDestroyActions.DESTROY_ALL_STARTED,
      });

      await GramPanchayatEnumService.destroyAll(ids);

      dispatch({
        type: gramPanchayatEnumDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.gramPanchayatEnum.destroyAll.success'),
      );

      getHistory().push('/gram-panchayat-enum');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: gramPanchayatEnumDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default gramPanchayatEnumDestroyActions;
