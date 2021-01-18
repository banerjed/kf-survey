import { createSelector } from 'reselect';

const selectRaw = (state) => state.govtBenefitsSurvey.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const govtBenefitsSurveyViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default govtBenefitsSurveyViewSelectors;
