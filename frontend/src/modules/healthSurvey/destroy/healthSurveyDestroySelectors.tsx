import { createSelector } from 'reselect';

const selectRaw = (state) => state.healthSurvey.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const healthSurveyDestroySelectors = {
  selectLoading,
};

export default healthSurveyDestroySelectors;
