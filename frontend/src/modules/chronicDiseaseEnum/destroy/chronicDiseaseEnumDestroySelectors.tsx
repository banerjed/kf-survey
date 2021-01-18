import { createSelector } from 'reselect';

const selectRaw = (state) => state.chronicDiseaseEnum.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const chronicDiseaseEnumDestroySelectors = {
  selectLoading,
};

export default chronicDiseaseEnumDestroySelectors;
