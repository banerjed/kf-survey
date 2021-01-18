import { createSelector } from 'reselect';

const selectRaw = (state) => state.livelihoodSurvey.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const livelihoodSurveyDestroySelectors = {
  selectLoading,
};

export default livelihoodSurveyDestroySelectors;
