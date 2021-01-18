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
import SwitchFormItem from 'src/view/shared/form/items/SwitchFormItem';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import PersonAutocompleteFormItem from 'src/view/person/autocomplete/PersonAutocompleteFormItem';

const schema = yup.object().shape({
  person: yupFormSchemas.relationToOne(
    i18n('entities.govtBenefitsSurvey.fields.person'),
    {
      "required": true
    },
  ),
  surveyDate: yupFormSchemas.date(
    i18n('entities.govtBenefitsSurvey.fields.surveyDate'),
    {
      "required": true
    },
  ),
  hasKanyashri: yupFormSchemas.boolean(
    i18n('entities.govtBenefitsSurvey.fields.hasKanyashri'),
    {},
  ),
  hasPmAwasYojana: yupFormSchemas.boolean(
    i18n('entities.govtBenefitsSurvey.fields.hasPmAwasYojana'),
    {},
  ),
  hasChiefMinisterRelief: yupFormSchemas.boolean(
    i18n('entities.govtBenefitsSurvey.fields.hasChiefMinisterRelief'),
    {},
  ),
  hasSwasthyaSathi: yupFormSchemas.boolean(
    i18n('entities.govtBenefitsSurvey.fields.hasSwasthyaSathi'),
    {},
  ),
});

function GovtBenefitsSurveyForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      person: record.person,
      surveyDate: record.surveyDate ? moment(record.surveyDate, 'YYYY-MM-DD') : null,
      hasKanyashri: record.hasKanyashri,
      hasPmAwasYojana: record.hasPmAwasYojana,
      hasChiefMinisterRelief: record.hasChiefMinisterRelief,
      hasSwasthyaSathi: record.hasSwasthyaSathi,
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
              <PersonAutocompleteFormItem  
                name="person"
                label={i18n('entities.govtBenefitsSurvey.fields.person')}
                required={true}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <DatePickerFormItem
                name="surveyDate"
                label={i18n('entities.govtBenefitsSurvey.fields.surveyDate')}
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SwitchFormItem
                name="hasKanyashri"
                label={i18n('entities.govtBenefitsSurvey.fields.hasKanyashri')}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SwitchFormItem
                name="hasPmAwasYojana"
                label={i18n('entities.govtBenefitsSurvey.fields.hasPmAwasYojana')}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SwitchFormItem
                name="hasChiefMinisterRelief"
                label={i18n('entities.govtBenefitsSurvey.fields.hasChiefMinisterRelief')}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SwitchFormItem
                name="hasSwasthyaSathi"
                label={i18n('entities.govtBenefitsSurvey.fields.hasSwasthyaSathi')}
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

export default GovtBenefitsSurveyForm;
