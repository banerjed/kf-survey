import React from 'react';
import { i18n } from 'src/i18n';
import GovtBenefitsSurveyListFilter from 'src/view/govtBenefitsSurvey/list/GovtBenefitsSurveyListFilter';
import GovtBenefitsSurveyListTable from 'src/view/govtBenefitsSurvey/list/GovtBenefitsSurveyListTable';
import GovtBenefitsSurveyListToolbar from 'src/view/govtBenefitsSurvey/list/GovtBenefitsSurveyListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function GovtBenefitsSurveyListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.govtBenefitsSurvey.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.govtBenefitsSurvey.list.title')}
        </PageTitle>

        <GovtBenefitsSurveyListToolbar />
        <GovtBenefitsSurveyListFilter />
        <GovtBenefitsSurveyListTable />
      </ContentWrapper>
    </>
  );
}

export default GovtBenefitsSurveyListPage;
