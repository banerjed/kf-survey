import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/livelihoodSurvey/importer/livelihoodSurveyImporterActions';
import fields from 'src/modules/livelihoodSurvey/importer/livelihoodSurveyImporterFields';
import selectors from 'src/modules/livelihoodSurvey/importer/livelihoodSurveyImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function LivelihoodSurveyImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.livelihoodSurvey.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.livelihoodSurvey.menu'), '/livelihood-survey'],
          [i18n('entities.livelihoodSurvey.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.livelihoodSurvey.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default LivelihoodSurveyImportPage;
