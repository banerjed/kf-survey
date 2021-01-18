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
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import foodSecuritySurveyEnumerators from 'src/modules/foodSecuritySurvey/foodSecuritySurveyEnumerators';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import HouseholdAutocompleteFormItem from 'src/view/household/autocomplete/HouseholdAutocompleteFormItem';

const schema = yup.object().shape({
  household: yupFormSchemas.relationToOne(
    i18n('entities.foodSecuritySurvey.fields.household'),
    {
      "required": true
    },
  ),
  surveyDate: yupFormSchemas.date(
    i18n('entities.foodSecuritySurvey.fields.surveyDate'),
    {},
  ),
  enoughToEat: yupFormSchemas.enumerator(
    i18n('entities.foodSecuritySurvey.fields.enoughToEat'),
    {
      "options": foodSecuritySurveyEnumerators.enoughToEat
    },
  ),
  proteinSource: yupFormSchemas.enumerator(
    i18n('entities.foodSecuritySurvey.fields.proteinSource'),
    {
      "options": foodSecuritySurveyEnumerators.proteinSource
    },
  ),
});

function FoodSecuritySurveyForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      household: record.household,
      surveyDate: record.surveyDate ? moment(record.surveyDate, 'YYYY-MM-DD') : null,
      enoughToEat: record.enoughToEat,
      proteinSource: record.proteinSource,
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
                label={i18n('entities.foodSecuritySurvey.fields.household')}
                required={true}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <DatePickerFormItem
                name="surveyDate"
                label={i18n('entities.foodSecuritySurvey.fields.surveyDate')}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="enoughToEat"
                label={i18n('entities.foodSecuritySurvey.fields.enoughToEat')}
                options={foodSecuritySurveyEnumerators.enoughToEat.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.foodSecuritySurvey.enumerators.enoughToEat.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="proteinSource"
                label={i18n('entities.foodSecuritySurvey.fields.proteinSource')}
                options={foodSecuritySurveyEnumerators.proteinSource.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.foodSecuritySurvey.enumerators.proteinSource.${value}`,
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

export default FoodSecuritySurveyForm;
