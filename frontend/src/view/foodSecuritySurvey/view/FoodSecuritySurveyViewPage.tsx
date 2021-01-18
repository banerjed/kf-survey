import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/foodSecuritySurvey/view/foodSecuritySurveyViewActions';
import selectors from 'src/modules/foodSecuritySurvey/view/foodSecuritySurveyViewSelectors';
import FoodSecuritySurveyView from 'src/view/foodSecuritySurvey/view/FoodSecuritySurveyView';
import FoodSecuritySurveyViewToolbar from 'src/view/foodSecuritySurvey/view/FoodSecuritySurveyViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function FoodSecuritySurveyPage() {
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
          [i18n('entities.foodSecuritySurvey.menu'), '/food-security-survey'],
          [i18n('entities.foodSecuritySurvey.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.foodSecuritySurvey.view.title')}
        </PageTitle>

        <FoodSecuritySurveyViewToolbar match={match} />

        <FoodSecuritySurveyView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default FoodSecuritySurveyPage;
