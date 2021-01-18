import React from 'react';
import { i18n } from 'src/i18n';
import LivelihoodSurveyListFilter from 'src/view/livelihoodSurvey/list/LivelihoodSurveyListFilter';
import LivelihoodSurveyListTable from 'src/view/livelihoodSurvey/list/LivelihoodSurveyListTable';
import LivelihoodSurveyListToolbar from 'src/view/livelihoodSurvey/list/LivelihoodSurveyListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function LivelihoodSurveyListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.livelihoodSurvey.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.livelihoodSurvey.list.title')}
        </PageTitle>

        <LivelihoodSurveyListToolbar />
        <LivelihoodSurveyListFilter />
        <LivelihoodSurveyListTable />
      </ContentWrapper>
    </>
  );
}

export default LivelihoodSurveyListPage;
