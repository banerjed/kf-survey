const en = {
  common: {
    or: 'or',
    cancel: 'Cancel',
    reset: 'Reset',
    save: 'Save',
    search: 'Search',
    edit: 'Edit',
    new: 'New',
    export: 'Export to Excel',
    noDataToExport: 'No data to export',
    import: 'Import',
    discard: 'Discard',
    yes: 'Yes',
    no: 'No',
    pause: 'Pause',
    areYouSure: 'Are you sure?',
    view: 'View',
    destroy: 'Delete',
    mustSelectARow: 'Must select a row',
    start: 'Start',
    end: 'End',
    select: 'Select',
    continue: 'Continue',
    filters: 'Filters',
  },

  app: {
    title: 'Application',
  },

  entities: {
    person: {
        name: 'person',
        label: 'People',
        menu: 'People',
        exporterFileName: 'person_export',
        list: {
          menu: 'People',
          title: 'People',
        },
        create: {
          success: 'Person successfully saved',
        },
        update: {
          success: 'Person successfully saved',
        },
        destroy: {
          success: 'Person successfully deleted',
        },
        destroyAll: {
          success: 'Person(s) successfully deleted',
        },
        edit: {
          title: 'Edit Person',
        },
        fields: {
          id: 'Id',
          'firstName': 'First Name',
          'middleName': 'Middle Name',
          'lastName': 'LastName',
          'fullName': 'Full Name',
          'gender': 'Gender',
          'ageRange': 'Age',
          'age': 'Age',
          'dateOfBirthRange': 'Date Of Birth',
          'dateOfBirth': 'Date Of Birth',
          'roleInHousehold': 'Role In Household',
          'livesAwayFromHome': 'Lives Away From Home',
          'isHeadOfHousehold': 'HeadOfHousehold',
          'aadharNumber': 'Aadhar Card Number',
          'mobileNumber': 'Mobile Phone Number',
          'educationLevel': 'EducationLevel',
          'primaryJob': 'Primary Livelihood',
          'alternateLivelihood': 'Alternate Livelihood',
          'household': 'Household',
          'picture': 'Picture',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'gender': {
            'Male': 'Male',
            'Female': 'Female',
          },
          'roleInHousehold': {
            'Son': 'Son',
            'Daughter': 'Daughter',
            'Father': 'Father',
            'Mother': 'Mother',
            'Kaka': 'Kaka',
            'Mama': 'Mama',
            'Kaki': 'Kaki',
            'Mami': 'Mami',
            'Mashi': 'Mashi',
            'Mesho': 'Mesho',
            'Chacha': 'Chacha',
            'Chachi': 'Chachi',
            'Dadu': 'Dadu',
            'Dida': 'Dida',
            'Thakurda': 'Thakurda',
            'Thakuma': 'Thakuma',
            'Cousin': 'Cousin',
            'Other': 'Other',
          },
          'educationLevel': {
            'PrimarySchool': 'PrimarySchool',
            'MiddleSchool': 'MiddleSchool',
            'SecondarySchool': 'SecondarySchool',
            'HigherSecondary': 'HigherSecondary',
            'College': 'College',
            'Other': 'Other',
          },
          'primaryJob': {
            'Student': 'Student',
            'Housewife': 'Housewife',
            'Farmer': 'Farmer',
            'ConstructionLaborer': 'ConstructionLaborer',
            'HouseMaid': 'HouseMaid',
            'Other': 'Other',
          },
          'alternateLivelihood': {
            'Student': 'Student',
            'Housewife': 'Housewife',
            'Farmer': 'Farmer',
            'Construction': 'Construction',
            'Fishing': 'Fishing',
            'Other': 'Other',
          },
        },
        new: {
          title: 'New Person',
        },
        view: {
          title: 'View Person',
        },
        importer: {
          title: 'Import People',
          fileName: 'person_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    household: {
        name: 'household',
        label: 'Households',
        menu: 'Households',
        exporterFileName: 'household_export',
        list: {
          menu: 'Households',
          title: 'Households',
        },
        create: {
          success: 'Household successfully saved',
        },
        update: {
          success: 'Household successfully saved',
        },
        destroy: {
          success: 'Household successfully deleted',
        },
        destroyAll: {
          success: 'Household(s) successfully deleted',
        },
        edit: {
          title: 'Edit Household',
        },
        fields: {
          id: 'Id',
          'householdName': 'Household Full Name',
          'address': 'Address',
          'members': 'Members',
          'village': 'Village',
          'gramPanchayat': 'Gram Panchayat',
          'municipality': 'Municipality',
          'district': 'District',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        new: {
          title: 'New Household',
        },
        view: {
          title: 'View Household',
        },
        importer: {
          title: 'Import Households',
          fileName: 'household_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    homeSurvey: {
        name: 'homeSurvey',
        label: 'HomeSurveys',
        menu: 'HomeSurveys',
        exporterFileName: 'homeSurvey_export',
        list: {
          menu: 'HomeSurveys',
          title: 'HomeSurveys',
        },
        create: {
          success: 'Home Survey successfully saved',
        },
        update: {
          success: 'Home Survey successfully saved',
        },
        destroy: {
          success: 'Home Survey successfully deleted',
        },
        destroyAll: {
          success: 'Home Survey(s) successfully deleted',
        },
        edit: {
          title: 'Edit Home Survey',
        },
        fields: {
          id: 'Id',
          'household': 'Household',
          'surveyDateRange': 'Survey Date',
          'surveyDate': 'Survey Date',
          'homeType': 'HomeType',
          'roofType': 'Roof Type',
          'houseAreaRange': 'House Area (sq-ft)',
          'houseArea': 'House Area (sq-ft)',
          'numberOfRoomsRange': 'Number Of Rooms',
          'numberOfRooms': 'Number Of Rooms',
          'hasElectricity': 'Has Electricity',
          'hasSanitation': 'Has Sanitation',
          'sourceOfDrinkingWater': 'SourceOfDrinkingWater',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'homeType': {
            'Kacha_Bari': 'Kacha_Bari',
            'OneStory_PuccaHouse': 'OneStory_PuccaHouse',
            'TwoStory_PuccaHouse': 'TwoStory_PuccaHouse',
            'ThreeStory_PuccaHouse': 'ThreeStory_PuccaHouse',
            'Other': 'Other',
          },
          'roofType': {
            'Concrete': 'Concrete',
            'Asbestos': 'Asbestos',
            'Tiles': 'Tiles',
            'Khorer_Chaal': 'Khorer_Chaal',
            'Other': 'Other',
          },
          'sourceOfDrinkingWater': {
            'Tubewell': 'Tubewell',
            'Well': 'Well',
            'Pond': 'Pond',
            'Tap': 'Tap',
            'Other': 'Other',
          },
        },
        new: {
          title: 'New Home Survey',
        },
        view: {
          title: 'View Home Survey',
        },
        importer: {
          title: 'Import HomeSurveys',
          fileName: 'homeSurvey_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    livelihoodSurvey: {
        name: 'livelihoodSurvey',
        label: 'LivelihoodSurveys',
        menu: 'LivelihoodSurveys',
        exporterFileName: 'livelihoodSurvey_export',
        list: {
          menu: 'LivelihoodSurveys',
          title: 'LivelihoodSurveys',
        },
        create: {
          success: 'Livelihood Survey successfully saved',
        },
        update: {
          success: 'Livelihood Survey successfully saved',
        },
        destroy: {
          success: 'Livelihood Survey successfully deleted',
        },
        destroyAll: {
          success: 'Livelihood Survey(s) successfully deleted',
        },
        edit: {
          title: 'Edit Livelihood Survey',
        },
        fields: {
          id: 'Id',
          'household': 'Household',
          'surveyDateRange': 'Survey Date',
          'surveyDate': 'Survey Date',
          'annualHouseholdIncomeRange': 'Annual Household Income',
          'annualHouseholdIncome': 'Annual Household Income',
          'sizeOfFarmRange': 'Size Of Farm (acres)',
          'sizeOfFarm': 'Size Of Farm (acres)',
          'sizeOfPondRange': 'Size Of Pond',
          'sizeOfPond': 'Size Of Pond',
          'whatIsFarmed': 'What Is Farmed',
          'doesFishing': 'Does Fishing',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        new: {
          title: 'New Livelihood Survey',
        },
        view: {
          title: 'View Livelihood Survey',
        },
        importer: {
          title: 'Import LivelihoodSurveys',
          fileName: 'livelihoodSurvey_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    govtBenefitsSurvey: {
        name: 'govtBenefitsSurvey',
        label: 'GovtBenefitsSurveys',
        menu: 'GovtBenefitsSurveys',
        exporterFileName: 'govtBenefitsSurvey_export',
        list: {
          menu: 'GovtBenefitsSurveys',
          title: 'GovtBenefitsSurveys',
        },
        create: {
          success: 'GovtBenefitsSurvey successfully saved',
        },
        update: {
          success: 'GovtBenefitsSurvey successfully saved',
        },
        destroy: {
          success: 'GovtBenefitsSurvey successfully deleted',
        },
        destroyAll: {
          success: 'GovtBenefitsSurvey(s) successfully deleted',
        },
        edit: {
          title: 'Edit GovtBenefitsSurvey',
        },
        fields: {
          id: 'Id',
          'person': 'Person',
          'surveyDateRange': 'Survey Date',
          'surveyDate': 'Survey Date',
          'hasKanyashri': 'Has Kanyashri',
          'hasPmAwasYojana': 'HasPmAwasYojana',
          'hasChiefMinisterRelief': 'Got Chief Minister Relief Fund',
          'hasSwasthyaSathi': 'HasSwasthyaSathi',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        new: {
          title: 'New GovtBenefitsSurvey',
        },
        view: {
          title: 'View GovtBenefitsSurvey',
        },
        importer: {
          title: 'Import GovtBenefitsSurveys',
          fileName: 'govtBenefitsSurvey_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    foodSecuritySurvey: {
        name: 'foodSecuritySurvey',
        label: 'Food Security Surveys',
        menu: 'Food Security Surveys',
        exporterFileName: 'foodSecuritySurvey_export',
        list: {
          menu: 'Food Security Surveys',
          title: 'Food Security Surveys',
        },
        create: {
          success: 'Food Security Survey successfully saved',
        },
        update: {
          success: 'Food Security Survey successfully saved',
        },
        destroy: {
          success: 'Food Security Survey successfully deleted',
        },
        destroyAll: {
          success: 'Food Security Survey(s) successfully deleted',
        },
        edit: {
          title: 'Edit Food Security Survey',
        },
        fields: {
          id: 'Id',
          'household': 'Household',
          'surveyDateRange': 'Survey Date',
          'surveyDate': 'Survey Date',
          'enoughToEat': 'EnoughToEat',
          'proteinSource': 'Protein Source',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'enoughToEat': {
            'OneMealPerDay': 'OneMealPerDay',
            'TwoMealsPerDay': 'TwoMealsPerDay',
            'ThreeMealsPerDay': 'ThreeMealsPerDay',
            'FourMealsPerDay': 'FourMealsPerDay',
          },
          'proteinSource': {
            'Eggs': 'Eggs',
            'Chicken': 'Chicken',
            'Fish': 'Fish',
            'Meat': 'Meat',
            'Soyabean': 'Soyabean',
          },
        },
        new: {
          title: 'New Food Security Survey',
        },
        view: {
          title: 'View Food Security Survey',
        },
        importer: {
          title: 'Import Food Security Surveys',
          fileName: 'foodSecuritySurvey_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    healthSurvey: {
        name: 'healthSurvey',
        label: 'HealthSurveys',
        menu: 'HealthSurveys',
        exporterFileName: 'healthSurvey_export',
        list: {
          menu: 'HealthSurveys',
          title: 'HealthSurveys',
        },
        create: {
          success: 'HealthSurvey successfully saved',
        },
        update: {
          success: 'HealthSurvey successfully saved',
        },
        destroy: {
          success: 'HealthSurvey successfully deleted',
        },
        destroyAll: {
          success: 'HealthSurvey(s) successfully deleted',
        },
        edit: {
          title: 'Edit HealthSurvey',
        },
        fields: {
          id: 'Id',
          'person': 'Person',
          'surveyDateRange': 'SurveyDate',
          'surveyDate': 'SurveyDate',
          'healthCondition': 'HealthCondition',
          'weightRange': 'Weight',
          'weight': 'Weight',
          'heightRange': 'Height',
          'height': 'Height',
          'heartRate': 'HeartRate (Systolic / Diastolic)',
          'pulseRateRange': 'PulseRate',
          'pulseRate': 'PulseRate',
          'bloodOxygenLevel': 'BloodOxygenLevel',
          'picture': 'Picture',
          'smoking': 'Smoking',
          'smokingFrequency': 'Smoking Frequency',
          'drinking': 'Drinking',
          'substanceAbuse': 'Substance (Drug) Abuse',
          'chronicDisease1': 'Chronic Disease #1',
          'chronicDisease2': 'Chronic Disease #2',
          'chronicDisease3': 'ChronicDisease #3',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'healthCondition': {
            'Healthy': 'Healthy',
            'Sickly': 'Sickly',
            'VerySickly': 'VerySickly',
            'Underweight': 'Underweight',
            'Anaemic': 'Anaemic',
          },
          'smoking': {
            'None': 'None',
            'Ganja': 'Ganja',
            'Bidi': 'Bidi',
            'Cigarette': 'Cigarette',
          },
          'drinking': {
            'Occasional': 'Occasional',
            'Daily': 'Daily',
            'FewDaysPerWeek': 'FewDaysPerWeek',
          },
          'substanceAbuse': {
            'None': 'None',
            'Drugs': 'Drugs',
            'Ganja': 'Ganja',
          },
        },
        new: {
          title: 'New HealthSurvey',
        },
        view: {
          title: 'View HealthSurvey',
        },
        importer: {
          title: 'Import HealthSurveys',
          fileName: 'healthSurvey_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    chronicDiseaseEnum: {
        name: 'chronicDiseaseEnum',
        label: 'ChronicDiseaseEnums',
        menu: 'ChronicDiseaseEnums',
        exporterFileName: 'chronicDiseaseEnum_export',
        list: {
          menu: 'ChronicDiseaseEnums',
          title: 'ChronicDiseaseEnums',
        },
        create: {
          success: 'Chronic Diseases successfully saved',
        },
        update: {
          success: 'Chronic Diseases successfully saved',
        },
        destroy: {
          success: 'Chronic Diseases successfully deleted',
        },
        destroyAll: {
          success: 'Chronic Diseases(s) successfully deleted',
        },
        edit: {
          title: 'Edit Chronic Diseases',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        new: {
          title: 'New Chronic Diseases',
        },
        view: {
          title: 'View Chronic Diseases',
        },
        importer: {
          title: 'Import ChronicDiseaseEnums',
          fileName: 'chronicDiseaseEnum_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    municipalityEnum: {
        name: 'municipalityEnum',
        label: 'MunicipalityEnums',
        menu: 'MunicipalityEnums',
        exporterFileName: 'municipalityEnum_export',
        list: {
          menu: 'MunicipalityEnums',
          title: 'MunicipalityEnums',
        },
        create: {
          success: 'Municipality Enum successfully saved',
        },
        update: {
          success: 'Municipality Enum successfully saved',
        },
        destroy: {
          success: 'Municipality Enum successfully deleted',
        },
        destroyAll: {
          success: 'Municipality Enum(s) successfully deleted',
        },
        edit: {
          title: 'Edit Municipality Enum',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        new: {
          title: 'New Municipality Enum',
        },
        view: {
          title: 'View Municipality Enum',
        },
        importer: {
          title: 'Import MunicipalityEnums',
          fileName: 'municipalityEnum_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    villageEnum: {
        name: 'villageEnum',
        label: 'VillageEnums',
        menu: 'VillageEnums',
        exporterFileName: 'villageEnum_export',
        list: {
          menu: 'VillageEnums',
          title: 'VillageEnums',
        },
        create: {
          success: 'VillageEnum successfully saved',
        },
        update: {
          success: 'VillageEnum successfully saved',
        },
        destroy: {
          success: 'VillageEnum successfully deleted',
        },
        destroyAll: {
          success: 'VillageEnum(s) successfully deleted',
        },
        edit: {
          title: 'Edit VillageEnum',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        new: {
          title: 'New VillageEnum',
        },
        view: {
          title: 'View VillageEnum',
        },
        importer: {
          title: 'Import VillageEnums',
          fileName: 'villageEnum_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    gramPanchayatEnum: {
        name: 'gramPanchayatEnum',
        label: 'GramPanchayatEnums',
        menu: 'GramPanchayatEnums',
        exporterFileName: 'gramPanchayatEnum_export',
        list: {
          menu: 'GramPanchayatEnums',
          title: 'GramPanchayatEnums',
        },
        create: {
          success: 'Gram Panchayat  successfully saved',
        },
        update: {
          success: 'Gram Panchayat  successfully saved',
        },
        destroy: {
          success: 'Gram Panchayat  successfully deleted',
        },
        destroyAll: {
          success: 'Gram Panchayat (s) successfully deleted',
        },
        edit: {
          title: 'Edit Gram Panchayat ',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        new: {
          title: 'New Gram Panchayat ',
        },
        view: {
          title: 'View Gram Panchayat ',
        },
        importer: {
          title: 'Import GramPanchayatEnums',
          fileName: 'gramPanchayatEnum_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    districtEnum: {
        name: 'districtEnum',
        label: 'DistrictEnums',
        menu: 'DistrictEnums',
        exporterFileName: 'districtEnum_export',
        list: {
          menu: 'DistrictEnums',
          title: 'DistrictEnums',
        },
        create: {
          success: 'DistrictEnum successfully saved',
        },
        update: {
          success: 'DistrictEnum successfully saved',
        },
        destroy: {
          success: 'DistrictEnum successfully deleted',
        },
        destroyAll: {
          success: 'DistrictEnum(s) successfully deleted',
        },
        edit: {
          title: 'Edit DistrictEnum',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        new: {
          title: 'New DistrictEnum',
        },
        view: {
          title: 'View DistrictEnum',
        },
        importer: {
          title: 'Import DistrictEnums',
          fileName: 'districtEnum_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },
  },

  auth: {
    tenants: 'Workspaces',
    profile: {
      title: 'Profile',
      success: 'Profile successfully updated',
    },
    createAnAccount: 'Create an account',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot password',
    signin: 'Sign in',
    signup: 'Sign up',
    signout: 'Sign out',
    alreadyHaveAnAccount:
      'Already have an account? Sign in.',
    signinWithAnotherAccount:
      'Sign in with another account',
    emailUnverified: {
      message: `Please confirm your email at <strong>{0}</strong> to continue.`,
      submit: `Resend email verification`,
    },
    emptyPermissions: {
      message: `You have no permissions yet. Wait for the admin to grant you privileges.`,
    },
    passwordResetEmail: {
      message: 'Send password reset email',
      error: `Email not recognized`,
    },
    passwordReset: {
      message: 'Reset password',
    },
    passwordChange: {
      title: 'Change Password',
      success: 'Password successfully changed',
      mustMatch: 'Passwords must match',
    },
    emailAddressVerificationEmail: {
      error: `Email not recognized`,
    },
    verificationEmailSuccess: `Verification email successfully sent`,
    passwordResetEmailSuccess: `Password reset email successfully sent`,
    passwordResetSuccess: `Password successfully changed`,
    verifyEmail: {
      success: 'Email successfully verified.',
      message:
        'Just a moment, your email is being verified...',
    },
  },

  roles: {
    admin: {
      label: 'Admin',
      description: 'Full access to all resources',
    },
    custom: {
      label: 'Custom Role',
      description: 'Custom role access',
    },
  },

  user: {
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Name',
      firstName: 'First Name',
      lastName: 'Last Name',
      status: 'Status',
      phoneNumber: 'Phone Number',
      role: 'Role',
      createdAt: 'Created at',
      updatedAt: 'Updated at',
      roleUser: 'Role/User',
      roles: 'Roles',
      createdAtRange: 'Created at',
      password: 'Password',
      oldPassword: 'Old Password',
      newPassword: 'New Password',
      newPasswordConfirmation: 'New Password Confirmation',
      rememberMe: 'Remember me',
    },
    status: {
      active: 'Active',
      invited: 'Invited',
      'empty-permissions': 'Waiting for Permissions',
    },
    invite: 'Invite',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} is invalid',
    },
    title: 'Users',
    menu: 'Users',
    doAddSuccess: 'User(s) successfully saved',
    doUpdateSuccess: 'User successfully saved',
    exporterFileName: 'users_export',
    doDestroySuccess: 'User successfully deleted',
    doDestroyAllSelectedSuccess:
      'Users successfully deleted',
    edit: {
      title: 'Edit User',
    },
    new: {
      title: 'Invite User(s)',
      titleModal: 'Invite User',
      emailsHint:
        'Separate multiple email addresses using the comma character.',
    },
    view: {
      title: 'View User',
      activity: 'Activity',
    },
    importer: {
      title: 'Import Users',
      fileName: 'users_import_template',
      hint:
        'Files/Images columns must be the URLs of the files separated by space. Relationships must be the ID of the referenced records separated by space. Roles must be the role ids separated by space.',
    },
    errors: {
      userAlreadyExists:
        'User with this email already exists',
      userNotFound: 'User not found',
      revokingOwnPermission: `You can't revoke your own admin permission`,
    },
  },

  tenant: {
    name: 'tenant',
    label: 'Workspaces',
    menu: 'Workspaces',
    list: {
      menu: 'Workspaces',
      title: 'Workspaces',
    },
    create: {
      button: 'Create Workspace',
      success: 'Workspace successfully saved',
    },
    update: {
      success: 'Workspace successfully saved',
    },
    destroy: {
      success: 'Workspace successfully deleted',
    },
    destroyAll: {
      success: 'Workspace(s) successfully deleted',
    },
    edit: {
      title: 'Edit Workspace',
    },
    fields: {
      id: 'Id',
      name: 'Name',
      url: 'URL',
      tenantName: 'Workspace Name',
      tenantId: 'Workspace',
      tenantUrl: 'Workspace URL',
      plan: 'Plan',
    },
    enumerators: {},
    new: {
      title: 'New Workspace',
    },
    invitation: {
      view: 'View Invitations',
      invited: 'Invited',
      accept: 'Accept Invitation',
      decline: 'Decline Invitation',
      declined: 'Invitation successfully declined',
      acceptWrongEmail: 'Accept Invitation With This Email',
    },
    select: 'Select Workspace',
    validation: {
      url:
        'Your workspace URL can only contain lowercase letters, numbers and dashes (and must start with a letter or number).',
    },
  },

  plan: {
    menu: 'Plans',
    title: 'Plans',

    free: {
      label: 'Free',
      price: '$0',
    },
    growth: {
      label: 'Growth',
      price: '$10',
    },
    enterprise: {
      label: 'Enterprise',
      price: '$50',
    },

    pricingPeriod: '/month',
    current: 'Current Plan',
    subscribe: 'Subscribe',
    manage: 'Manage Subscription',
    cancelAtPeriodEnd:
      'This plan will be canceled at the end of the period.',
    somethingWrong:
      'There is something wrong with your subscription. Please go to manage subscription for more details.',
    notPlanUser: `You are not the manager of this subscription.`,
  },

  auditLog: {
    menu: 'Audit Logs',
    title: 'Audit Logs',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Separate multiple entities using the comma character.',
    fields: {
      id: 'Id',
      timestampRange: 'Period',
      entityName: 'Entity',
      entityNames: 'Entities',
      entityId: 'Entity ID',
      action: 'Action',
      values: 'Values',
      timestamp: 'Date',
      createdByEmail: 'User Email',
    },
  },
  settings: {
    title: 'Settings',
    menu: 'Settings',
    save: {
      success:
        'Settings successfully saved. The page will reload in {0} seconds for changes to take effect.',
    },
    fields: {
      primary: 'Primary Color',
      secondary: 'Secondary Color',
      logos: 'Logo',
      backgroundImages: 'Background Images',
      shade: 'Shade',
    },
  },
  dashboard: {
    menu: 'Dashboard',
    message: `This page uses fake data for demonstration purposes only. You can edit it at frontend/view/dashboard/DashboardPage.ts.`,
    charts: {
      day: 'Day',
      red: 'Red',
      green: 'Green',
      yellow: 'Yellow',
      grey: 'Grey',
      blue: 'Blue',
      orange: 'Orange',
      months: {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
      },
      eating: 'Eating',
      drinking: 'Drinking',
      sleeping: 'Sleeping',
      designing: 'Designing',
      coding: 'Coding',
      cycling: 'Cycling',
      running: 'Running',
      customer: 'Customer',
    },
  },
  errors: {
    backToHome: 'Back to home',
    403: `Sorry, you don't have access to this page`,
    404: 'Sorry, the page you visited does not exist',
    500: 'Sorry, the server is reporting an error',
    429: 'Too many requests. Please try again later.',
    forbidden: {
      message: 'Forbidden',
    },
    validation: {
      message: 'An error occurred',
    },
    defaultErrorMessage: 'Ops, an error occurred',
  },
  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} is invalid',
      required: '${path} is required',
      oneOf:
        '${path} must be one of the following values: ${values}',
      notOneOf:
        '${path} must not be one of the following values: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} must be a ${type}`;
      },
    },
    string: {
      length:
        '${path} must be exactly ${length} characters',
      min: '${path} must be at least ${min} characters',
      max: '${path} must be at most ${max} characters',
      matches:
        '${path} must match the following: "${regex}"',
      email: '${path} must be a valid email',
      url: '${path} must be a valid URL',
      trim: '${path} must be a trimmed string',
      lowercase: '${path} must be a lowercase string',
      uppercase: '${path} must be a upper case string',
      selected: '${path} must be selected',
    },
    number: {
      min:
        '${path} must be greater than or equal to ${min}',
      max: '${path} must be less than or equal to ${max}',
      lessThan: '${path} must be less than ${less}',
      moreThan: '${path} must be greater than ${more}',
      notEqual: '${path} must be not equal to ${notEqual}',
      positive: '${path} must be a positive number',
      negative: '${path} must be a negative number',
      integer: '${path} must be an integer',
    },
    date: {
      min: '${path} field must be later than ${min}',
      max: '${path} field must be at earlier than ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} field cannot have keys not specified in the object shape',
    },
    array: {
      min: ({ min, path }) =>
        min === 1
          ? `${path} is required`
          : `${path} field must have at least ${min} items`,
      max:
        '${path} field must have less than or equal to ${max} items',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'You must upload an image',
    size: 'File is too big. Max allowed size is {0}',
    formats: `Invalid format. Must be one of: {0}.`,
  },
  importer: {
    line: 'Line',
    status: 'Status',
    pending: 'Pending',
    imported: 'Imported',
    error: 'Error',
    total: `{0} imported, {1} pending and {2} with error`,
    importedMessage: `Processed {0} of {1}.`,
    noNavigateAwayMessage:
      'Do not navigate away from this page or import will be stopped.',
    completed: {
      success:
        'Import completed. All rows were successfully imported.',
      someErrors:
        'Processing completed, but some rows were unable to be imported.',
      allErrors: 'Import failed. There are no valid rows.',
    },
    form: {
      downloadTemplate: 'Download the template',
      hint:
        'Click or drag the file to this area to continue',
    },
    list: {
      discardConfirm:
        'Are you sure? Non-imported data will be lost.',
    },
    errors: {
      invalidFileEmpty: 'The file is empty',
      invalidFileExcel:
        'Only excel (.xlsx) files are allowed',
      invalidFileUpload:
        'Invalid file. Make sure you are using the last version of the template.',
      importHashRequired: 'Import hash is required',
      importHashExistent: 'Data has already been imported',
    },
  },

  autocomplete: {
    loading: 'Loading...',
    noOptions: 'No data found',
  },

  imagesViewer: {
    noImage: 'No image',
  },

  table: {
    noData: 'No records found',
    loading: 'Loading...',
  },

  pagination: {
    labelDisplayedRows: '{0}-{1} of {2}',
    labelRowsPerPage: 'Per page:',
  },
};

export default en;
