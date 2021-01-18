import { createSelector } from 'reselect';

const selectRaw = (state) => state.gramPanchayatEnum.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const gramPanchayatEnumDestroySelectors = {
  selectLoading,
};

export default gramPanchayatEnumDestroySelectors;
