export default (app) => {
  app.post(
    `/tenant/:tenantId/home-survey`,
    require('./homeSurveyCreate').default,
  );
  app.put(
    `/tenant/:tenantId/home-survey/:id`,
    require('./homeSurveyUpdate').default,
  );
  app.post(
    `/tenant/:tenantId/home-survey/import`,
    require('./homeSurveyImport').default,
  );
  app.delete(
    `/tenant/:tenantId/home-survey`,
    require('./homeSurveyDestroy').default,
  );
  app.get(
    `/tenant/:tenantId/home-survey/autocomplete`,
    require('./homeSurveyAutocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/home-survey`,
    require('./homeSurveyList').default,
  );
  app.get(
    `/tenant/:tenantId/home-survey/:id`,
    require('./homeSurveyFind').default,
  );
};
