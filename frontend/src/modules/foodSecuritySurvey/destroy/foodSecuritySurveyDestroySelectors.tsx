import { createSelector } from 'reselect';

const selectRaw = (state) => state.foodSecuritySurvey.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const foodSecuritySurveyDestroySelectors = {
  selectLoading,
};

export default foodSecuritySurveyDestroySelectors;
