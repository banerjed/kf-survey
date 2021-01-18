import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import HouseholdViewItem from 'src/view/household/view/HouseholdViewItem';

function LivelihoodSurveyView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <HouseholdViewItem
          label={i18n('entities.livelihoodSurvey.fields.household')}
          value={record.household}
        />

        <TextViewItem
          label={i18n('entities.livelihoodSurvey.fields.surveyDate')}
          value={record.surveyDate}
        />

        <TextViewItem
          label={i18n('entities.livelihoodSurvey.fields.annualHouseholdIncome')}
          value={record.annualHouseholdIncome}
        />

        <TextViewItem
          label={i18n('entities.livelihoodSurvey.fields.sizeOfFarm')}
          value={record.sizeOfFarm}
        />

        <TextViewItem
          label={i18n('entities.livelihoodSurvey.fields.sizeOfPond')}
          value={record.sizeOfPond}
        />

        <TextViewItem
          label={i18n('entities.livelihoodSurvey.fields.whatIsFarmed')}
          value={record.whatIsFarmed}
        />

        <TextViewItem
          label={i18n('entities.livelihoodSurvey.fields.doesFishing')}
          value={
            record.doesFishing
              ? i18n('common.yes')
              : i18n('common.no')
          }
        />        
      </div>
    );
  };

  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return renderView();
}

export default LivelihoodSurveyView;
