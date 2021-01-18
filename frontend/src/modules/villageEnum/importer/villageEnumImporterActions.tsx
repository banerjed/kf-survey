import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/villageEnum/importer/villageEnumImporterSelectors';
import VillageEnumService from 'src/modules/villageEnum/villageEnumService';
import fields from 'src/modules/villageEnum/importer/villageEnumImporterFields';
import { i18n } from 'src/i18n';

const villageEnumImporterActions = importerActions(
  'VILLAGEENUM_IMPORTER',
  selectors,
  VillageEnumService.import,
  fields,
  i18n('entities.villageEnum.importer.fileName'),
);

export default villageEnumImporterActions;