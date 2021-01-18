import React from 'react';
import { i18n } from 'src/i18n';
import GramPanchayatEnumListFilter from 'src/view/gramPanchayatEnum/list/GramPanchayatEnumListFilter';
import GramPanchayatEnumListTable from 'src/view/gramPanchayatEnum/list/GramPanchayatEnumListTable';
import GramPanchayatEnumListToolbar from 'src/view/gramPanchayatEnum/list/GramPanchayatEnumListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function GramPanchayatEnumListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.gramPanchayatEnum.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.gramPanchayatEnum.list.title')}
        </PageTitle>

        <GramPanchayatEnumListToolbar />
        <GramPanchayatEnumListFilter />
        <GramPanchayatEnumListTable />
      </ContentWrapper>
    </>
  );
}

export default GramPanchayatEnumListPage;
