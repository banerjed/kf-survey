export default (app) => {
  app.post(
    `/tenant/:tenantId/govt-benefits-survey`,
    require('./govtBenefitsSurveyCreate').default,
  );
  app.put(
    `/tenant/:tenantId/govt-benefits-survey/:id`,
    require('./govtBenefitsSurveyUpdate').default,
  );
  app.post(
    `/tenant/:tenantId/govt-benefits-survey/import`,
    require('./govtBenefitsSurveyImport').default,
  );
  app.delete(
    `/tenant/:tenantId/govt-benefits-survey`,
    require('./govtBenefitsSurveyDestroy').default,
  );
  app.get(
    `/tenant/:tenantId/govt-benefits-survey/autocomplete`,
    require('./govtBenefitsSurveyAutocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/govt-benefits-survey`,
    require('./govtBenefitsSurveyList').default,
  );
  app.get(
    `/tenant/:tenantId/govt-benefits-survey/:id`,
    require('./govtBenefitsSurveyFind').default,
  );
};
