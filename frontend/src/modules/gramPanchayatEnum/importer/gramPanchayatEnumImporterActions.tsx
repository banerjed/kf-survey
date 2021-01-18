import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/gramPanchayatEnum/importer/gramPanchayatEnumImporterSelectors';
import GramPanchayatEnumService from 'src/modules/gramPanchayatEnum/gramPanchayatEnumService';
import fields from 'src/modules/gramPanchayatEnum/importer/gramPanchayatEnumImporterFields';
import { i18n } from 'src/i18n';

const gramPanchayatEnumImporterActions = importerActions(
  'GRAMPANCHAYATENUM_IMPORTER',
  selectors,
  GramPanchayatEnumService.import,
  fields,
  i18n('entities.gramPanchayatEnum.importer.fileName'),
);

export default gramPanchayatEnumImporterActions;