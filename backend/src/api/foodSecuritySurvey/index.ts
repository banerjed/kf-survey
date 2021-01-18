export default (app) => {
  app.post(
    `/tenant/:tenantId/food-security-survey`,
    require('./foodSecuritySurveyCreate').default,
  );
  app.put(
    `/tenant/:tenantId/food-security-survey/:id`,
    require('./foodSecuritySurveyUpdate').default,
  );
  app.post(
    `/tenant/:tenantId/food-security-survey/import`,
    require('./foodSecuritySurveyImport').default,
  );
  app.delete(
    `/tenant/:tenantId/food-security-survey`,
    require('./foodSecuritySurveyDestroy').default,
  );
  app.get(
    `/tenant/:tenantId/food-security-survey/autocomplete`,
    require('./foodSecuritySurveyAutocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/food-security-survey`,
    require('./foodSecuritySurveyList').default,
  );
  app.get(
    `/tenant/:tenantId/food-security-survey/:id`,
    require('./foodSecuritySurveyFind').default,
  );
};