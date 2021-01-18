import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/govtBenefitsSurvey/importer/govtBenefitsSurveyImporterActions';
import fields from 'src/modules/govtBenefitsSurvey/importer/govtBenefitsSurveyImporterFields';
import selectors from 'src/modules/govtBenefitsSurvey/importer/govtBenefitsSurveyImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function GovtBenefitsSurveyImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.govtBenefitsSurvey.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.govtBenefitsSurvey.menu'), '/govt-benefits-survey'],
          [i18n('entities.govtBenefitsSurvey.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.govtBenefitsSurvey.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default GovtBenefitsSurveyImportPage;
