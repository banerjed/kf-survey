import React from 'react';
import { i18n } from 'src/i18n';
import DistrictEnumListFilter from 'src/view/districtEnum/list/DistrictEnumListFilter';
import DistrictEnumListTable from 'src/view/districtEnum/list/DistrictEnumListTable';
import DistrictEnumListToolbar from 'src/view/districtEnum/list/DistrictEnumListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function DistrictEnumListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.districtEnum.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.districtEnum.list.title')}
        </PageTitle>

        <DistrictEnumListToolbar />
        <DistrictEnumListFilter />
        <DistrictEnumListTable />
      </ContentWrapper>
    </>
  );
}

export default DistrictEnumListPage;
