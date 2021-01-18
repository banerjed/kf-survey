const es = {
  common: {
    or: 'o',
    cancel: 'Cancelar',
    reset: 'Reiniciar',
    save: 'Guardar',
    search: 'Buscar',
    edit: 'Editar',
    remove: 'Eliminar',
    new: 'Nuevo',
    export: 'Exportar a Excel',
    noDataToExport: 'No hay datos para exportar',
    import: 'Importar',
    discard: 'Descartar',
    yes: 'Si',
    no: 'No',
    pause: 'Pausa',
    areYouSure: '¿Estás seguro?',
    view: 'Ver',
    destroy: 'Eliminar',
    mustSelectARow: 'Debe seleccionar una fila',
    start: 'Comienzo',
    end: 'Final',
    select: 'Seleccione',
    continue: 'Continúa',
    filters: 'Filtros',
  },
  app: {
    title: 'Aplicación',
  },
  entities: {
    person: {
        name: 'person',
        label: 'People',
        menu: 'People',
        exporterFileName: 'exportacion_person',
        list: {
          menu: 'People',
          title: 'People',
        },
        create: {
          success: 'Person guardado con éxito',
        },
        update: {
          success: 'Person guardado con éxito',
        },
        destroy: {
          success: 'Person eliminado con éxito',
        },
        destroyAll: {
          success: 'Person(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Person',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo Person',
        },
        view: {
          title: 'Ver Person',
        },
        importer: {
          title: 'Importar People',
          fileName: 'person_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    household: {
        name: 'household',
        label: 'Households',
        menu: 'Households',
        exporterFileName: 'exportacion_household',
        list: {
          menu: 'Households',
          title: 'Households',
        },
        create: {
          success: 'Household guardado con éxito',
        },
        update: {
          success: 'Household guardado con éxito',
        },
        destroy: {
          success: 'Household eliminado con éxito',
        },
        destroyAll: {
          success: 'Household(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Household',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        new: {
          title: 'Nuevo Household',
        },
        view: {
          title: 'Ver Household',
        },
        importer: {
          title: 'Importar Households',
          fileName: 'household_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    homeSurvey: {
        name: 'homeSurvey',
        label: 'HomeSurveys',
        menu: 'HomeSurveys',
        exporterFileName: 'exportacion_homeSurvey',
        list: {
          menu: 'HomeSurveys',
          title: 'HomeSurveys',
        },
        create: {
          success: 'Home Survey guardado con éxito',
        },
        update: {
          success: 'Home Survey guardado con éxito',
        },
        destroy: {
          success: 'Home Survey eliminado con éxito',
        },
        destroyAll: {
          success: 'Home Survey(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Home Survey',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo Home Survey',
        },
        view: {
          title: 'Ver Home Survey',
        },
        importer: {
          title: 'Importar HomeSurveys',
          fileName: 'homeSurvey_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    livelihoodSurvey: {
        name: 'livelihoodSurvey',
        label: 'LivelihoodSurveys',
        menu: 'LivelihoodSurveys',
        exporterFileName: 'exportacion_livelihoodSurvey',
        list: {
          menu: 'LivelihoodSurveys',
          title: 'LivelihoodSurveys',
        },
        create: {
          success: 'Livelihood Survey guardado con éxito',
        },
        update: {
          success: 'Livelihood Survey guardado con éxito',
        },
        destroy: {
          success: 'Livelihood Survey eliminado con éxito',
        },
        destroyAll: {
          success: 'Livelihood Survey(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Livelihood Survey',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        new: {
          title: 'Nuevo Livelihood Survey',
        },
        view: {
          title: 'Ver Livelihood Survey',
        },
        importer: {
          title: 'Importar LivelihoodSurveys',
          fileName: 'livelihoodSurvey_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    govtBenefitsSurvey: {
        name: 'govtBenefitsSurvey',
        label: 'GovtBenefitsSurveys',
        menu: 'GovtBenefitsSurveys',
        exporterFileName: 'exportacion_govtBenefitsSurvey',
        list: {
          menu: 'GovtBenefitsSurveys',
          title: 'GovtBenefitsSurveys',
        },
        create: {
          success: 'GovtBenefitsSurvey guardado con éxito',
        },
        update: {
          success: 'GovtBenefitsSurvey guardado con éxito',
        },
        destroy: {
          success: 'GovtBenefitsSurvey eliminado con éxito',
        },
        destroyAll: {
          success: 'GovtBenefitsSurvey(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar GovtBenefitsSurvey',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        new: {
          title: 'Nuevo GovtBenefitsSurvey',
        },
        view: {
          title: 'Ver GovtBenefitsSurvey',
        },
        importer: {
          title: 'Importar GovtBenefitsSurveys',
          fileName: 'govtBenefitsSurvey_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    foodSecuritySurvey: {
        name: 'foodSecuritySurvey',
        label: 'Food Security Surveys',
        menu: 'Food Security Surveys',
        exporterFileName: 'exportacion_foodSecuritySurvey',
        list: {
          menu: 'Food Security Surveys',
          title: 'Food Security Surveys',
        },
        create: {
          success: 'Food Security Survey guardado con éxito',
        },
        update: {
          success: 'Food Security Survey guardado con éxito',
        },
        destroy: {
          success: 'Food Security Survey eliminado con éxito',
        },
        destroyAll: {
          success: 'Food Security Survey(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Food Security Survey',
        },
        fields: {
          id: 'Id',
          'household': 'Household',
          'surveyDateRange': 'Survey Date',
          'surveyDate': 'Survey Date',
          'enoughToEat': 'EnoughToEat',
          'proteinSource': 'Protein Source',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo Food Security Survey',
        },
        view: {
          title: 'Ver Food Security Survey',
        },
        importer: {
          title: 'Importar Food Security Surveys',
          fileName: 'foodSecuritySurvey_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    healthSurvey: {
        name: 'healthSurvey',
        label: 'HealthSurveys',
        menu: 'HealthSurveys',
        exporterFileName: 'exportacion_healthSurvey',
        list: {
          menu: 'HealthSurveys',
          title: 'HealthSurveys',
        },
        create: {
          success: 'HealthSurvey guardado con éxito',
        },
        update: {
          success: 'HealthSurvey guardado con éxito',
        },
        destroy: {
          success: 'HealthSurvey eliminado con éxito',
        },
        destroyAll: {
          success: 'HealthSurvey(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar HealthSurvey',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo HealthSurvey',
        },
        view: {
          title: 'Ver HealthSurvey',
        },
        importer: {
          title: 'Importar HealthSurveys',
          fileName: 'healthSurvey_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    chronicDiseaseEnum: {
        name: 'chronicDiseaseEnum',
        label: 'ChronicDiseaseEnums',
        menu: 'ChronicDiseaseEnums',
        exporterFileName: 'exportacion_chronicDiseaseEnum',
        list: {
          menu: 'ChronicDiseaseEnums',
          title: 'ChronicDiseaseEnums',
        },
        create: {
          success: 'Chronic Diseases guardado con éxito',
        },
        update: {
          success: 'Chronic Diseases guardado con éxito',
        },
        destroy: {
          success: 'Chronic Diseases eliminado con éxito',
        },
        destroyAll: {
          success: 'Chronic Diseases(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Chronic Diseases',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        new: {
          title: 'Nuevo Chronic Diseases',
        },
        view: {
          title: 'Ver Chronic Diseases',
        },
        importer: {
          title: 'Importar ChronicDiseaseEnums',
          fileName: 'chronicDiseaseEnum_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    municipalityEnum: {
        name: 'municipalityEnum',
        label: 'MunicipalityEnums',
        menu: 'MunicipalityEnums',
        exporterFileName: 'exportacion_municipalityEnum',
        list: {
          menu: 'MunicipalityEnums',
          title: 'MunicipalityEnums',
        },
        create: {
          success: 'Municipality Enum guardado con éxito',
        },
        update: {
          success: 'Municipality Enum guardado con éxito',
        },
        destroy: {
          success: 'Municipality Enum eliminado con éxito',
        },
        destroyAll: {
          success: 'Municipality Enum(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Municipality Enum',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        new: {
          title: 'Nuevo Municipality Enum',
        },
        view: {
          title: 'Ver Municipality Enum',
        },
        importer: {
          title: 'Importar MunicipalityEnums',
          fileName: 'municipalityEnum_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    villageEnum: {
        name: 'villageEnum',
        label: 'VillageEnums',
        menu: 'VillageEnums',
        exporterFileName: 'exportacion_villageEnum',
        list: {
          menu: 'VillageEnums',
          title: 'VillageEnums',
        },
        create: {
          success: 'VillageEnum guardado con éxito',
        },
        update: {
          success: 'VillageEnum guardado con éxito',
        },
        destroy: {
          success: 'VillageEnum eliminado con éxito',
        },
        destroyAll: {
          success: 'VillageEnum(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar VillageEnum',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        new: {
          title: 'Nuevo VillageEnum',
        },
        view: {
          title: 'Ver VillageEnum',
        },
        importer: {
          title: 'Importar VillageEnums',
          fileName: 'villageEnum_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    gramPanchayatEnum: {
        name: 'gramPanchayatEnum',
        label: 'GramPanchayatEnums',
        menu: 'GramPanchayatEnums',
        exporterFileName: 'exportacion_gramPanchayatEnum',
        list: {
          menu: 'GramPanchayatEnums',
          title: 'GramPanchayatEnums',
        },
        create: {
          success: 'Gram Panchayat  guardado con éxito',
        },
        update: {
          success: 'Gram Panchayat  guardado con éxito',
        },
        destroy: {
          success: 'Gram Panchayat  eliminado con éxito',
        },
        destroyAll: {
          success: 'Gram Panchayat (s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Gram Panchayat ',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        new: {
          title: 'Nuevo Gram Panchayat ',
        },
        view: {
          title: 'Ver Gram Panchayat ',
        },
        importer: {
          title: 'Importar GramPanchayatEnums',
          fileName: 'gramPanchayatEnum_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    districtEnum: {
        name: 'districtEnum',
        label: 'DistrictEnums',
        menu: 'DistrictEnums',
        exporterFileName: 'exportacion_districtEnum',
        list: {
          menu: 'DistrictEnums',
          title: 'DistrictEnums',
        },
        create: {
          success: 'DistrictEnum guardado con éxito',
        },
        update: {
          success: 'DistrictEnum guardado con éxito',
        },
        destroy: {
          success: 'DistrictEnum eliminado con éxito',
        },
        destroyAll: {
          success: 'DistrictEnum(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar DistrictEnum',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        new: {
          title: 'Nuevo DistrictEnum',
        },
        view: {
          title: 'Ver DistrictEnum',
        },
        importer: {
          title: 'Importar DistrictEnums',
          fileName: 'districtEnum_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },
  },
  auth: {
    tenants: 'Espacios de trabajo',
    profile: {
      title: 'Perfil',
      success: 'Perfil actualizado con éxito',
    },
    createAnAccount: 'Crea una cuenta',
    rememberMe: 'Recuérdame',
    forgotPassword: 'Se te olvidó tu contraseña',
    signin: 'Iniciar Sesión',
    signup: 'Registrarse',
    signout: 'Desconectar',
    alreadyHaveAnAccount:
      '¿Ya tienes una cuenta? Registrarse.',
    signinWithAnotherAccount:
      'Inicia sesión con otra cuenta',
    passwordChange: {
      title: 'Cambia la contraseña',
      success: 'Contraseña cambiada correctamente',
      mustMatch: 'Las contraseñas deben coincidir',
    },
    emailUnverified: {
      message:
        'Confirme su correo electrónico en <strong>{0}</strong> para continuar.',
      submit: 'Reenviar verificación de correo electrónico',
    },
    emptyPermissions: {
      message:
        'Aún no tienes permisos. Espera a que el administrador te otorgue privilegios.',
    },
    passwordResetEmail: {
      message:
        'Enviar contraseña restablecer correo electrónico',
      error: 'Correo electrónico no reconocido',
    },
    passwordReset: {
      message: 'Restablecer la contraseña',
    },
    emailAddressVerificationEmail: {
      error: 'Correo electrónico no reconocido',
    },
    verificationEmailSuccess:
      'Correo electrónico de verificación enviado con éxito',
    passwordResetEmailSuccess:
      'Correo electrónico de restablecimiento de contraseña enviado correctamente',
    passwordResetSuccess:
      'Contraseña cambiada correctamente',
    verifyEmail: {
      success: 'Correo electrónico verificado con éxito.',
      message:
        'Solo un momento, su correo electrónico está siendo verificado ...',
    },
  },
  tenant: {
    name: 'inquilino',
    label: 'Espacios de trabajo',
    menu: 'Espacios de trabajo',
    list: {
      menu: 'Espacios de trabajo',
      title: 'Espacios de trabajo',
    },
    create: {
      button: 'Crear espacio de trabajo',
      success: 'Espacio de trabajo guardado correctamente',
    },
    update: {
      success: 'Espacio de trabajo guardado correctamente',
    },
    destroy: {
      success: 'Espacio de trabajo eliminado correctamente',
    },
    destroyAll: {
      success:
        'Espacio(s) de trabajo eliminado(s) correctamente',
    },
    edit: {
      title: 'Editar espacio de trabajo',
    },
    fields: {
      id: 'Id',
      name: 'Nombre',
      url: 'URL',
      tenantName: 'Nombre del espacio de trabajo',
      tenantId: 'Espacio de trabajo',
      tenantUrl: 'URL del espacio de trabajo',
      plan: 'Plan',
    },
    enumerators: {},
    new: {
      title: 'Nuevo espacio de trabajo',
    },
    invitation: {
      view: 'Ver invitaciones',
      invited: 'Invitado',
      accept: 'Aceptar la invitacion',
      decline: 'Rechazar invitación',
      declined: 'Invitación rechazada con éxito',
      acceptWrongEmail:
        'Aceptar invitación con este correo electrónico',
    },
    select: 'Seleccionar espacio de trabajo',
    validation: {
      url:
        'La URL de su espacio de trabajo solo puede contener letras minúsculas, números y guiones (y debe comenzar con una letra o número).',
    },
  },
  roles: {
    admin: {
      label: 'Administración',
      description: 'Acceso total a todos los recursos.',
    },
    custom: {
      label: 'Rol personalizado',
      description: 'Acceso personalizado a recursos',
    },
  },
  user: {
    invite: 'Invitación',
    title: 'Usuarios',
    menu: 'Usuarios',
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Nombre completo',
      firstName: 'Nombre',
      lastName: 'Apellido',
      status: 'Estado',
      disabled: 'Discapacitado',
      phoneNumber: 'Número de teléfono',
      role: 'Rol',
      createdAt: 'Creado el',
      updatedAt: 'Actualizado el',
      roleUser: 'Rol/Usuario',
      roles: 'Roles',
      createdAtRange: 'Creado el',
      password: 'Contraseña',
      rememberMe: 'Recuérdame',
      oldPassword: 'Contraseña anterior',
      newPassword: 'Nueva contraseña',
      newPasswordConfirmation:
        'Nueva confirmación de contraseña',
    },
    enabled: 'Habilitado',
    disabled: 'Discapacitado',
    validations: {
      // eslint-disable-next-line
      email: 'El correo electrónico ${value} no es válido',
    },
    disable: 'Inhabilitar',
    enable: 'Habilitar',
    doEnableSuccess: 'Usuario habilitado con éxito',
    doDisableSuccess: 'Usuario deshabilitado con éxito',
    doDisableAllSuccess:
      'Usuario(s) deshabilitado con éxito',
    doEnableAllSuccess:
      'Usuario(s) habilitados correctamente',
    doAddSuccess: 'Usuario(s) guardado correctamente',
    doUpdateSuccess: 'Usuario guardado con éxito',
    status: {
      active: 'Activo',
      invited: 'Invitado',
      'empty-permissions': 'Esperando permisos',
    },
    exporterFileName: 'usuarios_exportacion',
    doDestroySuccess: 'Usuario eliminado con éxito',
    doDestroyAllSelectedSuccess:
      'Usuario(s) eliminado correctamente',
    edit: {
      title: 'Editar Usuario',
    },
    new: {
      title: 'Invitar Usuario(s)',
      titleModal: 'Nuevo Usuario',
      emailsHint:
        'Separe varias direcciones de correo electrónico utilizando el carácter de coma.',
    },
    view: {
      title: 'Ver Usuario',
      activity: 'Actividad',
    },
    importer: {
      title: 'Importar Usuarios',
      fileName: 'users_import_template',
      hint:
        'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio. Las relaciones deben ser la ID de los registros referenciados separados por espacio. Los roles deben ser los identificadores de roles separados por espacio.',
    },
    errors: {
      userAlreadyExists:
        'El usuario con este correo electrónico ya existe',
      userNotFound: 'Usuario no encontrado',
      disablingHimself: 'No puedes inhabilitarte',
      revokingOwnPermission:
        'No puede revocar su propio permiso de administrador',
    },
  },
  plan: {
    menu: 'Planes',
    title: 'Planes',
    free: {
      label: 'Gratis',
      price: '$0',
    },
    growth: {
      label: 'Crecimiento',
      price: '$10',
    },
    enterprise: {
      label: 'Empresa',
      price: '$50',
    },
    pricingPeriod: '/mes',
    current: 'Plan Actual',
    subscribe: 'Suscribir',
    manage: 'Administrar Suscripción',
    cancelAtPeriodEnd:
      'Este plan se cancelará al final del período.',
    somethingWrong:
      'Hay algo mal con su suscripción. Vaya a administrar la suscripción para obtener más detalles.',
    notPlanUser:
      'No eres el administrador de esta suscripción.',
    demoHintHtml:
      'Sugerencia: Use esas <a href="https://stripe.com/docs/testing#cards" target="_blank" rel="noopener noreferrer">tarjetas de prueba</a> para la demostración.',
  },
  auditLog: {
    menu: 'Registros de auditoría',
    title: 'Registros de auditoría',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Separe varias entidades con el carácter de coma.',
    fields: {
      id: 'Id',
      timestampRange: 'Período',
      entityName: 'Entidad',
      entityNames: 'Entidades',
      entityId: 'ID de entidad',
      action: 'Acción',
      values: 'Valores',
      timestamp: 'Fecha',
      createdByEmail: 'Email del usuario',
    },
  },
  settings: {
    title: 'Configuraciones',
    menu: 'Configuraciones',
    save: {
      success:
        'Configuración guardada con éxito. La página se volverá a cargar en {0} segundos para que los cambios surtan efecto.',
    },
    fields: {
      primary: 'Color primario',
      secondary: 'Color secundario',
      logos: 'Logo',
      backgroundImages: 'Imágenes de fondo',
      shade: 'Sombra',
    },
  },
  dashboard: {
    menu: 'Tablero',
    message:
      'Esta página utiliza datos falsos solo con fines de demostración. Puede editarlo en frontend/view/dashboard/DashboardPage.ts.',
    charts: {
      day: 'Día',
      red: 'Rojo',
      green: 'Verde',
      yellow: 'Amarillo',
      grey: 'Gris',
      blue: 'Azul',
      orange: 'Naranja',
      months: {
        '1': 'Enero',
        '2': 'Febrero',
        '3': 'Marzo',
        '4': 'Abril',
        '5': 'Mayo',
        '6': 'Junio',
        '7': 'Julio',
      },
      eating: 'Comiendo',
      drinking: 'Bebiendo',
      sleeping: 'Dormiendo',
      designing: 'Diseñando',
      coding: 'Codificando',
      cycling: 'Pedalando',
      running: 'Corriendo',
      customer: 'Cliente',
    },
  },
  errors: {
    '403': 'Lo sentimos, no tienes acceso a esta página',
    '404': 'Lo sentimos, la página que visitaste no existe',
    '500': 'Lo sentimos, el servidor informa un error',
    '429':
      'Demasiadas solicitudes. Por favor, inténtelo de nuevo más tarde.',
    backToHome: 'Volver a Inicio',
    forbidden: {
      message: 'Prohibido',
    },
    validation: {
      message: 'Ocurrió un error',
    },
    defaultErrorMessage: 'Ops, ocurrió un error',
  },
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} no es válido',
      required: '${path} es obligatorio',
      oneOf:
        '${path} debe ser uno de los siguientes valores: ${values}',
      notOneOf:
        '${path} no debe ser uno de los siguientes valores: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} debe ser un ${type}`;
      },
    },
    string: {
      length:
        '${path} debe tener exactamente ${length} caracteres',
      min: '${path} debe tener al menos ${min} caracteres',
      max:
        '${path} debe tener como máximo ${max} caracteres',
      matches:
        '${path} debe coincidir con lo siguiente: "${regex}"',
      email:
        '${path} debe ser un correo electrónico válido',
      url: '${path} debe ser una URL válida',
      trim: '${path} debe ser una cadena recortada',
      lowercase:
        '${path} debe ser una cadena en minúsculas',
      uppercase: '${path} debe ser una cadena en mayúscula',
      selected: '${path} debe estar seleccionado',
    },
    number: {
      min: '${path} debe ser mayor o igual que ${min}',
      max: '${path} debe ser menor o igual que ${max}',
      lessThan: '${path} debe ser menor que ${less}',
      moreThan: '${path} debe ser mayor que ${more}',
      notEqual: '${path} no debe ser igual a ${notEqual}',
      positive: '${path} debe ser un número positivo',
      negative: '${path} debe ser un número negativo',
      integer: '${path} debe ser un número entero',
    },
    date: {
      min: 'El campo ${path} debe ser posterior a ${min}',
      max: 'El campo ${path} debe ser anterior a ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        'El campo ${path} no puede tener claves no especificadas en la forma del objeto',
    },
    array: {
      min: ({ min, path }) =>
        min === 1
          ? `${path} es obligatorio`
          : `'El campo ${path} debe tener al menos ${min} elementos`,
      max:
        'El campo ${path} debe tener elementos menores o iguales a ${max}',
    },
  },
  fileUploader: {
    upload: 'Subir',
    image: 'Debes subir una imagen',
    size:
      'El archivo es muy grande. El tamaño máximo permitido es {0}',
    formats: 'Formato inválido. Debe ser uno de: {0}.',
  },
  importer: {
    line: 'Línea',
    status: 'Estado',
    pending: 'Pendiente',
    imported: 'Importado',
    error: 'Error',
    total: '{0} importado, {1} pendiente y {2} con error',
    importedMessage: 'Procesado {0} de {1}.',
    noNavigateAwayMessage:
      'No navegue fuera de esta página o la importación se detendrá.',
    completed: {
      success:
        'Importación completada. Todas las filas se importaron correctamente.',
      someErrors:
        'Procesamiento completado, pero algunas filas no se pudieron importar.',
      allErrors:
        'Importación fallida. No hay filas válidas.',
    },
    form: {
      downloadTemplate: 'Descargar la plantilla',
      hint:
        'Haga clic o arrastre el archivo a esta área para continuar.',
    },
    list: {
      discardConfirm:
        '¿Estás seguro? Los datos no importados se perderán.',
    },
    errors: {
      invalidFileEmpty: 'El archivo esta vacio',
      invalidFileExcel:
        'Solo se permiten archivos de Excel(.xlsx)',
      invalidFileUpload:
        'Archivo inválido. Asegúrese de estar utilizando la última versión de la plantilla.',
      importHashRequired: 'Se requiere hash de importación',
      importHashExistent:
        'Los datos ya han sido importados',
    },
  },

  autocomplete: {
    loading: 'Cargando...',
    noOptions: 'Datos no encontrados',
  },
  imagesViewer: {
    noImage: 'Sin imágen',
  },
  table: {
    noData: 'No se encontraron registros',
    loading: 'Cargando...',
  },
  pagination: {
    labelDisplayedRows: '{0}-{1} de {2}',
    labelRowsPerPage: 'Por página:',
  },
};

export default es;
