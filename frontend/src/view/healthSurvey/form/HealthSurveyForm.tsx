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
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import healthSurveyEnumerators from 'src/modules/healthSurvey/healthSurveyEnumerators';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import Storage from 'src/security/storage';
import ImagesFormItem from 'src/view/shared/form/items/ImagesFormItem';
import PersonAutocompleteFormItem from 'src/view/person/autocomplete/PersonAutocompleteFormItem';
import ChronicDiseaseEnumAutocompleteFormItem from 'src/view/chronicDiseaseEnum/autocomplete/ChronicDiseaseEnumAutocompleteFormItem';

const schema = yup.object().shape({
  person: yupFormSchemas.relationToOne(
    i18n('entities.healthSurvey.fields.person'),
    {
      "required": true
    },
  ),
  surveyDate: yupFormSchemas.date(
    i18n('entities.healthSurvey.fields.surveyDate'),
    {
      "required": true
    },
  ),
  healthCondition: yupFormSchemas.enumerator(
    i18n('entities.healthSurvey.fields.healthCondition'),
    {
      "options": healthSurveyEnumerators.healthCondition
    },
  ),
  weight: yupFormSchemas.decimal(
    i18n('entities.healthSurvey.fields.weight'),
    {},
  ),
  height: yupFormSchemas.decimal(
    i18n('entities.healthSurvey.fields.height'),
    {},
  ),
  heartRate: yupFormSchemas.string(
    i18n('entities.healthSurvey.fields.heartRate'),
    {},
  ),
  pulseRate: yupFormSchemas.decimal(
    i18n('entities.healthSurvey.fields.pulseRate'),
    {},
  ),
  bloodOxygenLevel: yupFormSchemas.string(
    i18n('entities.healthSurvey.fields.bloodOxygenLevel'),
    {},
  ),
  picture: yupFormSchemas.images(
    i18n('entities.healthSurvey.fields.picture'),
    {},
  ),
  smoking: yupFormSchemas.enumerator(
    i18n('entities.healthSurvey.fields.smoking'),
    {
      "options": healthSurveyEnumerators.smoking
    },
  ),
  smokingFrequency: yupFormSchemas.string(
    i18n('entities.healthSurvey.fields.smokingFrequency'),
    {},
  ),
  drinking: yupFormSchemas.enumerator(
    i18n('entities.healthSurvey.fields.drinking'),
    {
      "options": healthSurveyEnumerators.drinking
    },
  ),
  substanceAbuse: yupFormSchemas.enumerator(
    i18n('entities.healthSurvey.fields.substanceAbuse'),
    {
      "options": healthSurveyEnumerators.substanceAbuse
    },
  ),
  chronicDisease1: yupFormSchemas.relationToOne(
    i18n('entities.healthSurvey.fields.chronicDisease1'),
    {},
  ),
  chronicDisease2: yupFormSchemas.relationToOne(
    i18n('entities.healthSurvey.fields.chronicDisease2'),
    {},
  ),
  chronicDisease3: yupFormSchemas.relationToOne(
    i18n('entities.healthSurvey.fields.chronicDisease3'),
    {},
  ),
});

function HealthSurveyForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      person: record.person,
      surveyDate: record.surveyDate ? moment(record.surveyDate, 'YYYY-MM-DD') : null,
      healthCondition: record.healthCondition,
      weight: record.weight,
      height: record.height,
      heartRate: record.heartRate,
      pulseRate: record.pulseRate,
      bloodOxygenLevel: record.bloodOxygenLevel,
      picture: record.picture || [],
      smoking: record.smoking,
      smokingFrequency: record.smokingFrequency,
      drinking: record.drinking,
      substanceAbuse: record.substanceAbuse,
      chronicDisease1: record.chronicDisease1,
      chronicDisease2: record.chronicDisease2,
      chronicDisease3: record.chronicDisease3,
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
                label={i18n('entities.healthSurvey.fields.person')}
                required={true}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <DatePickerFormItem
                name="surveyDate"
                label={i18n('entities.healthSurvey.fields.surveyDate')}
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="healthCondition"
                label={i18n('entities.healthSurvey.fields.healthCondition')}
                options={healthSurveyEnumerators.healthCondition.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.healthSurvey.enumerators.healthCondition.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="weight"
                label={i18n('entities.healthSurvey.fields.weight')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="height"
                label={i18n('entities.healthSurvey.fields.height')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="heartRate"
                label={i18n('entities.healthSurvey.fields.heartRate')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="pulseRate"
                label={i18n('entities.healthSurvey.fields.pulseRate')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="bloodOxygenLevel"
                label={i18n('entities.healthSurvey.fields.bloodOxygenLevel')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <ImagesFormItem
                name="picture"
                label={i18n('entities.healthSurvey.fields.picture')}
                required={false}
                storage={Storage.values.healthSurveyPicture}
                max={undefined}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="smoking"
                label={i18n('entities.healthSurvey.fields.smoking')}
                options={healthSurveyEnumerators.smoking.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.healthSurvey.enumerators.smoking.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="smokingFrequency"
                label={i18n('entities.healthSurvey.fields.smokingFrequency')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="drinking"
                label={i18n('entities.healthSurvey.fields.drinking')}
                options={healthSurveyEnumerators.drinking.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.healthSurvey.enumerators.drinking.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="substanceAbuse"
                label={i18n('entities.healthSurvey.fields.substanceAbuse')}
                options={healthSurveyEnumerators.substanceAbuse.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.healthSurvey.enumerators.substanceAbuse.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <ChronicDiseaseEnumAutocompleteFormItem  
                name="chronicDisease1"
                label={i18n('entities.healthSurvey.fields.chronicDisease1')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <ChronicDiseaseEnumAutocompleteFormItem  
                name="chronicDisease2"
                label={i18n('entities.healthSurvey.fields.chronicDisease2')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <ChronicDiseaseEnumAutocompleteFormItem  
                name="chronicDisease3"
                label={i18n('entities.healthSurvey.fields.chronicDisease3')}
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

export default HealthSurveyForm;
