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
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import HouseholdAutocompleteFormItem from 'src/view/household/autocomplete/HouseholdAutocompleteFormItem';

const schema = yup.object().shape({
  household: yupFormSchemas.relationToOne(
    i18n('entities.livelihoodSurvey.fields.household'),
    {
      "required": true
    },
  ),
  surveyDate: yupFormSchemas.date(
    i18n('entities.livelihoodSurvey.fields.surveyDate'),
    {
      "required": true
    },
  ),
  annualHouseholdIncome: yupFormSchemas.integer(
    i18n('entities.livelihoodSurvey.fields.annualHouseholdIncome'),
    {},
  ),
  sizeOfFarm: yupFormSchemas.decimal(
    i18n('entities.livelihoodSurvey.fields.sizeOfFarm'),
    {},
  ),
  sizeOfPond: yupFormSchemas.decimal(
    i18n('entities.livelihoodSurvey.fields.sizeOfPond'),
    {},
  ),
  whatIsFarmed: yupFormSchemas.string(
    i18n('entities.livelihoodSurvey.fields.whatIsFarmed'),
    {},
  ),
  doesFishing: yupFormSchemas.boolean(
    i18n('entities.livelihoodSurvey.fields.doesFishing'),
    {},
  ),
});

function LivelihoodSurveyForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      household: record.household,
      surveyDate: record.surveyDate ? moment(record.surveyDate, 'YYYY-MM-DD') : null,
      annualHouseholdIncome: record.annualHouseholdIncome,
      sizeOfFarm: record.sizeOfFarm,
      sizeOfPond: record.sizeOfPond,
      whatIsFarmed: record.whatIsFarmed,
      doesFishing: record.doesFishing,
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
                label={i18n('entities.livelihoodSurvey.fields.household')}
                required={true}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <DatePickerFormItem
                name="surveyDate"
                label={i18n('entities.livelihoodSurvey.fields.surveyDate')}
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputNumberFormItem
                name="annualHouseholdIncome"
                label={i18n('entities.livelihoodSurvey.fields.annualHouseholdIncome')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="sizeOfFarm"
                label={i18n('entities.livelihoodSurvey.fields.sizeOfFarm')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="sizeOfPond"
                label={i18n('entities.livelihoodSurvey.fields.sizeOfPond')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="whatIsFarmed"
                label={i18n('entities.livelihoodSurvey.fields.whatIsFarmed')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SwitchFormItem
                name="doesFishing"
                label={i18n('entities.livelihoodSurvey.fields.doesFishing')}
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

export default LivelihoodSurveyForm;
