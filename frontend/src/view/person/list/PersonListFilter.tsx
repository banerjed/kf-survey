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
import actions from 'src/modules/person/list/personListActions';
import selectors from 'src/modules/person/list/personListSelectors';
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
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import personEnumerators from 'src/modules/person/personEnumerators';
import HouseholdAutocompleteFormItem from 'src/view/household/autocomplete/HouseholdAutocompleteFormItem';

const schema = yup.object().shape({
  lastName: yupFilterSchemas.string(
    i18n('entities.person.fields.lastName'),
  ),
  fullName: yupFilterSchemas.string(
    i18n('entities.person.fields.fullName'),
  ),
  gender: yupFilterSchemas.enumerator(
    i18n('entities.person.fields.gender'),
  ),
  livesAwayFromHome: yupFilterSchemas.boolean(
    i18n('entities.person.fields.livesAwayFromHome'),
  ),
  isHeadOfHousehold: yupFilterSchemas.boolean(
    i18n('entities.person.fields.isHeadOfHousehold'),
  ),
  aadharNumber: yupFilterSchemas.string(
    i18n('entities.person.fields.aadharNumber'),
  ),
  mobileNumber: yupFilterSchemas.string(
    i18n('entities.person.fields.mobileNumber'),
  ),
  household: yupFilterSchemas.relationToOne(
    i18n('entities.person.fields.household'),
  ),
});

const emptyValues = {
  lastName: null,
  fullName: null,
  gender: null,
  livesAwayFromHome: null,
  isHeadOfHousehold: null,
  aadharNumber: null,
  mobileNumber: null,
  household: null,
}

const previewRenders = {
  lastName: {
    label: i18n('entities.person.fields.lastName'),
    render: filterRenders.generic(),
  },
  fullName: {
    label: i18n('entities.person.fields.fullName'),
    render: filterRenders.generic(),
  },
  gender: {
    label: i18n('entities.person.fields.gender'),
    render: filterRenders.enumerator('entities.person.enumerators.gender',),
  },
  livesAwayFromHome: {
    label: i18n('entities.person.fields.livesAwayFromHome'),
    render: filterRenders.boolean(),
  },
  isHeadOfHousehold: {
    label: i18n('entities.person.fields.isHeadOfHousehold'),
    render: filterRenders.boolean(),
  },
  aadharNumber: {
    label: i18n('entities.person.fields.aadharNumber'),
    render: filterRenders.generic(),
  },
  mobileNumber: {
    label: i18n('entities.person.fields.mobileNumber'),
    render: filterRenders.generic(),
  },
  household: {
      label: i18n('entities.person.fields.household'),
      render: filterRenders.relationToOne(),
    },
}

function PersonListFilter(props) {
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
                  <InputFormItem
                    name="lastName"
                    label={i18n('entities.person.fields.lastName')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="fullName"
                    label={i18n('entities.person.fields.fullName')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SelectFormItem
                    name="gender"
                    label={i18n('entities.person.fields.gender')}
                    options={personEnumerators.gender.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.person.enumerators.gender.${value}`,
                        ),
                      }),
                    )}
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SelectFormItem
                    name="livesAwayFromHome"
                    label={i18n('entities.person.fields.livesAwayFromHome')}
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
                    name="isHeadOfHousehold"
                    label={i18n('entities.person.fields.isHeadOfHousehold')}
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
                  <InputFormItem
                    name="aadharNumber"
                    label={i18n('entities.person.fields.aadharNumber')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="mobileNumber"
                    label={i18n('entities.person.fields.mobileNumber')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <HouseholdAutocompleteFormItem  
                    name="household"
                    label={i18n('entities.person.fields.household')}        
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

export default PersonListFilter;