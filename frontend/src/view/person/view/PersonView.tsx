import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ImagesViewItem from 'src/view/shared/view/ImagesViewItem';
import HouseholdViewItem from 'src/view/household/view/HouseholdViewItem';

function PersonView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <TextViewItem
          label={i18n('entities.person.fields.firstName')}
          value={record.firstName}
        />

        <TextViewItem
          label={i18n('entities.person.fields.middleName')}
          value={record.middleName}
        />

        <TextViewItem
          label={i18n('entities.person.fields.lastName')}
          value={record.lastName}
        />

        <TextViewItem
          label={i18n('entities.person.fields.fullName')}
          value={record.fullName}
        />

        <TextViewItem
          label={i18n('entities.person.fields.gender')}
          value={
            record.gender &&
            i18n(
              `entities.person.enumerators.gender.${record.gender}`,
            )
          }
        />

        <TextViewItem
          label={i18n('entities.person.fields.age')}
          value={record.age}
        />

        <TextViewItem
          label={i18n('entities.person.fields.dateOfBirth')}
          value={record.dateOfBirth}
        />

        <TextViewItem
          label={i18n('entities.person.fields.roleInHousehold')}
          value={
            record.roleInHousehold &&
            i18n(
              `entities.person.enumerators.roleInHousehold.${record.roleInHousehold}`,
            )
          }
        />

        <TextViewItem
          label={i18n('entities.person.fields.livesAwayFromHome')}
          value={
            record.livesAwayFromHome
              ? i18n('common.yes')
              : i18n('common.no')
          }
        />

        <TextViewItem
          label={i18n('entities.person.fields.isHeadOfHousehold')}
          value={
            record.isHeadOfHousehold
              ? i18n('common.yes')
              : i18n('common.no')
          }
        />

        <TextViewItem
          label={i18n('entities.person.fields.aadharNumber')}
          value={record.aadharNumber}
        />

        <TextViewItem
          label={i18n('entities.person.fields.mobileNumber')}
          value={record.mobileNumber}
        />

        <TextViewItem
          label={i18n('entities.person.fields.educationLevel')}
          value={
            record.educationLevel &&
            i18n(
              `entities.person.enumerators.educationLevel.${record.educationLevel}`,
            )
          }
        />

        <TextViewItem
          label={i18n('entities.person.fields.primaryJob')}
          value={
            record.primaryJob &&
            i18n(
              `entities.person.enumerators.primaryJob.${record.primaryJob}`,
            )
          }
        />

        <TextViewItem
          label={i18n('entities.person.fields.alternateLivelihood')}
          value={
            record.alternateLivelihood &&
            i18n(
              `entities.person.enumerators.alternateLivelihood.${record.alternateLivelihood}`,
            )
          }
        />

        <HouseholdViewItem
          label={i18n('entities.person.fields.household')}
          value={record.household}
        />

        <ImagesViewItem
          label={i18n('entities.person.fields.picture')}
          value={record.picture}
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

export default PersonView;
