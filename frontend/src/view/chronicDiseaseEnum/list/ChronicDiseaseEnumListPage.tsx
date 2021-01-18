import React from 'react';
import { i18n } from 'src/i18n';
import ChronicDiseaseEnumListFilter from 'src/view/chronicDiseaseEnum/list/ChronicDiseaseEnumListFilter';
import ChronicDiseaseEnumListTable from 'src/view/chronicDiseaseEnum/list/ChronicDiseaseEnumListTable';
import ChronicDiseaseEnumListToolbar from 'src/view/chronicDiseaseEnum/list/ChronicDiseaseEnumListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ChronicDiseaseEnumListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.chronicDiseaseEnum.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.chronicDiseaseEnum.list.title')}
        </PageTitle>

        <ChronicDiseaseEnumListToolbar />
        <ChronicDiseaseEnumListFilter />
        <ChronicDiseaseEnumListTable />
      </ContentWrapper>
    </>
  );
}

export default ChronicDiseaseEnumListPage;
