import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/districtEnum/importer/districtEnumImporterSelectors';
import DistrictEnumService from 'src/modules/districtEnum/districtEnumService';
import fields from 'src/modules/districtEnum/importer/districtEnumImporterFields';
import { i18n } from 'src/i18n';

const districtEnumImporterActions = importerActions(
  'DISTRICTENUM_IMPORTER',
  selectors,
  DistrictEnumService.import,
  fields,
  i18n('entities.districtEnum.importer.fileName'),
);

export default districtEnumImporterActions;