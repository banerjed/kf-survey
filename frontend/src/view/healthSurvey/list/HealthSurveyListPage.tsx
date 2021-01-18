import React from 'react';
import { i18n } from 'src/i18n';
import HealthSurveyListFilter from 'src/view/healthSurvey/list/HealthSurveyListFilter';
import HealthSurveyListTable from 'src/view/healthSurvey/list/HealthSurveyListTable';
import HealthSurveyListToolbar from 'src/view/healthSurvey/list/HealthSurveyListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function HealthSurveyListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.healthSurvey.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.healthSurvey.list.title')}
        </PageTitle>

        <HealthSurveyListToolbar />
        <HealthSurveyListFilter />
        <HealthSurveyListTable />
      </ContentWrapper>
    </>
  );
}

export default HealthSurveyListPage;
