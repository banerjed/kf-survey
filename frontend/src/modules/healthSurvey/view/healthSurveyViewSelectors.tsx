import { createSelector } from 'reselect';

const selectRaw = (state) => state.healthSurvey.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const healthSurveyViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default healthSurveyViewSelectors;
