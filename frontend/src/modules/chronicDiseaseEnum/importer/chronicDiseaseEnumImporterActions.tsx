import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/chronicDiseaseEnum/importer/chronicDiseaseEnumImporterSelectors';
import ChronicDiseaseEnumService from 'src/modules/chronicDiseaseEnum/chronicDiseaseEnumService';
import fields from 'src/modules/chronicDiseaseEnum/importer/chronicDiseaseEnumImporterFields';
import { i18n } from 'src/i18n';

const chronicDiseaseEnumImporterActions = importerActions(
  'CHRONICDISEASEENUM_IMPORTER',
  selectors,
  ChronicDiseaseEnumService.import,
  fields,
  i18n('entities.chronicDiseaseEnum.importer.fileName'),
);

export default chronicDiseaseEnumImporterActions;