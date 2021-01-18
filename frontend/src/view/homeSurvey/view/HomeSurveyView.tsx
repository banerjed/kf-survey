import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import HouseholdViewItem from 'src/view/household/view/HouseholdViewItem';

function HomeSurveyView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <HouseholdViewItem
          label={i18n('entities.homeSurvey.fields.household')}
          value={record.household}
        />

        <TextViewItem
          label={i18n('entities.homeSurvey.fields.surveyDate')}
          value={record.surveyDate}
        />

        <TextViewItem
          label={i18n('entities.homeSurvey.fields.homeType')}
          value={
            record.homeType &&
            i18n(
              `entities.homeSurvey.enumerators.homeType.${record.homeType}`,
            )
          }
        />

        <TextViewItem
          label={i18n('entities.homeSurvey.fields.roofType')}
          value={
            record.roofType &&
            i18n(
              `entities.homeSurvey.enumerators.roofType.${record.roofType}`,
            )
          }
        />

        <TextViewItem
          label={i18n('entities.homeSurvey.fields.houseArea')}
          value={record.houseArea}
        />

        <TextViewItem
          label={i18n('entities.homeSurvey.fields.numberOfRooms')}
          value={record.numberOfRooms}
        />

        <TextViewItem
          label={i18n('entities.homeSurvey.fields.hasElectricity')}
          value={
            record.hasElectricity
              ? i18n('common.yes')
              : i18n('common.no')
          }
        />

        <TextViewItem
          label={i18n('entities.homeSurvey.fields.hasSanitation')}
          value={
            record.hasSanitation
              ? i18n('common.yes')
              : i18n('common.no')
          }
        />

        <TextViewItem
          label={i18n('entities.homeSurvey.fields.sourceOfDrinkingWater')}
          value={
            record.sourceOfDrinkingWater &&
            i18n(
              `entities.homeSurvey.enumerators.sourceOfDrinkingWater.${record.sourceOfDrinkingWater}`,
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

export default HomeSurveyView;
