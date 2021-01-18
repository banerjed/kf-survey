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
import actions from 'src/modules/homeSurvey/list/homeSurveyListActions';
import selectors from 'src/modules/homeSurvey/list/homeSurveyListSelectors';
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
import InputNumberRangeFormItem from 'src/view/shared/form/items/InputNumberRangeFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import homeSurveyEnumerators from 'src/modules/homeSurvey/homeSurveyEnumerators';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';
import HouseholdAutocompleteFormItem from 'src/view/household/autocomplete/HouseholdAutocompleteFormItem';

const schema = yup.object().shape({
  household: yupFilterSchemas.relationToOne(
    i18n('entities.homeSurvey.fields.household'),
  ),
  surveyDateRange: yupFilterSchemas.dateRange(
    i18n('entities.homeSurvey.fields.surveyDateRange'),
  ),
  homeType: yupFilterSchemas.enumerator(
    i18n('entities.homeSurvey.fields.homeType'),
  ),
  roofType: yupFilterSchemas.enumerator(
    i18n('entities.homeSurvey.fields.roofType'),
  ),
  houseAreaRange: yupFilterSchemas.integerRange(
    i18n('entities.homeSurvey.fields.houseAreaRange'),
  ),
  numberOfRoomsRange: yupFilterSchemas.integerRange(
    i18n('entities.homeSurvey.fields.numberOfRoomsRange'),
  ),
  hasElectricity: yupFilterSchemas.boolean(
    i18n('entities.homeSurvey.fields.hasElectricity'),
  ),
  hasSanitation: yupFilterSchemas.boolean(
    i18n('entities.homeSurvey.fields.hasSanitation'),
  ),
  sourceOfDrinkingWater: yupFilterSchemas.enumerator(
    i18n('entities.homeSurvey.fields.sourceOfDrinkingWater'),
  ),
});

const emptyValues = {
  household: null,
  surveyDateRange: [],
  homeType: null,
  roofType: null,
  houseAreaRange: [],
  numberOfRoomsRange: [],
  hasElectricity: null,
  hasSanitation: null,
  sourceOfDrinkingWater: null,
}

const previewRenders = {
  household: {
      label: i18n('entities.homeSurvey.fields.household'),
      render: filterRenders.relationToOne(),
    },
  surveyDateRange: {
    label: i18n('entities.homeSurvey.fields.surveyDateRange'),
    render: filterRenders.dateRange(),
  },
  homeType: {
    label: i18n('entities.homeSurvey.fields.homeType'),
    render: filterRenders.enumerator('entities.homeSurvey.enumerators.homeType',),
  },
  roofType: {
    label: i18n('entities.homeSurvey.fields.roofType'),
    render: filterRenders.enumerator('entities.homeSurvey.enumerators.roofType',),
  },
  houseAreaRange: {
    label: i18n('entities.homeSurvey.fields.houseAreaRange'),
    render: filterRenders.range(),
  },
  numberOfRoomsRange: {
    label: i18n('entities.homeSurvey.fields.numberOfRoomsRange'),
    render: filterRenders.range(),
  },
  hasElectricity: {
    label: i18n('entities.homeSurvey.fields.hasElectricity'),
    render: filterRenders.boolean(),
  },
  hasSanitation: {
    label: i18n('entities.homeSurvey.fields.hasSanitation'),
    render: filterRenders.boolean(),
  },
  sourceOfDrinkingWater: {
    label: i18n('entities.homeSurvey.fields.sourceOfDrinkingWater'),
    render: filterRenders.enumerator('entities.homeSurvey.enumerators.sourceOfDrinkingWater',),
  },
}

function HomeSurveyListFilter(props) {
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
                    label={i18n('entities.homeSurvey.fields.household')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <DatePickerRangeFormItem
                    name="surveyDateRange"
                    label={i18n('entities.homeSurvey.fields.surveyDateRange')}    
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
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
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
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
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputNumberRangeFormItem
                    name="houseAreaRange"
                    label={i18n('entities.homeSurvey.fields.houseAreaRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputNumberRangeFormItem
                    name="numberOfRoomsRange"
                    label={i18n('entities.homeSurvey.fields.numberOfRoomsRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SelectFormItem
                    name="hasElectricity"
                    label={i18n('entities.homeSurvey.fields.hasElectricity')}
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
                <Grid item lg={6} xs={12}>
                  <SelectFormItem
                    name="hasSanitation"
                    label={i18n('entities.homeSurvey.fields.hasSanitation')}
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
                <Grid item lg={6} xs={12}>
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

export default HomeSurveyListFilter;