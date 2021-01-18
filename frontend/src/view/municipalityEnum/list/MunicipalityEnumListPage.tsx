import React from 'react';
import { i18n } from 'src/i18n';
import MunicipalityEnumListFilter from 'src/view/municipalityEnum/list/MunicipalityEnumListFilter';
import MunicipalityEnumListTable from 'src/view/municipalityEnum/list/MunicipalityEnumListTable';
import MunicipalityEnumListToolbar from 'src/view/municipalityEnum/list/MunicipalityEnumListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function MunicipalityEnumListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.municipalityEnum.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.municipalityEnum.list.title')}
        </PageTitle>

        <MunicipalityEnumListToolbar />
        <MunicipalityEnumListFilter />
        <MunicipalityEnumListTable />
      </ContentWrapper>
    </>
  );
}

export default MunicipalityEnumListPage;
