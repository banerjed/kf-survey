import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/districtEnum/importer/districtEnumImporterActions';
import fields from 'src/modules/districtEnum/importer/districtEnumImporterFields';
import selectors from 'src/modules/districtEnum/importer/districtEnumImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function DistrictEnumImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.districtEnum.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.districtEnum.menu'), '/district-enum'],
          [i18n('entities.districtEnum.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.districtEnum.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default DistrictEnumImportPage;
