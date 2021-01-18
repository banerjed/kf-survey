import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.gramPanchayatEnum.fields.name'),
    schema: schemas.string(
      i18n('entities.gramPanchayatEnum.fields.name'),
      {
        "required": true,
        "max": 100
      },
    ),
  },
];