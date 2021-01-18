import React from 'react';
import { i18n } from 'src/i18n';
import HomeSurveyListFilter from 'src/view/homeSurvey/list/HomeSurveyListFilter';
import HomeSurveyListTable from 'src/view/homeSurvey/list/HomeSurveyListTable';
import HomeSurveyListToolbar from 'src/view/homeSurvey/list/HomeSurveyListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function HomeSurveyListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.homeSurvey.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.homeSurvey.list.title')}
        </PageTitle>

        <HomeSurveyListToolbar />
        <HomeSurveyListFilter />
        <HomeSurveyListTable />
      </ContentWrapper>
    </>
  );
}

export default HomeSurveyListPage;
