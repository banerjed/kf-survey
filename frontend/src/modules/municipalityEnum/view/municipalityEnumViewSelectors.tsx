import { createSelector } from 'reselect';

const selectRaw = (state) => state.municipalityEnum.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const municipalityEnumViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default municipalityEnumViewSelectors;
