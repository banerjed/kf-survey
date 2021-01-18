import { createSelector } from 'reselect';

const selectRaw = (state) => state.homeSurvey.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const homeSurveyDestroySelectors = {
  selectLoading,
};

export default homeSurveyDestroySelectors;
