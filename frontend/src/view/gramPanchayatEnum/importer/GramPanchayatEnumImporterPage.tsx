import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/gramPanchayatEnum/importer/gramPanchayatEnumImporterActions';
import fields from 'src/modules/gramPanchayatEnum/importer/gramPanchayatEnumImporterFields';
import selectors from 'src/modules/gramPanchayatEnum/importer/gramPanchayatEnumImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function GramPanchayatEnumImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.gramPanchayatEnum.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.gramPanchayatEnum.menu'), '/gram-panchayat-enum'],
          [i18n('entities.gramPanchayatEnum.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.gramPanchayatEnum.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default GramPanchayatEnumImportPage;
