import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ImagesViewItem from 'src/view/shared/view/ImagesViewItem';
import PersonViewItem from 'src/view/person/view/PersonViewItem';
import ChronicDiseaseEnumViewItem from 'src/view/chronicDiseaseEnum/view/ChronicDiseaseEnumViewItem';

function HealthSurveyView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <PersonViewItem
          label={i18n('entities.healthSurvey.fields.person')}
          value={record.person}
        />

        <TextViewItem
          label={i18n('entities.healthSurvey.fields.surveyDate')}
          value={record.surveyDate}
        />

        <TextViewItem
          label={i18n('entities.healthSurvey.fields.healthCondition')}
          value={
            record.healthCondition &&
            i18n(
              `entities.healthSurvey.enumerators.healthCondition.${record.healthCondition}`,
            )
          }
        />

        <TextViewItem
          label={i18n('entities.healthSurvey.fields.weight')}
          value={record.weight}
        />

        <TextViewItem
          label={i18n('entities.healthSurvey.fields.height')}
          value={record.height}
        />

        <TextViewItem
          label={i18n('entities.healthSurvey.fields.heartRate')}
          value={record.heartRate}
        />

        <TextViewItem
          label={i18n('entities.healthSurvey.fields.pulseRate')}
          value={record.pulseRate}
        />

        <TextViewItem
          label={i18n('entities.healthSurvey.fields.bloodOxygenLevel')}
          value={record.bloodOxygenLevel}
        />

        <ImagesViewItem
          label={i18n('entities.healthSurvey.fields.picture')}
          value={record.picture}
        />

        <TextViewItem
          label={i18n('entities.healthSurvey.fields.smoking')}
          value={
            record.smoking &&
            i18n(
              `entities.healthSurvey.enumerators.smoking.${record.smoking}`,
            )
          }
        />

        <TextViewItem
          label={i18n('entities.healthSurvey.fields.smokingFrequency')}
          value={record.smokingFrequency}
        />

        <TextViewItem
          label={i18n('entities.healthSurvey.fields.drinking')}
          value={
            record.drinking &&
            i18n(
              `entities.healthSurvey.enumerators.drinking.${record.drinking}`,
            )
          }
        />

        <TextViewItem
          label={i18n('entities.healthSurvey.fields.substanceAbuse')}
          value={
            record.substanceAbuse &&
            i18n(
              `entities.healthSurvey.enumerators.substanceAbuse.${record.substanceAbuse}`,
            )
          }
        />

        <ChronicDiseaseEnumViewItem
          label={i18n('entities.healthSurvey.fields.chronicDisease1')}
          value={record.chronicDisease1}
        />

        <ChronicDiseaseEnumViewItem
          label={i18n('entities.healthSurvey.fields.chronicDisease2')}
          value={record.chronicDisease2}
        />

        <ChronicDiseaseEnumViewItem
          label={i18n('entities.healthSurvey.fields.chronicDisease3')}
          value={record.chronicDisease3}
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

export default HealthSurveyView;
