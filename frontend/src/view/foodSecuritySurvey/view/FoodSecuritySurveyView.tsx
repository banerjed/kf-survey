import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import HouseholdViewItem from 'src/view/household/view/HouseholdViewItem';

function FoodSecuritySurveyView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <HouseholdViewItem
          label={i18n('entities.foodSecuritySurvey.fields.household')}
          value={record.household}
        />

        <TextViewItem
          label={i18n('entities.foodSecuritySurvey.fields.surveyDate')}
          value={record.surveyDate}
        />

        <TextViewItem
          label={i18n('entities.foodSecuritySurvey.fields.enoughToEat')}
          value={
            record.enoughToEat &&
            i18n(
              `entities.foodSecuritySurvey.enumerators.enoughToEat.${record.enoughToEat}`,
            )
          }
        />

        <TextViewItem
          label={i18n('entities.foodSecuritySurvey.fields.proteinSource')}
          value={
            record.proteinSource &&
            i18n(
              `entities.foodSecuritySurvey.enumerators.proteinSource.${record.proteinSource}`,
            )
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

export default FoodSecuritySurveyView;
