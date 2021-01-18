import { connectRouter } from 'connected-react-router';
import layout from 'src/modules/layout/layoutReducers';
import auth from 'src/modules/auth/authReducers';
import tenant from 'src/modules/tenant/tenantReducers';
import plan from 'src/modules/plan/planReducers';
import user from 'src/modules/user/userReducers';
import auditLog from 'src/modules/auditLog/auditLogReducers';
import settings from 'src/modules/settings/settingsReducers';
import person from 'src/modules/person/personReducers';
import household from 'src/modules/household/householdReducers';
import homeSurvey from 'src/modules/homeSurvey/homeSurveyReducers';
import livelihoodSurvey from 'src/modules/livelihoodSurvey/livelihoodSurveyReducers';
import govtBenefitsSurvey from 'src/modules/govtBenefitsSurvey/govtBenefitsSurveyReducers';
import foodSecuritySurvey from 'src/modules/foodSecuritySurvey/foodSecuritySurveyReducers';
import healthSurvey from 'src/modules/healthSurvey/healthSurveyReducers';
import chronicDiseaseEnum from 'src/modules/chronicDiseaseEnum/chronicDiseaseEnumReducers';
import municipalityEnum from 'src/modules/municipalityEnum/municipalityEnumReducers';
import villageEnum from 'src/modules/villageEnum/villageEnumReducers';
import gramPanchayatEnum from 'src/modules/gramPanchayatEnum/gramPanchayatEnumReducers';
import districtEnum from 'src/modules/districtEnum/districtEnumReducers';
import { combineReducers } from 'redux';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    layout,
    auth,
    tenant,
    plan,
    user,
    auditLog,
    settings,
    person,
    household,
    homeSurvey,
    livelihoodSurvey,
    govtBenefitsSurvey,
    foodSecuritySurvey,
    healthSurvey,
    chronicDiseaseEnum,
    municipalityEnum,
    villageEnum,
    gramPanchayatEnum,
    districtEnum,
  });
