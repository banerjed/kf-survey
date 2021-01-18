import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/chronicDiseaseEnum/view/chronicDiseaseEnumViewActions';
import selectors from 'src/modules/chronicDiseaseEnum/view/chronicDiseaseEnumViewSelectors';
import ChronicDiseaseEnumView from 'src/view/chronicDiseaseEnum/view/ChronicDiseaseEnumView';
import ChronicDiseaseEnumViewToolbar from 'src/view/chronicDiseaseEnum/view/ChronicDiseaseEnumViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ChronicDiseaseEnumPage() {
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
          [i18n('entities.chronicDiseaseEnum.menu'), '/chronic-disease-enum'],
          [i18n('entities.chronicDiseaseEnum.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.chronicDiseaseEnum.view.title')}
        </PageTitle>

        <ChronicDiseaseEnumViewToolbar match={match} />

        <ChronicDiseaseEnumView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default ChronicDiseaseEnumPage;
