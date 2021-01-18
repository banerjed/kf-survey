import {
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import UndoIcon from '@material-ui/icons/Undo';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/healthSurvey/list/healthSurveyListActions';
import selectors from 'src/modules/healthSurvey/list/healthSurveyListSelectors';
import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
import FilterWrapper, {
  FilterButtons,
} from 'src/view/shared/styles/FilterWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import filterRenders from 'src/modules/shared/filter/filterRenders';
import FilterPreview from 'src/view/shared/filter/FilterPreview';
import FilterAccordion from 'src/view/shared/filter/FilterAccordion';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import healthSurveyEnumerators from 'src/modules/healthSurvey/healthSurveyEnumerators';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';
import PersonAutocompleteFormItem from 'src/view/person/autocomplete/PersonAutocompleteFormItem';
import ChronicDiseaseEnumAutocompleteFormItem from 'src/view/chronicDiseaseEnum/autocomplete/ChronicDiseaseEnumAutocompleteFormItem';

const schema = yup.object().shape({
  person: yupFilterSchemas.relationToOne(
    i18n('entities.healthSurvey.fields.person'),
  ),
  surveyDateRange: yupFilterSchemas.dateRange(
    i18n('entities.healthSurvey.fields.surveyDateRange'),
  ),
  healthCondition: yupFilterSchemas.enumerator(
    i18n('entities.healthSurvey.fields.healthCondition'),
  ),
  smoking: yupFilterSchemas.enumerator(
    i18n('entities.healthSurvey.fields.smoking'),
  ),
  drinking: yupFilterSchemas.enumerator(
    i18n('entities.healthSurvey.fields.drinking'),
  ),
  substanceAbuse: yupFilterSchemas.enumerator(
    i18n('entities.healthSurvey.fields.substanceAbuse'),
  ),
  chronicDisease1: yupFilterSchemas.relationToOne(
    i18n('entities.healthSurvey.fields.chronicDisease1'),
  ),
  chronicDisease2: yupFilterSchemas.relationToOne(
    i18n('entities.healthSurvey.fields.chronicDisease2'),
  ),
});

const emptyValues = {
  person: null,
  surveyDateRange: [],
  healthCondition: null,
  smoking: null,
  drinking: null,
  substanceAbuse: null,
  chronicDisease1: null,
  chronicDisease2: null,
}

const previewRenders = {
  person: {
      label: i18n('entities.healthSurvey.fields.person'),
      render: filterRenders.relationToOne(),
    },
  surveyDateRange: {
    label: i18n('entities.healthSurvey.fields.surveyDateRange'),
    render: filterRenders.dateRange(),
  },
  healthCondition: {
    label: i18n('entities.healthSurvey.fields.healthCondition'),
    render: filterRenders.enumerator('entities.healthSurvey.enumerators.healthCondition',),
  },
  smoking: {
    label: i18n('entities.healthSurvey.fields.smoking'),
    render: filterRenders.enumerator('entities.healthSurvey.enumerators.smoking',),
  },
  drinking: {
    label: i18n('entities.healthSurvey.fields.drinking'),
    render: filterRenders.enumerator('entities.healthSurvey.enumerators.drinking',),
  },
  substanceAbuse: {
    label: i18n('entities.healthSurvey.fields.substanceAbuse'),
    render: filterRenders.enumerator('entities.healthSurvey.enumerators.substanceAbuse',),
  },
  chronicDisease1: {
      label: i18n('entities.healthSurvey.fields.chronicDisease1'),
      render: filterRenders.relationToOne(),
    },
  chronicDisease2: {
      label: i18n('entities.healthSurvey.fields.chronicDisease2'),
      render: filterRenders.relationToOne(),
    },
}

function HealthSurveyListFilter(props) {
  const rawFilter = useSelector(selectors.selectRawFilter);
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);

  const [initialValues] = useState(() => {
    return {
      ...emptyValues,
      ...rawFilter,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: initialValues,
    mode: 'all',
  });

  useEffect(() => {
    dispatch(actions.doFetch(schema.cast(initialValues), rawFilter));
    // eslint-disable-next-line
  }, [dispatch]);

  const onSubmit = (values) => {
    const rawValues = form.getValues();
    dispatch(actions.doFetch(values, rawValues));
    setExpanded(false);
  };

  const onReset = () => {
    Object.keys(emptyValues).forEach((key) => {
      form.setValue(key, emptyValues[key]);
    });
    dispatch(actions.doReset());
    setExpanded(false);
  };

  const onRemove = (key) => {
    form.setValue(key, emptyValues[key]);
    return form.handleSubmit(onSubmit)();
  };

  return (
    <FilterWrapper>
      <FilterAccordion
        expanded={expanded}
        onChange={(event, isExpanded) =>
          setExpanded(isExpanded)
        }
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <FilterPreview
            values={rawFilter}
            renders={previewRenders}
            expanded={expanded}
            onRemove={onRemove}
          />
        </AccordionSummary>
        <AccordionDetails>
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <Grid item lg={6} xs={12}>
                  <PersonAutocompleteFormItem  
                    name="person"
                    label={i18n('entities.healthSurvey.fields.person')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <DatePickerRangeFormItem
                    name="surveyDateRange"
                    label={i18n('entities.healthSurvey.fields.surveyDateRange')}    
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
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
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
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
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
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
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
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
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <ChronicDiseaseEnumAutocompleteFormItem  
                    name="chronicDisease1"
                    label={i18n('entities.healthSurvey.fields.chronicDisease1')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <ChronicDiseaseEnumAutocompleteFormItem  
                    name="chronicDisease2"
                    label={i18n('entities.healthSurvey.fields.chronicDisease2')}        
                  />
                </Grid>
              </Grid>

              <FilterButtons>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={props.loading}
                  startIcon={<SearchIcon />}
                  size="small"
                >
                  {i18n('common.search')}
                </Button>

                <Button
                  type="button"
                  onClick={onReset}
                  disabled={props.loading}
                  startIcon={<UndoIcon />}
                  size="small"
                >
                  {i18n('common.reset')}
                </Button>
              </FilterButtons>
            </form>
          </FormProvider>
        </AccordionDetails>
      </FilterAccordion>
    </FilterWrapper>
  );
}

export default HealthSurveyListFilter;