import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.homeSurvey.fields.id'),
  },
  {
    name: 'household',
    label: i18n('entities.homeSurvey.fields.household'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'surveyDate',
    label: i18n('entities.homeSurvey.fields.surveyDate'),
  },
  {
    name: 'homeType',
    label: i18n('entities.homeSurvey.fields.homeType'),
  },
  {
    name: 'roofType',
    label: i18n('entities.homeSurvey.fields.roofType'),
  },
  {
    name: 'houseArea',
    label: i18n('entities.homeSurvey.fields.houseArea'),
  },
  {
    name: 'numberOfRooms',
    label: i18n('entities.homeSurvey.fields.numberOfRooms'),
  },
  {
    name: 'hasElectricity',
    label: i18n('entities.homeSurvey.fields.hasElectricity'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'hasSanitation',
    label: i18n('entities.homeSurvey.fields.hasSanitation'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'sourceOfDrinkingWater',
    label: i18n('entities.homeSurvey.fields.sourceOfDrinkingWater'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.homeSurvey.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.homeSurvey.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
