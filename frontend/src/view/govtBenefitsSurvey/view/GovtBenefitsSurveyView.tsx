import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import PersonViewItem from 'src/view/person/view/PersonViewItem';

function GovtBenefitsSurveyView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <PersonViewItem
          label={i18n('entities.govtBenefitsSurvey.fields.person')}
          value={record.person}
        />

        <TextViewItem
          label={i18n('entities.govtBenefitsSurvey.fields.surveyDate')}
          value={record.surveyDate}
        />

        <TextViewItem
          label={i18n('entities.govtBenefitsSurvey.fields.hasKanyashri')}
          value={
            record.hasKanyashri
              ? i18n('common.yes')
              : i18n('common.no')
          }
        />

        <TextViewItem
          label={i18n('entities.govtBenefitsSurvey.fields.hasPmAwasYojana')}
          value={
            record.hasPmAwasYojana
              ? i18n('common.yes')
              : i18n('common.no')
          }
        />

        <TextViewItem
          label={i18n('entities.govtBenefitsSurvey.fields.hasChiefMinisterRelief')}
          value={
            record.hasChiefMinisterRelief
              ? i18n('common.yes')
              : i18n('common.no')
          }
        />

        <TextViewItem
          label={i18n('entities.govtBenefitsSurvey.fields.hasSwasthyaSathi')}
          value={
            record.hasSwasthyaSathi
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

export default GovtBenefitsSurveyView;
