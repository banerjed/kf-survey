import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/villageEnum/view/villageEnumViewActions';
import selectors from 'src/modules/villageEnum/view/villageEnumViewSelectors';
import VillageEnumView from 'src/view/villageEnum/view/VillageEnumView';
import VillageEnumViewToolbar from 'src/view/villageEnum/view/VillageEnumViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function VillageEnumPage() {
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
          [i18n('entities.villageEnum.menu'), '/village-enum'],
          [i18n('entities.villageEnum.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.villageEnum.view.title')}
        </PageTitle>

        <VillageEnumViewToolbar match={match} />

        <VillageEnumView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default VillageEnumPage;
