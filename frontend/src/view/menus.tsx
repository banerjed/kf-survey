import Permissions from 'src/security/permissions';
import { i18n } from 'src/i18n';
import React from 'react';
import CreditCardOutlinedIcon from '@material-ui/icons/CreditCardOutlined';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonIcon from '@material-ui/icons/Person';
import HistoryIcon from '@material-ui/icons/History';
import SettingsIcon from '@material-ui/icons/Settings';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import config from 'src/config';

const permissions = Permissions.values;

export default [
  {
    path: '/',
    exact: true,
    icon: <DashboardIcon />,
    label: i18n('dashboard.menu'),
    permissionRequired: null,
  },

  config.isPlanEnabled && {
    path: '/plan',
    permissionRequired: permissions.planRead,
    icon: <CreditCardOutlinedIcon />,
    label: i18n('plan.menu'),
  },

  {
    path: '/user',
    label: i18n('user.menu'),
    permissionRequired: permissions.userRead,
    icon: <PersonIcon />,
  },

  {
    path: '/audit-logs',
    icon: <HistoryIcon />,
    label: i18n('auditLog.menu'),
    permissionRequired: permissions.auditLogRead,
  },

  {
    path: '/settings',
    icon: <SettingsIcon />,
    label: i18n('settings.menu'),
    permissionRequired: permissions.settingsEdit,
  },

  {
    path: '/person',
    permissionRequired: permissions.personRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.person.menu'),
  },

  {
    path: '/household',
    permissionRequired: permissions.householdRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.household.menu'),
  },

  {
    path: '/home-survey',
    permissionRequired: permissions.homeSurveyRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.homeSurvey.menu'),
  },

  {
    path: '/livelihood-survey',
    permissionRequired: permissions.livelihoodSurveyRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.livelihoodSurvey.menu'),
  },

  {
    path: '/govt-benefits-survey',
    permissionRequired: permissions.govtBenefitsSurveyRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.govtBenefitsSurvey.menu'),
  },

  {
    path: '/food-security-survey',
    permissionRequired: permissions.foodSecuritySurveyRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.foodSecuritySurvey.menu'),
  },

  {
    path: '/health-survey',
    permissionRequired: permissions.healthSurveyRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.healthSurvey.menu'),
  },

  {
    path: '/chronic-disease-enum',
    permissionRequired: permissions.chronicDiseaseEnumRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.chronicDiseaseEnum.menu'),
  },

  {
    path: '/municipality-enum',
    permissionRequired: permissions.municipalityEnumRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.municipalityEnum.menu'),
  },

  {
    path: '/village-enum',
    permissionRequired: permissions.villageEnumRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.villageEnum.menu'),
  },

  {
    path: '/gram-panchayat-enum',
    permissionRequired: permissions.gramPanchayatEnumRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.gramPanchayatEnum.menu'),
  },

  {
    path: '/district-enum',
    permissionRequired: permissions.districtEnumRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.districtEnum.menu'),
  },
].filter(Boolean);
