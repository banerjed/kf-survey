import { createSelector } from 'reselect';

const selectRaw = (state) => state.homeSurvey.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const homeSurveyViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default homeSurveyViewSelectors;
