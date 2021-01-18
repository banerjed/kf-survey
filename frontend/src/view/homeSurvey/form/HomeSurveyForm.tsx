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
import InputNumberFormItem from 'src/view/shared/form/items/InputNumberFormItem';
import SwitchFormItem from 'src/view/shared/form/items/SwitchFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import homeSurveyEnumerators from 'src/modules/homeSurvey/homeSurveyEnumerators';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import HouseholdAutocompleteFormItem from 'src/view/household/autocomplete/HouseholdAutocompleteFormItem';

const schema = yup.object().shape({
  household: yupFormSchemas.relationToOne(
    i18n('entities.homeSurvey.fields.household'),
    {
      "required": true
    },
  ),
  surveyDate: yupFormSchemas.date(
    i18n('entities.homeSurvey.fields.surveyDate'),
    {
      "required": true
    },
  ),
  homeType: yupFormSchemas.enumerator(
    i18n('entities.homeSurvey.fields.homeType'),
    {
      "options": homeSurveyEnumerators.homeType
    },
  ),
  roofType: yupFormSchemas.enumerator(
    i18n('entities.homeSurvey.fields.roofType'),
    {
      "options": homeSurveyEnumerators.roofType
    },
  ),
  houseArea: yupFormSchemas.integer(
    i18n('entities.homeSurvey.fields.houseArea'),
    {},
  ),
  numberOfRooms: yupFormSchemas.integer(
    i18n('entities.homeSurvey.fields.numberOfRooms'),
    {},
  ),
  hasElectricity: yupFormSchemas.boolean(
    i18n('entities.homeSurvey.fields.hasElectricity'),
    {},
  ),
  hasSanitation: yupFormSchemas.boolean(
    i18n('entities.homeSurvey.fields.hasSanitation'),
    {},
  ),
  sourceOfDrinkingWater: yupFormSchemas.enumerator(
    i18n('entities.homeSurvey.fields.sourceOfDrinkingWater'),
    {
      "options": homeSurveyEnumerators.sourceOfDrinkingWater
    },
  ),
});

function HomeSurveyForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      household: record.household,
      surveyDate: record.surveyDate ? moment(record.surveyDate, 'YYYY-MM-DD') : null,
      homeType: record.homeType,
      roofType: record.roofType,
      houseArea: record.houseArea,
      numberOfRooms: record.numberOfRooms,
      hasElectricity: record.hasElectricity,
      hasSanitation: record.hasSanitation,
      sourceOfDrinkingWater: record.sourceOfDrinkingWater,
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
              <HouseholdAutocompleteFormItem  
                name="household"
                label={i18n('entities.homeSurvey.fields.household')}
                required={true}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <DatePickerFormItem
                name="surveyDate"
                label={i18n('entities.homeSurvey.fields.surveyDate')}
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="homeType"
                label={i18n('entities.homeSurvey.fields.homeType')}
                options={homeSurveyEnumerators.homeType.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.homeSurvey.enumerators.homeType.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="roofType"
                label={i18n('entities.homeSurvey.fields.roofType')}
                options={homeSurveyEnumerators.roofType.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.homeSurvey.enumerators.roofType.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputNumberFormItem
                name="houseArea"
                label={i18n('entities.homeSurvey.fields.houseArea')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputNumberFormItem
                name="numberOfRooms"
                label={i18n('entities.homeSurvey.fields.numberOfRooms')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SwitchFormItem
                name="hasElectricity"
                label={i18n('entities.homeSurvey.fields.hasElectricity')}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SwitchFormItem
                name="hasSanitation"
                label={i18n('entities.homeSurvey.fields.hasSanitation')}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="sourceOfDrinkingWater"
                label={i18n('entities.homeSurvey.fields.sourceOfDrinkingWater')}
                options={homeSurveyEnumerators.sourceOfDrinkingWater.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.homeSurvey.enumerators.sourceOfDrinkingWater.${value}`,
                    ),
                  }),
                )}
                required={false}
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

export default HomeSurveyForm;
