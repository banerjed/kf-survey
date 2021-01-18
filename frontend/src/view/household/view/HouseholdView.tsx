import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import PersonViewItem from 'src/view/person/view/PersonViewItem';
import VillageEnumViewItem from 'src/view/villageEnum/view/VillageEnumViewItem';
import GramPanchayatEnumViewItem from 'src/view/gramPanchayatEnum/view/GramPanchayatEnumViewItem';
import MunicipalityEnumViewItem from 'src/view/municipalityEnum/view/MunicipalityEnumViewItem';
import DistrictEnumViewItem from 'src/view/districtEnum/view/DistrictEnumViewItem';

function HouseholdView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <TextViewItem
          label={i18n('entities.household.fields.householdName')}
          value={record.householdName}
        />

        <TextViewItem
          label={i18n('entities.household.fields.address')}
          value={record.address}
        />

        <PersonViewItem
          label={i18n('entities.household.fields.members')}
          value={record.members}
        />

        <VillageEnumViewItem
          label={i18n('entities.household.fields.village')}
          value={record.village}
        />

        <GramPanchayatEnumViewItem
          label={i18n('entities.household.fields.gramPanchayat')}
          value={record.gramPanchayat}
        />

        <MunicipalityEnumViewItem
          label={i18n('entities.household.fields.municipality')}
          value={record.municipality}
        />

        <DistrictEnumViewItem
          label={i18n('entities.household.fields.district')}
          value={record.district}
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

export default HouseholdView;
