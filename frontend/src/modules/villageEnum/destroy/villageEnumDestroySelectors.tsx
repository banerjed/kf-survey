import { createSelector } from 'reselect';

const selectRaw = (state) => state.villageEnum.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const villageEnumDestroySelectors = {
  selectLoading,
};

export default villageEnumDestroySelectors;
