import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/districtEnum/view/districtEnumViewActions';
import selectors from 'src/modules/districtEnum/view/districtEnumViewSelectors';
import DistrictEnumView from 'src/view/districtEnum/view/DistrictEnumView';
import DistrictEnumViewToolbar from 'src/view/districtEnum/view/DistrictEnumViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function DistrictEnumPage() {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  useEffect(() => {
    dispatch(actions.doFind(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.districtEnum.menu'), '/district-enum'],
          [i18n('entities.districtEnum.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.districtEnum.view.title')}
        </PageTitle>

        <DistrictEnumViewToolbar match={match} />

        <DistrictEnumView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default DistrictEnumPage;
