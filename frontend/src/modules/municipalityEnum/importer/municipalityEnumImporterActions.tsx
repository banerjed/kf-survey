import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/municipalityEnum/importer/municipalityEnumImporterSelectors';
import MunicipalityEnumService from 'src/modules/municipalityEnum/municipalityEnumService';
import fields from 'src/modules/municipalityEnum/importer/municipalityEnumImporterFields';
import { i18n } from 'src/i18n';

const municipalityEnumImporterActions = importerActions(
  'MUNICIPALITYENUM_IMPORTER',
  selectors,
  MunicipalityEnumService.import,
  fields,
  i18n('entities.municipalityEnum.importer.fileName'),
);

export default municipalityEnumImporterActions;