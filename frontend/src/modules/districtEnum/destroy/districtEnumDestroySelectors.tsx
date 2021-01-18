import { createSelector } from 'reselect';

const selectRaw = (state) => state.districtEnum.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const districtEnumDestroySelectors = {
  selectLoading,
};

export default districtEnumDestroySelectors;
