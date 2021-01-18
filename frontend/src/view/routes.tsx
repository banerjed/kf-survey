import Permissions from 'src/security/permissions';
import config from 'src/config';
const permissions = Permissions.values;

const privateRoutes = [
  {
    path: '/',
    loader: () =>
      import('src/view/dashboard/DashboardPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/profile',
    loader: () => import('src/view/auth/ProfileFormPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/password-change',
    loader: () =>
      import('src/view/auth/PasswordChangeFormPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/tenant',
    loader: () =>
      import('src/view/tenant/list/TenantListPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/tenant/new',
    loader: () =>
      import('src/view/tenant/form/TenantFormPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/tenant/:id/edit',
    loader: () =>
      import('src/view/tenant/form/TenantFormPage'),
    permissionRequired: null,
    exact: true,
  },

  config.isPlanEnabled && {
    path: '/plan',
    loader: () => import('src/view/plan/PlanPage'),
    permissionRequired: permissions.planRead,
    exact: true,
  },

  {
    path: '/user',
    loader: () => import('src/view/user/list/UserPage'),
    permissionRequired: permissions.userRead,
    exact: true,
  },

  {
    path: '/user/new',
    loader: () => import('src/view/user/new/UserNewPage'),
    permissionRequired: permissions.userCreate,
    exact: true,
  },

  {
    path: '/user/importer',
    loader: () =>
      import('src/view/user/importer/UserImporterPage'),
    permissionRequired: permissions.userImport,
    exact: true,
  },
  {
    path: '/user/:id/edit',
    loader: () => import('src/view/user/edit/UserEditPage'),
    permissionRequired: permissions.userEdit,
    exact: true,
  },
  {
    path: '/user/:id',
    loader: () => import('src/view/user/view/UserViewPage'),
    permissionRequired: permissions.userRead,
    exact: true,
  },

  {
    path: '/audit-logs',
    loader: () => import('src/view/auditLog/AuditLogPage'),
    permissionRequired: permissions.auditLogRead,
  },

  {
    path: '/settings',
    loader: () =>
      import('src/view/settings/SettingsFormPage'),
    permissionRequired: permissions.settingsEdit,
  },
  
  {
    path: '/person',
    loader: () =>
      import('src/view/person/list/PersonListPage'),
    permissionRequired: permissions.personRead,
    exact: true,
  },
  {
    path: '/person/new',
    loader: () =>
      import('src/view/person/form/PersonFormPage'),
    permissionRequired: permissions.personCreate,
    exact: true,
  },
  {
    path: '/person/importer',
    loader: () =>
      import(
        'src/view/person/importer/PersonImporterPage'
      ),
    permissionRequired: permissions.personImport,
    exact: true,
  },
  {
    path: '/person/:id/edit',
    loader: () =>
      import('src/view/person/form/PersonFormPage'),
    permissionRequired: permissions.personEdit,
    exact: true,
  },
  {
    path: '/person/:id',
    loader: () =>
      import('src/view/person/view/PersonViewPage'),
    permissionRequired: permissions.personRead,
    exact: true,
  },

  {
    path: '/household',
    loader: () =>
      import('src/view/household/list/HouseholdListPage'),
    permissionRequired: permissions.householdRead,
    exact: true,
  },
  {
    path: '/household/new',
    loader: () =>
      import('src/view/household/form/HouseholdFormPage'),
    permissionRequired: permissions.householdCreate,
    exact: true,
  },
  {
    path: '/household/importer',
    loader: () =>
      import(
        'src/view/household/importer/HouseholdImporterPage'
      ),
    permissionRequired: permissions.householdImport,
    exact: true,
  },
  {
    path: '/household/:id/edit',
    loader: () =>
      import('src/view/household/form/HouseholdFormPage'),
    permissionRequired: permissions.householdEdit,
    exact: true,
  },
  {
    path: '/household/:id',
    loader: () =>
      import('src/view/household/view/HouseholdViewPage'),
    permissionRequired: permissions.householdRead,
    exact: true,
  },

  {
    path: '/home-survey',
    loader: () =>
      import('src/view/homeSurvey/list/HomeSurveyListPage'),
    permissionRequired: permissions.homeSurveyRead,
    exact: true,
  },
  {
    path: '/home-survey/new',
    loader: () =>
      import('src/view/homeSurvey/form/HomeSurveyFormPage'),
    permissionRequired: permissions.homeSurveyCreate,
    exact: true,
  },
  {
    path: '/home-survey/importer',
    loader: () =>
      import(
        'src/view/homeSurvey/importer/HomeSurveyImporterPage'
      ),
    permissionRequired: permissions.homeSurveyImport,
    exact: true,
  },
  {
    path: '/home-survey/:id/edit',
    loader: () =>
      import('src/view/homeSurvey/form/HomeSurveyFormPage'),
    permissionRequired: permissions.homeSurveyEdit,
    exact: true,
  },
  {
    path: '/home-survey/:id',
    loader: () =>
      import('src/view/homeSurvey/view/HomeSurveyViewPage'),
    permissionRequired: permissions.homeSurveyRead,
    exact: true,
  },

  {
    path: '/livelihood-survey',
    loader: () =>
      import('src/view/livelihoodSurvey/list/LivelihoodSurveyListPage'),
    permissionRequired: permissions.livelihoodSurveyRead,
    exact: true,
  },
  {
    path: '/livelihood-survey/new',
    loader: () =>
      import('src/view/livelihoodSurvey/form/LivelihoodSurveyFormPage'),
    permissionRequired: permissions.livelihoodSurveyCreate,
    exact: true,
  },
  {
    path: '/livelihood-survey/importer',
    loader: () =>
      import(
        'src/view/livelihoodSurvey/importer/LivelihoodSurveyImporterPage'
      ),
    permissionRequired: permissions.livelihoodSurveyImport,
    exact: true,
  },
  {
    path: '/livelihood-survey/:id/edit',
    loader: () =>
      import('src/view/livelihoodSurvey/form/LivelihoodSurveyFormPage'),
    permissionRequired: permissions.livelihoodSurveyEdit,
    exact: true,
  },
  {
    path: '/livelihood-survey/:id',
    loader: () =>
      import('src/view/livelihoodSurvey/view/LivelihoodSurveyViewPage'),
    permissionRequired: permissions.livelihoodSurveyRead,
    exact: true,
  },

  {
    path: '/govt-benefits-survey',
    loader: () =>
      import('src/view/govtBenefitsSurvey/list/GovtBenefitsSurveyListPage'),
    permissionRequired: permissions.govtBenefitsSurveyRead,
    exact: true,
  },
  {
    path: '/govt-benefits-survey/new',
    loader: () =>
      import('src/view/govtBenefitsSurvey/form/GovtBenefitsSurveyFormPage'),
    permissionRequired: permissions.govtBenefitsSurveyCreate,
    exact: true,
  },
  {
    path: '/govt-benefits-survey/importer',
    loader: () =>
      import(
        'src/view/govtBenefitsSurvey/importer/GovtBenefitsSurveyImporterPage'
      ),
    permissionRequired: permissions.govtBenefitsSurveyImport,
    exact: true,
  },
  {
    path: '/govt-benefits-survey/:id/edit',
    loader: () =>
      import('src/view/govtBenefitsSurvey/form/GovtBenefitsSurveyFormPage'),
    permissionRequired: permissions.govtBenefitsSurveyEdit,
    exact: true,
  },
  {
    path: '/govt-benefits-survey/:id',
    loader: () =>
      import('src/view/govtBenefitsSurvey/view/GovtBenefitsSurveyViewPage'),
    permissionRequired: permissions.govtBenefitsSurveyRead,
    exact: true,
  },

  {
    path: '/food-security-survey',
    loader: () =>
      import('src/view/foodSecuritySurvey/list/FoodSecuritySurveyListPage'),
    permissionRequired: permissions.foodSecuritySurveyRead,
    exact: true,
  },
  {
    path: '/food-security-survey/new',
    loader: () =>
      import('src/view/foodSecuritySurvey/form/FoodSecuritySurveyFormPage'),
    permissionRequired: permissions.foodSecuritySurveyCreate,
    exact: true,
  },
  {
    path: '/food-security-survey/importer',
    loader: () =>
      import(
        'src/view/foodSecuritySurvey/importer/FoodSecuritySurveyImporterPage'
      ),
    permissionRequired: permissions.foodSecuritySurveyImport,
    exact: true,
  },
  {
    path: '/food-security-survey/:id/edit',
    loader: () =>
      import('src/view/foodSecuritySurvey/form/FoodSecuritySurveyFormPage'),
    permissionRequired: permissions.foodSecuritySurveyEdit,
    exact: true,
  },
  {
    path: '/food-security-survey/:id',
    loader: () =>
      import('src/view/foodSecuritySurvey/view/FoodSecuritySurveyViewPage'),
    permissionRequired: permissions.foodSecuritySurveyRead,
    exact: true,
  },

  {
    path: '/health-survey',
    loader: () =>
      import('src/view/healthSurvey/list/HealthSurveyListPage'),
    permissionRequired: permissions.healthSurveyRead,
    exact: true,
  },
  {
    path: '/health-survey/new',
    loader: () =>
      import('src/view/healthSurvey/form/HealthSurveyFormPage'),
    permissionRequired: permissions.healthSurveyCreate,
    exact: true,
  },
  {
    path: '/health-survey/importer',
    loader: () =>
      import(
        'src/view/healthSurvey/importer/HealthSurveyImporterPage'
      ),
    permissionRequired: permissions.healthSurveyImport,
    exact: true,
  },
  {
    path: '/health-survey/:id/edit',
    loader: () =>
      import('src/view/healthSurvey/form/HealthSurveyFormPage'),
    permissionRequired: permissions.healthSurveyEdit,
    exact: true,
  },
  {
    path: '/health-survey/:id',
    loader: () =>
      import('src/view/healthSurvey/view/HealthSurveyViewPage'),
    permissionRequired: permissions.healthSurveyRead,
    exact: true,
  },

  {
    path: '/chronic-disease-enum',
    loader: () =>
      import('src/view/chronicDiseaseEnum/list/ChronicDiseaseEnumListPage'),
    permissionRequired: permissions.chronicDiseaseEnumRead,
    exact: true,
  },
  {
    path: '/chronic-disease-enum/new',
    loader: () =>
      import('src/view/chronicDiseaseEnum/form/ChronicDiseaseEnumFormPage'),
    permissionRequired: permissions.chronicDiseaseEnumCreate,
    exact: true,
  },
  {
    path: '/chronic-disease-enum/importer',
    loader: () =>
      import(
        'src/view/chronicDiseaseEnum/importer/ChronicDiseaseEnumImporterPage'
      ),
    permissionRequired: permissions.chronicDiseaseEnumImport,
    exact: true,
  },
  {
    path: '/chronic-disease-enum/:id/edit',
    loader: () =>
      import('src/view/chronicDiseaseEnum/form/ChronicDiseaseEnumFormPage'),
    permissionRequired: permissions.chronicDiseaseEnumEdit,
    exact: true,
  },
  {
    path: '/chronic-disease-enum/:id',
    loader: () =>
      import('src/view/chronicDiseaseEnum/view/ChronicDiseaseEnumViewPage'),
    permissionRequired: permissions.chronicDiseaseEnumRead,
    exact: true,
  },

  {
    path: '/municipality-enum',
    loader: () =>
      import('src/view/municipalityEnum/list/MunicipalityEnumListPage'),
    permissionRequired: permissions.municipalityEnumRead,
    exact: true,
  },
  {
    path: '/municipality-enum/new',
    loader: () =>
      import('src/view/municipalityEnum/form/MunicipalityEnumFormPage'),
    permissionRequired: permissions.municipalityEnumCreate,
    exact: true,
  },
  {
    path: '/municipality-enum/importer',
    loader: () =>
      import(
        'src/view/municipalityEnum/importer/MunicipalityEnumImporterPage'
      ),
    permissionRequired: permissions.municipalityEnumImport,
    exact: true,
  },
  {
    path: '/municipality-enum/:id/edit',
    loader: () =>
      import('src/view/municipalityEnum/form/MunicipalityEnumFormPage'),
    permissionRequired: permissions.municipalityEnumEdit,
    exact: true,
  },
  {
    path: '/municipality-enum/:id',
    loader: () =>
      import('src/view/municipalityEnum/view/MunicipalityEnumViewPage'),
    permissionRequired: permissions.municipalityEnumRead,
    exact: true,
  },

  {
    path: '/village-enum',
    loader: () =>
      import('src/view/villageEnum/list/VillageEnumListPage'),
    permissionRequired: permissions.villageEnumRead,
    exact: true,
  },
  {
    path: '/village-enum/new',
    loader: () =>
      import('src/view/villageEnum/form/VillageEnumFormPage'),
    permissionRequired: permissions.villageEnumCreate,
    exact: true,
  },
  {
    path: '/village-enum/importer',
    loader: () =>
      import(
        'src/view/villageEnum/importer/VillageEnumImporterPage'
      ),
    permissionRequired: permissions.villageEnumImport,
    exact: true,
  },
  {
    path: '/village-enum/:id/edit',
    loader: () =>
      import('src/view/villageEnum/form/VillageEnumFormPage'),
    permissionRequired: permissions.villageEnumEdit,
    exact: true,
  },
  {
    path: '/village-enum/:id',
    loader: () =>
      import('src/view/villageEnum/view/VillageEnumViewPage'),
    permissionRequired: permissions.villageEnumRead,
    exact: true,
  },

  {
    path: '/gram-panchayat-enum',
    loader: () =>
      import('src/view/gramPanchayatEnum/list/GramPanchayatEnumListPage'),
    permissionRequired: permissions.gramPanchayatEnumRead,
    exact: true,
  },
  {
    path: '/gram-panchayat-enum/new',
    loader: () =>
      import('src/view/gramPanchayatEnum/form/GramPanchayatEnumFormPage'),
    permissionRequired: permissions.gramPanchayatEnumCreate,
    exact: true,
  },
  {
    path: '/gram-panchayat-enum/importer',
    loader: () =>
      import(
        'src/view/gramPanchayatEnum/importer/GramPanchayatEnumImporterPage'
      ),
    permissionRequired: permissions.gramPanchayatEnumImport,
    exact: true,
  },
  {
    path: '/gram-panchayat-enum/:id/edit',
    loader: () =>
      import('src/view/gramPanchayatEnum/form/GramPanchayatEnumFormPage'),
    permissionRequired: permissions.gramPanchayatEnumEdit,
    exact: true,
  },
  {
    path: '/gram-panchayat-enum/:id',
    loader: () =>
      import('src/view/gramPanchayatEnum/view/GramPanchayatEnumViewPage'),
    permissionRequired: permissions.gramPanchayatEnumRead,
    exact: true,
  },

  {
    path: '/district-enum',
    loader: () =>
      import('src/view/districtEnum/list/DistrictEnumListPage'),
    permissionRequired: permissions.districtEnumRead,
    exact: true,
  },
  {
    path: '/district-enum/new',
    loader: () =>
      import('src/view/districtEnum/form/DistrictEnumFormPage'),
    permissionRequired: permissions.districtEnumCreate,
    exact: true,
  },
  {
    path: '/district-enum/importer',
    loader: () =>
      import(
        'src/view/districtEnum/importer/DistrictEnumImporterPage'
      ),
    permissionRequired: permissions.districtEnumImport,
    exact: true,
  },
  {
    path: '/district-enum/:id/edit',
    loader: () =>
      import('src/view/districtEnum/form/DistrictEnumFormPage'),
    permissionRequired: permissions.districtEnumEdit,
    exact: true,
  },
  {
    path: '/district-enum/:id',
    loader: () =>
      import('src/view/districtEnum/view/DistrictEnumViewPage'),
    permissionRequired: permissions.districtEnumRead,
    exact: true,
  },
].filter(Boolean);

const publicRoutes = [
  {
    path: '/auth/signin',
    loader: () => import('src/view/auth/SigninPage'),
  },
  {
    path: '/auth/signup',
    loader: () => import('src/view/auth/SignupPage'),
  },
  {
    path: '/auth/forgot-password',
    loader: () =>
      import('src/view/auth/ForgotPasswordPage'),
  },
].filter(Boolean);

const emptyTenantRoutes = [
  {
    path: '/auth/tenant',
    loader: () => import('src/view/auth/TenantPage'),
  },
].filter(Boolean);

const emptyPermissionsRoutes = [
  {
    path: '/auth/empty-permissions',
    loader: () =>
      import('src/view/auth/EmptyPermissionsPage'),
  },
].filter(Boolean);

const emailUnverifiedRoutes = [
  {
    path: '/auth/email-unverified',
    loader: () =>
      import('src/view/auth/EmailUnverifiedPage'),
  },
].filter(Boolean);

const simpleRoutes = [
  {
    path: '/auth/password-reset',
    loader: () => import('src/view/auth/PasswordResetPage'),
  },
  {
    path: '/auth/invitation',
    loader: () => import('src/view/auth/InvitationPage'),
  },
  {
    path: '/auth/verify-email',
    loader: () => import('src/view/auth/VerifyEmailPage'),
  },
  {
    path: '/403',
    loader: () =>
      import('src/view/shared/errors/Error403Page'),
  },
  {
    path: '/500',
    loader: () =>
      import('src/view/shared/errors/Error500Page'),
  },
  {
    path: '**',
    loader: () =>
      import('src/view/shared/errors/Error404Page'),
  },
].filter(Boolean);

export default {
  privateRoutes,
  publicRoutes,
  emptyTenantRoutes,
  emptyPermissionsRoutes,
  emailUnverifiedRoutes,
  simpleRoutes,
};
