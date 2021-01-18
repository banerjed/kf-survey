import { createSelector } from 'reselect';

const selectRaw = (state) => state.govtBenefitsSurvey.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const govtBenefitsSurveyDestroySelectors = {
  selectLoading,
};

export default govtBenefitsSurveyDestroySelectors;
