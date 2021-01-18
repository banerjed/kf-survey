import React from 'react';
import { i18n } from 'src/i18n';
import VillageEnumListFilter from 'src/view/villageEnum/list/VillageEnumListFilter';
import VillageEnumListTable from 'src/view/villageEnum/list/VillageEnumListTable';
import VillageEnumListToolbar from 'src/view/villageEnum/list/VillageEnumListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function VillageEnumListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.villageEnum.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.villageEnum.list.title')}
        </PageTitle>

        <VillageEnumListToolbar />
        <VillageEnumListFilter />
        <VillageEnumListTable />
      </ContentWrapper>
    </>
  );
}

export default VillageEnumListPage;
