import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/homeSurvey/view/homeSurveyViewActions';
import selectors from 'src/modules/homeSurvey/view/homeSurveyViewSelectors';
import HomeSurveyView from 'src/view/homeSurvey/view/HomeSurveyView';
import HomeSurveyViewToolbar from 'src/view/homeSurvey/view/HomeSurveyViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function HomeSurveyPage() {
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
          [i18n('entities.homeSurvey.menu'), '/home-survey'],
          [i18n('entities.homeSurvey.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.homeSurvey.view.title')}
        </PageTitle>

        <HomeSurveyViewToolbar match={match} />

        <HomeSurveyView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default HomeSurveyPage;
