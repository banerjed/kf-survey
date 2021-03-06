export default (app) => {
  app.post(
    `/tenant/:tenantId/municipality-enum`,
    require('./municipalityEnumCreate').default,
  );
  app.put(
    `/tenant/:tenantId/municipality-enum/:id`,
    require('./municipalityEnumUpdate').default,
  );
  app.post(
    `/tenant/:tenantId/municipality-enum/import`,
    require('./municipalityEnumImport').default,
  );
  app.delete(
    `/tenant/:tenantId/municipality-enum`,
    require('./municipalityEnumDestroy').default,
  );
  app.get(
    `/tenant/:tenantId/municipality-enum/autocomplete`,
    require('./municipalityEnumAutocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/municipality-enum`,
    require('./municipalityEnumList').default,
  );
  app.get(
    `/tenant/:tenantId/municipality-enum/:id`,
    require('./municipalityEnumFind').default,
  );
};
