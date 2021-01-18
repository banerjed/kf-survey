import { createSelector } from 'reselect';

const selectRaw = (state) => state.municipalityEnum.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const municipalityEnumDestroySelectors = {
  selectLoading,
};

export default municipalityEnumDestroySelectors;
