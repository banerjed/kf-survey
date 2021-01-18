import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/livelihoodSurvey/view/livelihoodSurveyViewActions';
import selectors from 'src/modules/livelihoodSurvey/view/livelihoodSurveyViewSelectors';
import LivelihoodSurveyView from 'src/view/livelihoodSurvey/view/LivelihoodSurveyView';
import LivelihoodSurveyViewToolbar from 'src/view/livelihoodSurvey/view/LivelihoodSurveyViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function LivelihoodSurveyPage() {
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
          [i18n('entities.livelihoodSurvey.menu'), '/livelihood-survey'],
          [i18n('entities.livelihoodSurvey.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.livelihoodSurvey.view.title')}
        </PageTitle>

        <LivelihoodSurveyViewToolbar match={match} />

        <LivelihoodSurveyView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default LivelihoodSurveyPage;
