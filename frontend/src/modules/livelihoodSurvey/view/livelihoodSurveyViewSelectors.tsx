import { createSelector } from 'reselect';

const selectRaw = (state) => state.livelihoodSurvey.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const livelihoodSurveyViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default livelihoodSurveyViewSelectors;
