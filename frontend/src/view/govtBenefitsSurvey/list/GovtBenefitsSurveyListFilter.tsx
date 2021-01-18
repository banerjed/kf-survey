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
import actions from 'src/modules/govtBenefitsSurvey/list/govtBenefitsSurveyListActions';
import selectors from 'src/modules/govtBenefitsSurvey/list/govtBenefitsSurveyListSelectors';
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
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';
import PersonAutocompleteFormItem from 'src/view/person/autocomplete/PersonAutocompleteFormItem';

const schema = yup.object().shape({
  person: yupFilterSchemas.relationToOne(
    i18n('entities.govtBenefitsSurvey.fields.person'),
  ),
  surveyDateRange: yupFilterSchemas.dateRange(
    i18n('entities.govtBenefitsSurvey.fields.surveyDateRange'),
  ),
  hasKanyashri: yupFilterSchemas.boolean(
    i18n('entities.govtBenefitsSurvey.fields.hasKanyashri'),
  ),
  hasPmAwasYojana: yupFilterSchemas.boolean(
    i18n('entities.govtBenefitsSurvey.fields.hasPmAwasYojana'),
  ),
  hasChiefMinisterRelief: yupFilterSchemas.boolean(
    i18n('entities.govtBenefitsSurvey.fields.hasChiefMinisterRelief'),
  ),
  hasSwasthyaSathi: yupFilterSchemas.boolean(
    i18n('entities.govtBenefitsSurvey.fields.hasSwasthyaSathi'),
  ),
});

const emptyValues = {
  person: null,
  surveyDateRange: [],
  hasKanyashri: null,
  hasPmAwasYojana: null,
  hasChiefMinisterRelief: null,
  hasSwasthyaSathi: null,
}

const previewRenders = {
  person: {
      label: i18n('entities.govtBenefitsSurvey.fields.person'),
      render: filterRenders.relationToOne(),
    },
  surveyDateRange: {
    label: i18n('entities.govtBenefitsSurvey.fields.surveyDateRange'),
    render: filterRenders.dateRange(),
  },
  hasKanyashri: {
    label: i18n('entities.govtBenefitsSurvey.fields.hasKanyashri'),
    render: filterRenders.boolean(),
  },
  hasPmAwasYojana: {
    label: i18n('entities.govtBenefitsSurvey.fields.hasPmAwasYojana'),
    render: filterRenders.boolean(),
  },
  hasChiefMinisterRelief: {
    label: i18n('entities.govtBenefitsSurvey.fields.hasChiefMinisterRelief'),
    render: filterRenders.boolean(),
  },
  hasSwasthyaSathi: {
    label: i18n('entities.govtBenefitsSurvey.fields.hasSwasthyaSathi'),
    render: filterRenders.boolean(),
  },
}

function GovtBenefitsSurveyListFilter(props) {
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
                    label={i18n('entities.govtBenefitsSurvey.fields.person')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <DatePickerRangeFormItem
                    name="surveyDateRange"
                    label={i18n('entities.govtBenefitsSurvey.fields.surveyDateRange')}    
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SelectFormItem
                    name="hasKanyashri"
                    label={i18n('entities.govtBenefitsSurvey.fields.hasKanyashri')}
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
                    name="hasPmAwasYojana"
                    label={i18n('entities.govtBenefitsSurvey.fields.hasPmAwasYojana')}
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
                    name="hasChiefMinisterRelief"
                    label={i18n('entities.govtBenefitsSurvey.fields.hasChiefMinisterRelief')}
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
                    name="hasSwasthyaSathi"
                    label={i18n('entities.govtBenefitsSurvey.fields.hasSwasthyaSathi')}
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

export default GovtBenefitsSurveyListFilter;