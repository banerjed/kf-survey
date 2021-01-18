import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/healthSurvey/view/healthSurveyViewActions';
import selectors from 'src/modules/healthSurvey/view/healthSurveyViewSelectors';
import HealthSurveyView from 'src/view/healthSurvey/view/HealthSurveyView';
import HealthSurveyViewToolbar from 'src/view/healthSurvey/view/HealthSurveyViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function HealthSurveyPage() {
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
          [i18n('entities.healthSurvey.menu'), '/health-survey'],
          [i18n('entities.healthSurvey.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.healthSurvey.view.title')}
        </PageTitle>

        <HealthSurveyViewToolbar match={match} />

        <HealthSurveyView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default HealthSurveyPage;
