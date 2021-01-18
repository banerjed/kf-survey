const ptBR = {
  common: {
    or: 'ou',
    cancel: 'Cancelar',
    reset: 'Limpar',
    save: 'Salvar',
    search: 'Buscar',
    edit: 'Editar',
    new: 'Novo',
    export: 'Exportar para Excel',
    noDataToExport: 'Não há dados para exportar',
    import: 'Importar',
    discard: 'Descartar',
    yes: 'Sim',
    no: 'Não',
    pause: 'Pausar',
    areYouSure: 'Tem certeza?',
    view: 'Visualizar',
    destroy: 'Deletar',
    mustSelectARow: 'Selecine uma linha',
    start: 'Inicio',
    end: 'Fim',
    select: 'Selecionar',
    continue: 'Continuar',
    filters: 'Filtros',
  },

  app: {
    title: 'Aplicação',
  },

  entities: {
    person: {
        name: 'Person',
        label: 'People',
        menu: 'People',
        exporterFileName: 'Person_exportados',
        list: {
          menu: 'People',
          title: 'People',
        },
        create: {
          success: 'Person salvo com sucesso',
        },
        update: {
          success: 'Person salvo com sucesso',
        },
        destroy: {
          success: 'Person deletado com sucesso',
        },
        destroyAll: {
          success: 'Person(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Person',
        },
        view: {
          title: 'Visualizar Person',
        },
        importer: {
          title: 'Importar People',
          fileName: 'person_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    household: {
        name: 'Household',
        label: 'Households',
        menu: 'Households',
        exporterFileName: 'Household_exportados',
        list: {
          menu: 'Households',
          title: 'Households',
        },
        create: {
          success: 'Household salvo com sucesso',
        },
        update: {
          success: 'Household salvo com sucesso',
        },
        destroy: {
          success: 'Household deletado com sucesso',
        },
        destroyAll: {
          success: 'Household(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        new: {
          title: 'Novo Household',
        },
        view: {
          title: 'Visualizar Household',
        },
        importer: {
          title: 'Importar Households',
          fileName: 'household_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    homeSurvey: {
        name: 'Home Survey',
        label: 'HomeSurveys',
        menu: 'HomeSurveys',
        exporterFileName: 'Home Survey_exportados',
        list: {
          menu: 'HomeSurveys',
          title: 'HomeSurveys',
        },
        create: {
          success: 'Home Survey salvo com sucesso',
        },
        update: {
          success: 'Home Survey salvo com sucesso',
        },
        destroy: {
          success: 'Home Survey deletado com sucesso',
        },
        destroyAll: {
          success: 'Home Survey(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Home Survey',
        },
        view: {
          title: 'Visualizar Home Survey',
        },
        importer: {
          title: 'Importar HomeSurveys',
          fileName: 'homeSurvey_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    livelihoodSurvey: {
        name: 'Livelihood Survey',
        label: 'LivelihoodSurveys',
        menu: 'LivelihoodSurveys',
        exporterFileName: 'Livelihood Survey_exportados',
        list: {
          menu: 'LivelihoodSurveys',
          title: 'LivelihoodSurveys',
        },
        create: {
          success: 'Livelihood Survey salvo com sucesso',
        },
        update: {
          success: 'Livelihood Survey salvo com sucesso',
        },
        destroy: {
          success: 'Livelihood Survey deletado com sucesso',
        },
        destroyAll: {
          success: 'Livelihood Survey(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        new: {
          title: 'Novo Livelihood Survey',
        },
        view: {
          title: 'Visualizar Livelihood Survey',
        },
        importer: {
          title: 'Importar LivelihoodSurveys',
          fileName: 'livelihoodSurvey_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    govtBenefitsSurvey: {
        name: 'GovtBenefitsSurvey',
        label: 'GovtBenefitsSurveys',
        menu: 'GovtBenefitsSurveys',
        exporterFileName: 'GovtBenefitsSurvey_exportados',
        list: {
          menu: 'GovtBenefitsSurveys',
          title: 'GovtBenefitsSurveys',
        },
        create: {
          success: 'GovtBenefitsSurvey salvo com sucesso',
        },
        update: {
          success: 'GovtBenefitsSurvey salvo com sucesso',
        },
        destroy: {
          success: 'GovtBenefitsSurvey deletado com sucesso',
        },
        destroyAll: {
          success: 'GovtBenefitsSurvey(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        new: {
          title: 'Novo GovtBenefitsSurvey',
        },
        view: {
          title: 'Visualizar GovtBenefitsSurvey',
        },
        importer: {
          title: 'Importar GovtBenefitsSurveys',
          fileName: 'govtBenefitsSurvey_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    foodSecuritySurvey: {
        name: 'Food Security Survey',
        label: 'Food Security Surveys',
        menu: 'Food Security Surveys',
        exporterFileName: 'Food Security Survey_exportados',
        list: {
          menu: 'Food Security Surveys',
          title: 'Food Security Surveys',
        },
        create: {
          success: 'Food Security Survey salvo com sucesso',
        },
        update: {
          success: 'Food Security Survey salvo com sucesso',
        },
        destroy: {
          success: 'Food Security Survey deletado com sucesso',
        },
        destroyAll: {
          success: 'Food Security Survey(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Food Security Survey',
        },
        view: {
          title: 'Visualizar Food Security Survey',
        },
        importer: {
          title: 'Importar Food Security Surveys',
          fileName: 'foodSecuritySurvey_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    healthSurvey: {
        name: 'HealthSurvey',
        label: 'HealthSurveys',
        menu: 'HealthSurveys',
        exporterFileName: 'HealthSurvey_exportados',
        list: {
          menu: 'HealthSurveys',
          title: 'HealthSurveys',
        },
        create: {
          success: 'HealthSurvey salvo com sucesso',
        },
        update: {
          success: 'HealthSurvey salvo com sucesso',
        },
        destroy: {
          success: 'HealthSurvey deletado com sucesso',
        },
        destroyAll: {
          success: 'HealthSurvey(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo HealthSurvey',
        },
        view: {
          title: 'Visualizar HealthSurvey',
        },
        importer: {
          title: 'Importar HealthSurveys',
          fileName: 'healthSurvey_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    chronicDiseaseEnum: {
        name: 'Chronic Diseases',
        label: 'ChronicDiseaseEnums',
        menu: 'ChronicDiseaseEnums',
        exporterFileName: 'Chronic Diseases_exportados',
        list: {
          menu: 'ChronicDiseaseEnums',
          title: 'ChronicDiseaseEnums',
        },
        create: {
          success: 'Chronic Diseases salvo com sucesso',
        },
        update: {
          success: 'Chronic Diseases salvo com sucesso',
        },
        destroy: {
          success: 'Chronic Diseases deletado com sucesso',
        },
        destroyAll: {
          success: 'Chronic Diseases(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Chronic Diseases',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        new: {
          title: 'Novo Chronic Diseases',
        },
        view: {
          title: 'Visualizar Chronic Diseases',
        },
        importer: {
          title: 'Importar ChronicDiseaseEnums',
          fileName: 'chronicDiseaseEnum_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    municipalityEnum: {
        name: 'Municipality Enum',
        label: 'MunicipalityEnums',
        menu: 'MunicipalityEnums',
        exporterFileName: 'Municipality Enum_exportados',
        list: {
          menu: 'MunicipalityEnums',
          title: 'MunicipalityEnums',
        },
        create: {
          success: 'Municipality Enum salvo com sucesso',
        },
        update: {
          success: 'Municipality Enum salvo com sucesso',
        },
        destroy: {
          success: 'Municipality Enum deletado com sucesso',
        },
        destroyAll: {
          success: 'Municipality Enum(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Municipality Enum',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        new: {
          title: 'Novo Municipality Enum',
        },
        view: {
          title: 'Visualizar Municipality Enum',
        },
        importer: {
          title: 'Importar MunicipalityEnums',
          fileName: 'municipalityEnum_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    villageEnum: {
        name: 'VillageEnum',
        label: 'VillageEnums',
        menu: 'VillageEnums',
        exporterFileName: 'VillageEnum_exportados',
        list: {
          menu: 'VillageEnums',
          title: 'VillageEnums',
        },
        create: {
          success: 'VillageEnum salvo com sucesso',
        },
        update: {
          success: 'VillageEnum salvo com sucesso',
        },
        destroy: {
          success: 'VillageEnum deletado com sucesso',
        },
        destroyAll: {
          success: 'VillageEnum(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar VillageEnum',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        new: {
          title: 'Novo VillageEnum',
        },
        view: {
          title: 'Visualizar VillageEnum',
        },
        importer: {
          title: 'Importar VillageEnums',
          fileName: 'villageEnum_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    gramPanchayatEnum: {
        name: 'Gram Panchayat ',
        label: 'GramPanchayatEnums',
        menu: 'GramPanchayatEnums',
        exporterFileName: 'Gram Panchayat _exportados',
        list: {
          menu: 'GramPanchayatEnums',
          title: 'GramPanchayatEnums',
        },
        create: {
          success: 'Gram Panchayat  salvo com sucesso',
        },
        update: {
          success: 'Gram Panchayat  salvo com sucesso',
        },
        destroy: {
          success: 'Gram Panchayat  deletado com sucesso',
        },
        destroyAll: {
          success: 'Gram Panchayat (s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Gram Panchayat ',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        new: {
          title: 'Novo Gram Panchayat ',
        },
        view: {
          title: 'Visualizar Gram Panchayat ',
        },
        importer: {
          title: 'Importar GramPanchayatEnums',
          fileName: 'gramPanchayatEnum_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    districtEnum: {
        name: 'DistrictEnum',
        label: 'DistrictEnums',
        menu: 'DistrictEnums',
        exporterFileName: 'DistrictEnum_exportados',
        list: {
          menu: 'DistrictEnums',
          title: 'DistrictEnums',
        },
        create: {
          success: 'DistrictEnum salvo com sucesso',
        },
        update: {
          success: 'DistrictEnum salvo com sucesso',
        },
        destroy: {
          success: 'DistrictEnum deletado com sucesso',
        },
        destroyAll: {
          success: 'DistrictEnum(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar DistrictEnum',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        new: {
          title: 'Novo DistrictEnum',
        },
        view: {
          title: 'Visualizar DistrictEnum',
        },
        importer: {
          title: 'Importar DistrictEnums',
          fileName: 'districtEnum_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },
  },
    
  auth: {
    tenants: 'Áreas de Trabalho',
    profile: {
      title: 'Perfil',
      success: 'Perfil atualizado com sucesso',
    },
    createAnAccount: 'Criar uma conta',
    rememberMe: 'Lembrar-me',
    forgotPassword: 'Esqueci minha senha',
    signin: 'Entrar',
    signup: 'Registrar',
    signout: 'Sair',
    alreadyHaveAnAccount: 'Já possui uma conta? Entre.',
    signinWithAnotherAccount: 'Entrar com outra conta',
    emailUnverified: {
      message: `Por favor, confirme seu email em <strong>{0}</strong> para continuar.`,
      submit: `Reenviar confirmação por email`,
    },
    passwordResetEmail: {
      message: 'Enviar email de redefinição de senha',
      error: `Email não encontrado`,
    },
    emptyPermissions: {
      message: `Você ainda não possui permissões. Aguarde o administrador conceder seus privilégios.`,
    },
    passwordReset: {
      message: 'Alterar senha',
    },
    passwordChange: {
      title: 'Mudar a Senha',
      success: 'Senha alterada com sucesso',
      mustMatch: 'Senhas devem ser iguais',
    },
    emailAddressVerificationEmail: {
      error: `Email não encontrado`,
    },
    verificationEmailSuccess: `Verificação de email enviada com sucesso`,
    passwordResetEmailSuccess: `Email de redefinição de senha enviado com sucesso`,
    passwordResetSuccess: `Senha alterada com sucesso`,
    verifyEmail: {
      success: 'Email verificado com sucesso.',
      message:
        'Aguarde um momento, seu email está sendo verificado...',
    },
  },

  roles: {
    admin: {
      label: 'Administrador',
      description: 'Acesso completo a todos os recursos',
    },
    custom: {
      label: 'Perfil Customizado',
      description: 'Acesso customizado',
    },
  },

  user: {
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Nome',
      firstName: 'Nome',
      lastName: 'Sobrenome',
      status: 'Estado',
      phoneNumber: 'Telefone',
      role: 'Perfil',
      createdAt: 'Criado em',
      updatedAt: 'Atualizado em',
      roleUser: 'Perfil/Usuário',
      roles: 'Perfis',
      createdAtRange: 'Criado em',
      password: 'Senha',
      oldPassword: 'Senha Antiga',
      newPassword: 'Nova Senha',
      newPasswordConfirmation: 'Confirmação da Nova Senha',
      rememberMe: 'Lembrar-me',
    },
    status: {
      active: 'Ativo',
      invited: 'Convidado',
      'empty-permissions': 'Aguardando Permissões',
    },
    invite: 'Convidar',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} é inválido',
    },
    title: 'Usuários',
    menu: 'Usuários',
    doAddSuccess: 'Usuário(s) salvos com sucesso',
    doUpdateSuccess: 'Usuário salvo com sucesso',
    exporterFileName: 'usuarios_exportados',
    doDestroySuccess: 'Usuário deletado com sucesso',
    doDestroyAllSelectedSuccess:
      'Usuários deletado com sucesso',
    edit: {
      title: 'Editar usuário',
    },
    new: {
      title: 'Novo(s) Usuário(s)',
      titleModal: 'Novo Usuário',
      emailsHint:
        'Separe múltiplos endereços de e-mail usando a vírgula.',
    },
    view: {
      title: 'Visualizar Usuário',
      activity: 'Atividades',
    },
    importer: {
      title: 'Importar Usuários',
      fileName: 'usuarios_template_importacao',
      hint:
        'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
    },
    errors: {
      userAlreadyExists: 'Usuário com este email já existe',
      userNotFound: 'Usuário não encontrado',
      revokingOwnPermission: `Você não pode revogar sua própria permissão de proprietário`,
    },
  },

  tenant: {
    name: 'tenant',
    label: 'Área de Trabalho',
    menu: 'Áreas de Trabalho',
    list: {
      menu: 'Áreas de Trabalho',
      title: 'Áreas de Trabalho',
    },
    create: {
      button: 'Criar Área de Trabalho',
      success: 'Área de Trabalho salva com sucesso',
    },
    update: {
      success: 'Área de Trabalho salva com sucesso',
    },
    destroy: {
      success: 'Área de Trabalho deletada com sucesso',
    },
    destroyAll: {
      success: 'Área(s) de Trabalho deletadas com sucesso',
    },
    edit: {
      title: 'Editar Área de Trabalho',
    },
    fields: {
      id: 'Id',
      name: 'Nome',
      tenantName: 'Nome da Área de Trabalho',
      tenantUrl: 'URL da Área de Trabalho',
      tenantId: 'Área de Trabalho',
      plan: 'Plano',
    },
    enumerators: {},
    new: {
      title: 'Nova Área de Trabalho',
    },
    invitation: {
      view: 'Ver Convites',
      invited: 'Convidado',
      accept: 'Aceitar Convite',
      decline: 'Recusar Convite',
      declined: 'Convite recusado com sucesso',
      acceptWrongEmail: 'Aceitar Convite Com Este Email',
    },
    select: 'Selecionar Área de Trabalho',
    url: {
      exists: 'Esta URL de área de trabalho já está em uso.',
    },
  },

  plan: {
    menu: 'Planos',
    title: 'Planos',

    free: {
      label: 'Gratuito',
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

    pricingPeriod: '/mês',
    current: 'Plano Atual',
    subscribe: 'Assinar',
    manage: 'Gerenciar Assinatura',
    somethingWrong:
      'Há algo errado com sua assinatura. Por favor clique em Gerenciar Assinatura para mais informações.',
    cancelAtPeriodEnd:
      'O plano será cancelado no fim do período.',
    notPlanUser: `Esta assinatura não é controlada por você.`,
  },

  auditLog: {
    menu: 'Registros de Auditoria',
    title: 'Registros de Auditoria',
    exporterFileName: 'registros_autoria_exportados',
    entityNamesHint:
      'Separe múltiplas entidades por vírgula',
    fields: {
      id: 'Id',
      timestampRange: 'Período',
      entityName: 'Entidade',
      entityNames: 'Entidades',
      entityId: 'ID da Entidade',
      action: 'Ação',
      values: 'Valores',
      timestamp: 'Data',
      createdByEmail: 'Email do Usuário',
    },
  },
  settings: {
    title: 'Configurações',
    menu: 'Configurações',
    save: {
      success: 'Configurações salvas com sucesso.',
    },
    fields: {
      primary: 'Cor Primária',
      secondary: 'Cor Secundária',
      shade: 'Tom',
      logos: 'Logo',
      backgroundImages: 'Papel de Parede',
    },
  },
  dashboard: {
    menu: 'Inicial',
    message: `Esta página usa dados falsos apenas para fins de demonstração. Você pode editá-la em frontend/view/dashboard/DashboardPage.ts.`,
    charts: {
      day: 'Dia',
      red: 'Vermelho',
      green: 'Verde',
      yellow: 'Amarelho',
      grey: 'Cinza',
      blue: 'Azul',
      orange: 'Laranja',
      months: {
        1: 'Janeiro',
        2: 'Fevereiro',
        3: 'Março',
        4: 'Abril',
        5: 'Maio',
        6: 'Junho',
        7: 'Julho',
      },
      eating: 'Comendo',
      drinking: 'Bebendo',
      sleeping: 'Dormindo',
      designing: 'Projetando',
      coding: 'Codificando',
      cycling: 'Pedalando',
      running: 'Correndo',
      customer: 'Cliente',
    },
  },
  errors: {
    backToHome: 'Voltar a página inicial',
    403: `Desculpe, você não tem acesso a esta página`,
    404: 'Desculpe, a página que você visitou não existe',
    500: 'Desculpe, o servidor está relatando um erro',
    429: 'Muitas requisições. Por favor, tente novamente mais tarde.',
    forbidden: {
      message: 'Acesso negado',
    },
    validation: {
      message: 'Ocorreu um erro',
    },
    defaultErrorMessage: 'Ops, ocorreu um erro',
  },
  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} é inválido',
      required: '${path} é obrigatório',
      oneOf:
        '${path} deve ser um dos seguintes valores: ${values}',
      notOneOf:
        '${path} não deve ser um dos seguintes valores: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} deve ser um ${type}`;
      },
    },
    string: {
      length: '${path} deve possuir ${length} caracteres',
      min:
        '${path} deve possuir ao menos ${min} caracteres',
      max:
        '${path} deve possui no máximo ${max} caracteres',
      matches:
        '${path} deve respeitar o padrão: "${regex}"',
      email: '${path} deve ser um email válido',
      url: '${path} deve ser uma URL válida',
      trim:
        '${path} deve ser uma palavra sem espaços em branco',
      lowercase: '${path} deve ser minúsculo',
      uppercase: '${path} deve ser maiúsculo',
      selected: '${path} deve ser selecionado',
    },
    number: {
      min: '${path} deve ser maior ou igual a ${min}',
      max: '${path} deve ser menor ou igual a ${max}',
      lessThan: '${path} deve ser menor que ${less}',
      moreThan: '${path} deve ser maior que ${more}',
      notEqual: '${path} não deve ser igual a ${notEqual}',
      positive: '${path} deve ser um número positivo',
      negative: '${path} deve ser um número negativo',
      integer: '${path} deve ser um inteiro',
    },
    date: {
      min: '${path} deve ser posterior a ${min}',
      max: '${path} deve ser mais cedo do que ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} não pode ter atributos não especificados no formato do objeto',
    },
    array: {
      min: ({ min, path }) =>
        min === 1
          ? `${path} é obrigatório`
          : `'${path} deve possuir ao menos ${min} itens`,
      max: '${path} deve possuir no máximo ${max} itens',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'Você deve fazer upload de uma imagem',
    size:
      'O arquivo é muito grande. O tamanho máximo permitido é {0}',
    formats: `Formato inválido. Deve ser um destes: {0}.`,
  },
  importer: {
    line: 'Linha',
    status: 'Estado',
    pending: 'Pendente',
    imported: 'Importado',
    error: 'Erro',
    total: `{0} importado, {1} pendente e {2} com erro`,
    importedMessage: `Processados {0} de {1}.`,
    noNavigateAwayMessage:
      'Não saia desta página ou a importação será interrompida.',
    completed: {
      success:
        'Importação concluída. Todas as linhas foram importadas com sucesso.',
      someErrors:
        'O processamento foi concluído, mas algumas linhas não puderam ser importadas.',
      allErrors:
        'Importação falhou. Não há linhas válidas.',
    },
    form: {
      downloadTemplate: 'Baixe o modelo',
      hint:
        'Clique ou arraste o arquivo para esta área para continuar.',
    },
    list: {
      discardConfirm:
        'Você tem certeza? Dados não importados serão perdidos.',
    },
    errors: {
      invalidFileEmpty: 'O arquivo está vazio',
      invalidFileExcel:
        'Apenas arquivos Excel (.xlsx) são permitidos',
      invalidFileUpload:
        'Arquivo inválido. Verifique se você está usando a última versão do modelo.',
      importHashRequired: 'Hash de importação é necessário',
      importHashExistent: 'Dados já foram importados',
    },
  },

  autocomplete: {
    loading: 'Carregando...',
    noOptions: 'Não foram encontrados resultados',
  },

  imagesViewer: {
    noImage: 'Sem imagem',
  },

  table: {
    noData: 'Nenhum Registro Encontrado',
    loading: 'Carregando...',
  },

  pagination: {
    labelDisplayedRows: '{0}-{1} de {2}',
    labelRowsPerPage: 'Por página:',
  },
};

export default ptBR;
