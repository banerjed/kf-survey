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
import actions from 'src/modules/household/list/householdListActions';
import selectors from 'src/modules/household/list/householdListSelectors';
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
import VillageEnumAutocompleteFormItem from 'src/view/villageEnum/autocomplete/VillageEnumAutocompleteFormItem';
import GramPanchayatEnumAutocompleteFormItem from 'src/view/gramPanchayatEnum/autocomplete/GramPanchayatEnumAutocompleteFormItem';
import MunicipalityEnumAutocompleteFormItem from 'src/view/municipalityEnum/autocomplete/MunicipalityEnumAutocompleteFormItem';
import DistrictEnumAutocompleteFormItem from 'src/view/districtEnum/autocomplete/DistrictEnumAutocompleteFormItem';

const schema = yup.object().shape({
  householdName: yupFilterSchemas.string(
    i18n('entities.household.fields.householdName'),
  ),
  village: yupFilterSchemas.relationToOne(
    i18n('entities.household.fields.village'),
  ),
  gramPanchayat: yupFilterSchemas.relationToOne(
    i18n('entities.household.fields.gramPanchayat'),
  ),
  municipality: yupFilterSchemas.relationToOne(
    i18n('entities.household.fields.municipality'),
  ),
  district: yupFilterSchemas.relationToOne(
    i18n('entities.household.fields.district'),
  ),
});

const emptyValues = {
  householdName: null,
  village: null,
  gramPanchayat: null,
  municipality: null,
  district: null,
}

const previewRenders = {
  householdName: {
    label: i18n('entities.household.fields.householdName'),
    render: filterRenders.generic(),
  },
  village: {
      label: i18n('entities.household.fields.village'),
      render: filterRenders.relationToOne(),
    },
  gramPanchayat: {
      label: i18n('entities.household.fields.gramPanchayat'),
      render: filterRenders.relationToOne(),
    },
  municipality: {
      label: i18n('entities.household.fields.municipality'),
      render: filterRenders.relationToOne(),
    },
  district: {
      label: i18n('entities.household.fields.district'),
      render: filterRenders.relationToOne(),
    },
}

function HouseholdListFilter(props) {
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
                    name="householdName"
                    label={i18n('entities.household.fields.householdName')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <VillageEnumAutocompleteFormItem  
                    name="village"
                    label={i18n('entities.household.fields.village')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <GramPanchayatEnumAutocompleteFormItem  
                    name="gramPanchayat"
                    label={i18n('entities.household.fields.gramPanchayat')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <MunicipalityEnumAutocompleteFormItem  
                    name="municipality"
                    label={i18n('entities.household.fields.municipality')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <DistrictEnumAutocompleteFormItem  
                    name="district"
                    label={i18n('entities.household.fields.district')}        
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

export default HouseholdListFilter;