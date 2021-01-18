import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/foodSecuritySurvey/importer/foodSecuritySurveyImporterActions';
import fields from 'src/modules/foodSecuritySurvey/importer/foodSecuritySurveyImporterFields';
import selectors from 'src/modules/foodSecuritySurvey/importer/foodSecuritySurveyImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function FoodSecuritySurveyImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.foodSecuritySurvey.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.foodSecuritySurvey.menu'), '/food-security-survey'],
          [i18n('entities.foodSecuritySurvey.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.foodSecuritySurvey.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default FoodSecuritySurveyImportPage;
