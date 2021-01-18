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
import actions from 'src/modules/foodSecuritySurvey/list/foodSecuritySurveyListActions';
import selectors from 'src/modules/foodSecuritySurvey/list/foodSecuritySurveyListSelectors';
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
import foodSecuritySurveyEnumerators from 'src/modules/foodSecuritySurvey/foodSecuritySurveyEnumerators';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';
import HouseholdAutocompleteFormItem from 'src/view/household/autocomplete/HouseholdAutocompleteFormItem';

const schema = yup.object().shape({
  household: yupFilterSchemas.relationToOne(
    i18n('entities.foodSecuritySurvey.fields.household'),
  ),
  surveyDateRange: yupFilterSchemas.dateRange(
    i18n('entities.foodSecuritySurvey.fields.surveyDateRange'),
  ),
  enoughToEat: yupFilterSchemas.enumerator(
    i18n('entities.foodSecuritySurvey.fields.enoughToEat'),
  ),
  proteinSource: yupFilterSchemas.enumerator(
    i18n('entities.foodSecuritySurvey.fields.proteinSource'),
  ),
});

const emptyValues = {
  household: null,
  surveyDateRange: [],
  enoughToEat: null,
  proteinSource: null,
}

const previewRenders = {
  household: {
      label: i18n('entities.foodSecuritySurvey.fields.household'),
      render: filterRenders.relationToOne(),
    },
  surveyDateRange: {
    label: i18n('entities.foodSecuritySurvey.fields.surveyDateRange'),
    render: filterRenders.dateRange(),
  },
  enoughToEat: {
    label: i18n('entities.foodSecuritySurvey.fields.enoughToEat'),
    render: filterRenders.enumerator('entities.foodSecuritySurvey.enumerators.enoughToEat',),
  },
  proteinSource: {
    label: i18n('entities.foodSecuritySurvey.fields.proteinSource'),
    render: filterRenders.enumerator('entities.foodSecuritySurvey.enumerators.proteinSource',),
  },
}

function FoodSecuritySurveyListFilter(props) {
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
                    label={i18n('entities.foodSecuritySurvey.fields.household')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <DatePickerRangeFormItem
                    name="surveyDateRange"
                    label={i18n('entities.foodSecuritySurvey.fields.surveyDateRange')}    
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
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
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
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

export default FoodSecuritySurveyListFilter;