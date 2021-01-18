import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/gramPanchayatEnum/view/gramPanchayatEnumViewActions';
import selectors from 'src/modules/gramPanchayatEnum/view/gramPanchayatEnumViewSelectors';
import GramPanchayatEnumView from 'src/view/gramPanchayatEnum/view/GramPanchayatEnumView';
import GramPanchayatEnumViewToolbar from 'src/view/gramPanchayatEnum/view/GramPanchayatEnumViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function GramPanchayatEnumPage() {
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
          [i18n('entities.gramPanchayatEnum.menu'), '/gram-panchayat-enum'],
          [i18n('entities.gramPanchayatEnum.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.gramPanchayatEnum.view.title')}
        </PageTitle>

        <GramPanchayatEnumViewToolbar match={match} />

        <GramPanchayatEnumView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default GramPanchayatEnumPage;
