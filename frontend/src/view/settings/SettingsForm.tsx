import { Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import SaveIcon from '@material-ui/icons/Save';
import UndoIcon from '@material-ui/icons/Undo';
import { useForm, FormProvider } from 'react-hook-form';
import { i18n } from 'src/i18n';
import actions from 'src/modules/settings/settingsActions';
import selectors from 'src/modules/settings/settingsSelectors';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FormWrapper, {
  FormButtons,
} from 'src/view/shared/styles/FormWrapper';
import MaterialUIColorTool from 'src/view/settings/MaterialUIColorTool';
import * as yup from 'yup';
import settingsThemeConverter from 'src/modules/settings/settingsThemeConverter';
import ImagesFormItem from '../shared/form/items/ImagesFormItem';
import Storage from 'src/security/storage';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  theme: yup
    .string()
    .transform((cv, ov) => {
      return ov === '' ? null : cv;
    })
    .nullable(true)
    .trim()
    .label(i18n('settings.fields.theme'))
    .required()
    .transform((_, originalValue) => {
      return settingsThemeConverter.toString(originalValue);
    }),
  logos: yupFormSchemas.files(
    i18n('settings.fields.logos'),
    {
      max: 1,
    },
  ),
  backgroundImages: yupFormSchemas.files(
    i18n('settings.fields.backgroundImages'),
    {
      max: 1,
    },
  ),
});

function SettingsForm(props) {
  const [
    materialUIColorToolKey,
    setMaterialUIColorToolKey,
  ] = useState(0);

  const dispatch = useDispatch();

  const saveLoading = useSelector(
    selectors.selectSaveLoading,
  );

  const settings = props.settings;

  const [initialValues] = useState(() => {
    return {
      ...(settings || {}),
      theme: settingsThemeConverter.fromString(
        settings && settings.theme,
      ),
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues,
  });

  useEffect(() => {
    form.register({ name: 'theme' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = (values) => {
    dispatch(actions.doSave(values));
  };

  const onReset = () => {
    // little hack to reset the uncontrolled component
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });
    setMaterialUIColorToolKey((prevState) => prevState + 1);
  };

  return (
    <FormWrapper>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <MaterialUIColorTool
            key={materialUIColorToolKey}
            onChange={(value) =>
              form.setValue('theme', value, { shouldValidate: true })
            }
            defaultValue={form.watch('theme')}
          />

          <ImagesFormItem
            name="logos"
            label={i18n('settings.fields.logos')}
            storage={Storage.values.settingsLogos}
            max={1}
          />

          <ImagesFormItem
            name="backgroundImages"
            label={i18n('settings.fields.backgroundImages')}
            storage={
              Storage.values.settingsBackgroundImages
            }
            max={1}
          />

          <FormButtons>
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

export default SettingsForm;
