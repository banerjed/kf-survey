import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/chronicDiseaseEnum/importer/chronicDiseaseEnumImporterActions';
import fields from 'src/modules/chronicDiseaseEnum/importer/chronicDiseaseEnumImporterFields';
import selectors from 'src/modules/chronicDiseaseEnum/importer/chronicDiseaseEnumImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ChronicDiseaseEnumImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.chronicDiseaseEnum.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.chronicDiseaseEnum.menu'), '/chronic-disease-enum'],
          [i18n('entities.chronicDiseaseEnum.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.chronicDiseaseEnum.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default ChronicDiseaseEnumImportPage;
