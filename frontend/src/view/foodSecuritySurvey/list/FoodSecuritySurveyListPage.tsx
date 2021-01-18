import React from 'react';
import { i18n } from 'src/i18n';
import FoodSecuritySurveyListFilter from 'src/view/foodSecuritySurvey/list/FoodSecuritySurveyListFilter';
import FoodSecuritySurveyListTable from 'src/view/foodSecuritySurvey/list/FoodSecuritySurveyListTable';
import FoodSecuritySurveyListToolbar from 'src/view/foodSecuritySurvey/list/FoodSecuritySurveyListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function FoodSecuritySurveyListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.foodSecuritySurvey.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.foodSecuritySurvey.list.title')}
        </PageTitle>

        <FoodSecuritySurveyListToolbar />
        <FoodSecuritySurveyListFilter />
        <FoodSecuritySurveyListTable />
      </ContentWrapper>
    </>
  );
}

export default FoodSecuritySurveyListPage;
