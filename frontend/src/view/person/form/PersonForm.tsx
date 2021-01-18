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
import InputNumberFormItem from 'src/view/shared/form/items/InputNumberFormItem';
import SwitchFormItem from 'src/view/shared/form/items/SwitchFormItem';
import RadioFormItem from 'src/view/shared/form/items/RadioFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import personEnumerators from 'src/modules/person/personEnumerators';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import Storage from 'src/security/storage';
import ImagesFormItem from 'src/view/shared/form/items/ImagesFormItem';
import HouseholdAutocompleteFormItem from 'src/view/household/autocomplete/HouseholdAutocompleteFormItem';

const schema = yup.object().shape({
  firstName: yupFormSchemas.string(
    i18n('entities.person.fields.firstName'),
    {
      "required": true,
      "min": 2,
      "max": 100
    },
  ),
  middleName: yupFormSchemas.string(
    i18n('entities.person.fields.middleName'),
    {},
  ),
  lastName: yupFormSchemas.string(
    i18n('entities.person.fields.lastName'),
    {
      "required": true,
      "min": 3,
      "max": 100
    },
  ),
  fullName: yupFormSchemas.string(
    i18n('entities.person.fields.fullName'),
    {
      "required": true,
      "max": 255
    },
  ),
  gender: yupFormSchemas.enumerator(
    i18n('entities.person.fields.gender'),
    {
      "required": true,
      "options": personEnumerators.gender
    },
  ),
  age: yupFormSchemas.integer(
    i18n('entities.person.fields.age'),
    {
      "required": true
    },
  ),
  dateOfBirth: yupFormSchemas.date(
    i18n('entities.person.fields.dateOfBirth'),
    {},
  ),
  roleInHousehold: yupFormSchemas.enumerator(
    i18n('entities.person.fields.roleInHousehold'),
    {
      "options": personEnumerators.roleInHousehold
    },
  ),
  livesAwayFromHome: yupFormSchemas.boolean(
    i18n('entities.person.fields.livesAwayFromHome'),
    {},
  ),
  isHeadOfHousehold: yupFormSchemas.boolean(
    i18n('entities.person.fields.isHeadOfHousehold'),
    {},
  ),
  aadharNumber: yupFormSchemas.string(
    i18n('entities.person.fields.aadharNumber'),
    {},
  ),
  mobileNumber: yupFormSchemas.string(
    i18n('entities.person.fields.mobileNumber'),
    {},
  ),
  educationLevel: yupFormSchemas.enumerator(
    i18n('entities.person.fields.educationLevel'),
    {
      "options": personEnumerators.educationLevel
    },
  ),
  primaryJob: yupFormSchemas.enumerator(
    i18n('entities.person.fields.primaryJob'),
    {
      "options": personEnumerators.primaryJob
    },
  ),
  alternateLivelihood: yupFormSchemas.enumerator(
    i18n('entities.person.fields.alternateLivelihood'),
    {
      "options": personEnumerators.alternateLivelihood
    },
  ),
  household: yupFormSchemas.relationToOne(
    i18n('entities.person.fields.household'),
    {},
  ),
  picture: yupFormSchemas.images(
    i18n('entities.person.fields.picture'),
    {},
  ),
});

function PersonForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      firstName: record.firstName,
      middleName: record.middleName,
      lastName: record.lastName,
      fullName: record.fullName,
      gender: record.gender,
      age: record.age,
      dateOfBirth: record.dateOfBirth ? moment(record.dateOfBirth, 'YYYY-MM-DD') : null,
      roleInHousehold: record.roleInHousehold,
      livesAwayFromHome: record.livesAwayFromHome,
      isHeadOfHousehold: record.isHeadOfHousehold,
      aadharNumber: record.aadharNumber,
      mobileNumber: record.mobileNumber,
      educationLevel: record.educationLevel,
      primaryJob: record.primaryJob,
      alternateLivelihood: record.alternateLivelihood,
      household: record.household,
      picture: record.picture || [],
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
                name="firstName"
                label={i18n('entities.person.fields.firstName')}  
                required={true}
              autoFocus
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="middleName"
                label={i18n('entities.person.fields.middleName')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="lastName"
                label={i18n('entities.person.fields.lastName')}  
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="fullName"
                label={i18n('entities.person.fields.fullName')}  
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <RadioFormItem
                name="gender"
                label={i18n('entities.person.fields.gender')}
                options={personEnumerators.gender.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.person.enumerators.gender.${value}`,
                    ),
                  }),
                )}
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputNumberFormItem
                name="age"
                label={i18n('entities.person.fields.age')}  
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <DatePickerFormItem
                name="dateOfBirth"
                label={i18n('entities.person.fields.dateOfBirth')}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="roleInHousehold"
                label={i18n('entities.person.fields.roleInHousehold')}
                options={personEnumerators.roleInHousehold.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.person.enumerators.roleInHousehold.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SwitchFormItem
                name="livesAwayFromHome"
                label={i18n('entities.person.fields.livesAwayFromHome')}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SwitchFormItem
                name="isHeadOfHousehold"
                label={i18n('entities.person.fields.isHeadOfHousehold')}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="aadharNumber"
                label={i18n('entities.person.fields.aadharNumber')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="mobileNumber"
                label={i18n('entities.person.fields.mobileNumber')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="educationLevel"
                label={i18n('entities.person.fields.educationLevel')}
                options={personEnumerators.educationLevel.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.person.enumerators.educationLevel.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="primaryJob"
                label={i18n('entities.person.fields.primaryJob')}
                options={personEnumerators.primaryJob.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.person.enumerators.primaryJob.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="alternateLivelihood"
                label={i18n('entities.person.fields.alternateLivelihood')}
                options={personEnumerators.alternateLivelihood.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.person.enumerators.alternateLivelihood.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <HouseholdAutocompleteFormItem  
                name="household"
                label={i18n('entities.person.fields.household')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <ImagesFormItem
                name="picture"
                label={i18n('entities.person.fields.picture')}
                required={false}
                storage={Storage.values.personPicture}
                max={undefined}
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

export default PersonForm;
