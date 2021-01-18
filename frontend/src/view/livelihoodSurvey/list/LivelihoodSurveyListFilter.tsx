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
import actions from 'src/modules/livelihoodSurvey/list/livelihoodSurveyListActions';
import selectors from 'src/modules/livelihoodSurvey/list/livelihoodSurveyListSelectors';
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
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import InputRangeFormItem from 'src/view/shared/form/items/InputRangeFormItem';
import InputNumberRangeFormItem from 'src/view/shared/form/items/InputNumberRangeFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';
import HouseholdAutocompleteFormItem from 'src/view/household/autocomplete/HouseholdAutocompleteFormItem';

const schema = yup.object().shape({
  household: yupFilterSchemas.relationToOne(
    i18n('entities.livelihoodSurvey.fields.household'),
  ),
  surveyDateRange: yupFilterSchemas.dateRange(
    i18n('entities.livelihoodSurvey.fields.surveyDateRange'),
  ),
  annualHouseholdIncomeRange: yupFilterSchemas.integerRange(
    i18n('entities.livelihoodSurvey.fields.annualHouseholdIncomeRange'),
  ),
  sizeOfFarmRange: yupFilterSchemas.decimalRange(
    i18n('entities.livelihoodSurvey.fields.sizeOfFarmRange'),
  ),
  sizeOfPondRange: yupFilterSchemas.decimalRange(
    i18n('entities.livelihoodSurvey.fields.sizeOfPondRange'),
  ),
  whatIsFarmed: yupFilterSchemas.string(
    i18n('entities.livelihoodSurvey.fields.whatIsFarmed'),
  ),
  doesFishing: yupFilterSchemas.boolean(
    i18n('entities.livelihoodSurvey.fields.doesFishing'),
  ),
});

const emptyValues = {
  household: null,
  surveyDateRange: [],
  annualHouseholdIncomeRange: [],
  sizeOfFarmRange: [],
  sizeOfPondRange: [],
  whatIsFarmed: null,
  doesFishing: null,
}

const previewRenders = {
  household: {
      label: i18n('entities.livelihoodSurvey.fields.household'),
      render: filterRenders.relationToOne(),
    },
  surveyDateRange: {
    label: i18n('entities.livelihoodSurvey.fields.surveyDateRange'),
    render: filterRenders.dateRange(),
  },
  annualHouseholdIncomeRange: {
    label: i18n('entities.livelihoodSurvey.fields.annualHouseholdIncomeRange'),
    render: filterRenders.range(),
  },
  sizeOfFarmRange: {
    label: i18n('entities.livelihoodSurvey.fields.sizeOfFarmRange'),
    render: filterRenders.decimalRange(),
  },
  sizeOfPondRange: {
    label: i18n('entities.livelihoodSurvey.fields.sizeOfPondRange'),
    render: filterRenders.decimalRange(),
  },
  whatIsFarmed: {
    label: i18n('entities.livelihoodSurvey.fields.whatIsFarmed'),
    render: filterRenders.generic(),
  },
  doesFishing: {
    label: i18n('entities.livelihoodSurvey.fields.doesFishing'),
    render: filterRenders.boolean(),
  },
}

function LivelihoodSurveyListFilter(props) {
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
                  <HouseholdAutocompleteFormItem  
                    name="household"
                    label={i18n('entities.livelihoodSurvey.fields.household')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <DatePickerRangeFormItem
                    name="surveyDateRange"
                    label={i18n('entities.livelihoodSurvey.fields.surveyDateRange')}    
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputNumberRangeFormItem
                    name="annualHouseholdIncomeRange"
                    label={i18n('entities.livelihoodSurvey.fields.annualHouseholdIncomeRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputRangeFormItem
                    name="sizeOfFarmRange"
                    label={i18n('entities.livelihoodSurvey.fields.sizeOfFarmRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputRangeFormItem
                    name="sizeOfPondRange"
                    label={i18n('entities.livelihoodSurvey.fields.sizeOfPondRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="whatIsFarmed"
                    label={i18n('entities.livelihoodSurvey.fields.whatIsFarmed')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SelectFormItem
                    name="doesFishing"
                    label={i18n('entities.livelihoodSurvey.fields.doesFishing')}
                    options={[
                      {
                        value: true,
                        label: i18n('common.yes'),
                      },
                      {
                        value: false,
                        label: i18n('common.no'),
                      },
                    ]}
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

export default LivelihoodSurveyListFilter;