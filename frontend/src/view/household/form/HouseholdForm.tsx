import { Button, Grid } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import SaveIcon from '@material-ui/icons/Save';
import UndoIcon from '@material-ui/icons/Undo';
import React, { useState } from 'react';
import { i18n } from 'src/i18n';
import FormWrapper, {
  FormButtons,
} from 'src/view/shared/styles/FormWrapper';
import { useForm, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import PersonAutocompleteFormItem from 'src/view/person/autocomplete/PersonAutocompleteFormItem';
import VillageEnumAutocompleteFormItem from 'src/view/villageEnum/autocomplete/VillageEnumAutocompleteFormItem';
import GramPanchayatEnumAutocompleteFormItem from 'src/view/gramPanchayatEnum/autocomplete/GramPanchayatEnumAutocompleteFormItem';
import MunicipalityEnumAutocompleteFormItem from 'src/view/municipalityEnum/autocomplete/MunicipalityEnumAutocompleteFormItem';
import DistrictEnumAutocompleteFormItem from 'src/view/districtEnum/autocomplete/DistrictEnumAutocompleteFormItem';

const schema = yup.object().shape({
  householdName: yupFormSchemas.string(
    i18n('entities.household.fields.householdName'),
    {
      "required": true,
      "max": 255
    },
  ),
  address: yupFormSchemas.string(
    i18n('entities.household.fields.address'),
    {},
  ),
  members: yupFormSchemas.relationToMany(
    i18n('entities.household.fields.members'),
    {},
  ),
  village: yupFormSchemas.relationToOne(
    i18n('entities.household.fields.village'),
    {},
  ),
  gramPanchayat: yupFormSchemas.relationToOne(
    i18n('entities.household.fields.gramPanchayat'),
    {},
  ),
  municipality: yupFormSchemas.relationToOne(
    i18n('entities.household.fields.municipality'),
    {},
  ),
  district: yupFormSchemas.relationToOne(
    i18n('entities.household.fields.district'),
    {},
  ),
});

function HouseholdForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      householdName: record.householdName,
      address: record.address,
      members: record.members || [],
      village: record.village,
      gramPanchayat: record.gramPanchayat,
      municipality: record.municipality,
      district: record.district,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues as any,
  });

  const onSubmit = (values) => {
    props.onSubmit(props.record?.id, values);
  };

  const onReset = () => {
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });
  };

  const { saveLoading, modal } = props;

  return (
    <FormWrapper>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Grid spacing={2} container>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="householdName"
                label={i18n('entities.household.fields.householdName')}  
                required={true}
              autoFocus
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="address"
                label={i18n('entities.household.fields.address')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <PersonAutocompleteFormItem  
                name="members"
                label={i18n('entities.household.fields.members')}
                required={false}
                showCreate={!props.modal}
                mode="multiple"
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <VillageEnumAutocompleteFormItem  
                name="village"
                label={i18n('entities.household.fields.village')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <GramPanchayatEnumAutocompleteFormItem  
                name="gramPanchayat"
                label={i18n('entities.household.fields.gramPanchayat')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <MunicipalityEnumAutocompleteFormItem  
                name="municipality"
                label={i18n('entities.household.fields.municipality')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <DistrictEnumAutocompleteFormItem  
                name="district"
                label={i18n('entities.household.fields.district')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
          </Grid>
          <FormButtons
            style={{
              flexDirection: modal
                ? 'row-reverse'
                : undefined,
            }}
          >
            <Button
              variant="contained"
              color="primary"
              disabled={saveLoading}
              type="button"
              onClick={form.handleSubmit(onSubmit)}
              startIcon={<SaveIcon />}
              size="small"
            >
              {i18n('common.save')}
            </Button>

            <Button
              disabled={saveLoading}
              onClick={onReset}
              type="button"
              startIcon={<UndoIcon />}
              size="small"
            >
              {i18n('common.reset')}
            </Button>

            {props.onCancel ? (
              <Button
                disabled={saveLoading}
                onClick={() => props.onCancel()}
                type="button"
                startIcon={<CloseIcon />}
                size="small"
              >
                {i18n('common.cancel')}
              </Button>
            ) : null}
          </FormButtons>
        </form>
      </FormProvider>
    </FormWrapper>
  );
}

export default HouseholdForm;
