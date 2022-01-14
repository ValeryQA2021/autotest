export let data = {
    "roles": [
        {
            id: 1,
            name: "superadmin",
        },
        {
            id: 2,
            name: "developer-mentor",
        },
        {
            id: 3,
            name: "management",
        },
        {
            id: 4,
            name: "mentor-freelancer",
        },
        {
            id: 5,
            name: "mentor-supervisor",
        },
        {   id: 6,
            name: "lecture",
        },
        {   id: 7,
            name: "ghost",
        },
    ],
     "users": [
          {
              "id": 1,
              "firstName": "Валера",
              "lastName": "Ильенков",
              "telegramId": 25,
              "telegramUserName": "@valera",
              "roleId": 1,
              "addedDate": new Date(2019, 0, 1)
          },
         {
              "id": 2,
              "firstName": "Серега",
              "lastName": "Дяткович",
              "telegramId": 26,
              "telegramUserName": "@SeregaGrey",
              "roleId": 2,
              "addedDate": new Date(2020, 0, 1)
          }
      ],
        "accounts": [
           {
               "id": 1,
               "login": "Valera_QA",
               "password": "qwerty123",
               "userId": 1,
           },
          {
               "id": 2,
               "login": "Serega_dev",
               "password": "qwerty1232",
               "userId": 2,
           }/*
            {
               "id": 3,
               "login": "Danya_front",
               "password": "qwerty12321",
               "userId": 3,
           },
            {
               "id": 4,
               "login": "Kirill_UI_UX",
               "password": "qwerty12321",
               "userId": 3,
           }*/
       ],
    /*   "courses": [
           {
               "id": 1,
               "title": "front-end"
           },
           {
               "id": 2,
               "title": "back-end"
           },
           {
               "id": 3,
               "title": "QA"
           },
       ],
         "courseSettings": [

             {
                "id": 1,
                "courseId": 1,
                "startDate": "2022-01-09T09:27:17.016Z",
                "maxStudentsCount": 5,
                "priceBYN": 1300,
                "priceEUR": 0,
                "studentsEURPercent": 0,
                "studentsBYNPercent": 100
            },
             {
                "id": 2,
                "courseId": 2,
                "startDate": "2022-01-10T09:27:17.016Z",
                "maxStudentsCount": 10,
                "priceBYN": 0,
                "priceEUR": 1300,
                "studentsEURPercent": 100,
                "studentsBYNPercent": 0
            }

        ],
       "groups": [
           {
               "id": 1,
               "courseId": 1,
               "title": "first ",
               "courseSettingId": 1,
           },
           {
               "id": 2,
               "courseId": 1,
               "title": "last ",
               "courseSettingId": 2,
           }
       ],
      "students": [
          {
              "id": 1,
              "firstName": "Валера_студ",
              "lastName": "Ильенков_студ",
              "middleName": "Игоревич_студ",
              "male": true,
              "isRemote": true,
              "dob": "1996-07-23T09:27:17.018Z",
              "groupId": 1,
              "movedToGroupId": null,
              "email": "val.1887@yandex.ru",
              "telegramId": 430256649,
              "historyTelegramId": 0,
              "telegramUserName": "VaLeR4iK",
              "inactive": true,
              "employed": true,
              "paidLevel": 1,
              "companyId": 0,
              "startSalary": 0,
              "cvLinks": "string",
              "contacts": "string",
              "passwordHash": "string",
              "cityId": null,
              "userId": 1,
              "specialistLevel": 0,
              "note": "string",
              "registrationData": "string",
              "socialNetworkUserId": 0,
              "simpleName": "string",
              "englishLevel": 1,
              "mentorsNote": "string"
          },
          {
              "id": 2,
              "firstName": "Серега_студ",
              "lastName": "Дяткович_студ",
              "middleName": "Батькович_студ",
              "male": true,
              "isRemote": true,
              "dob": "1992-05-21T09:27:17.018Z",
              "groupId": 1,
              "movedToGroupId": null,
              "email": "sergdiag19@gmail.com",
              "telegramId": 193042172,
              "historyTelegramId": 0,
              "telegramUserName": "SeregaGrey",
              "inactive": true,
              "employed": true,
              "paidLevel": 1,
              "companyId": 0,
              "startSalary": 0,
              "cvLinks": "string",
              "contacts": "string",
              "passwordHash": "string",
              "cityId": null,
              "userId": 1,
              "specialistLevel": 0,
              "note": "string",
              "registrationData": "string",
              "socialNetworkUserId": 0,
              "simpleName": "string",
              "englishLevel": 1,
              "mentorsNote": "string"
          },
          {
              "id": 3,
              "firstName": "Даня_студ",
              "lastName": "Шкурко_студ",
              "middleName": "Даниилович_студ",
              "male": true,
              "isRemote": true,
              "dob": "2000-11-17T09:27:17.018Z",
              "groupId": 1,
              "movedToGroupId": null,
              "email": "shkurkodan@gmail.com",
              "telegramId": 330127905,
              "historyTelegramId": 0,
              "telegramUserName": "danilashk",
              "inactive": true,
              "employed": true,
              "paidLevel": 1,
              "companyId": 0,
              "startSalary": 0,
              "cvLinks": "string",
              "contacts": "string",
              "passwordHash": "string",
              "cityId": null,
              "userId": 1,
              "specialistLevel": 0,
              "note": "string",
              "registrationData": "string",
              "socialNetworkUserId": 0,
              "simpleName": "string",
              "englishLevel": 1,
              "mentorsNote": "string"
          },
          {
              "id": 4,
              "firstName": "Кирилл_студ",
              "lastName": "Микулич_студ",
              "middleName": "Баткович_студ",
              "male": true,
              "isRemote": true,
              "dob": "1998-02-17T09:27:17.018Z",
              "groupId": 1,
              "movedToGroupId": null,
              "email": "mikulich.kir@gmail.com",
              "telegramId": 564540090,
              "historyTelegramId": 0,
              "telegramUserName": "Vaxi-Wuxi",
              "inactive": true,
              "employed": true,
              "paidLevel": 1,
              "companyId": 0,
              "startSalary": 0,
              "cvLinks": "string",
              "contacts": "string",
              "passwordHash": "string",
              "cityId": null,
              "userId": 1,
              "specialistLevel": 0,
              "note": "string",
              "registrationData": "string",
              "socialNetworkUserId": 0,
              "simpleName": "string",
              "englishLevel": 1,
              "mentorsNote": "string"
          }
      ],
       "videoStreams": [
           {
               "id": 1,
               "courseId": 1,
               "title": "support",
               "userId": 1,
               "link": "123.com",
               "lessonId": 1,
               "status": 1,
               "startDate": "2022-01-09T09:27:17.019Z",
               "type": 1
           }
       ]*/
}
