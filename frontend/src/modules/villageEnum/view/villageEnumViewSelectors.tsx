import { createSelector } from 'reselect';

const selectRaw = (state) => state.villageEnum.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const villageEnumViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default villageEnumViewSelectors;
