var axios = require('axios')
var https = require('https')

/*public const string Superadmin = "superadmin";
public const string MentorsSupervisor = "mentors-supervisor";
public const string DeveloperMentor = "developer-mentor";
public const string Management = "management";
public const string MentorFreelancer = "mentor-freelancer";
public const string Lecturer = "lecturer";
public const string Ghost = "ghost"; // new user*/

const roles = [
    {
        'id': 1,
        'name': 'superadmin'
    },
    {
        'id': 2,
        'name': 'mentor-freelancer'
    }
]
const user_dasha =  {
    'id': 2,
    'firstName': 'Dasha',
    'lastName': 'PokaNeIl\'enkova',
    'telegramId': 11,
    'telegramUserName': '@dasha',
    'roleId': 2
}

let account_dasha = {
    'id': 2,
    'login': 'dasha',
    'password': 'qwerty',
    'userId': 2,
};

const data = {
    'roles': roles,
    'users': [
        {
            'id': 1,
            'firstName': 'Valera',
            'lastName': 'Il\'enkov',
            'telegramId': 10,
            'telegramUserName': '@valera',
            'roleId': 1
        },
        user_dasha
    ],
    'accounts': [
        {
            'id': 1,
            'login': 'valera',
            'password': '123',
            'userId': 1,
        },
        account_dasha
    ],
 /*   'courses': [
        {
            'id': 1,
            'title': 'front-end'
        }
    ],
    'courseSettings': [
        {
            'id': 1,
            'courseId': 1,
            'startDate': '2022-01-03T18:29:03.283Z',
            'maxStudentsCount': 10,
            'priceBYN': 1000,
            'priceEUR': 300,
            'studentsEURPercent': 10,
            'studentsBYNPercent': 90
        }
    ],
    'groups': [
        {
            'id': 1,
            'courseId': 1,
            'title': 'samurai summer',
            'courseSettingId': 1
        }
    ],
    'students': [
        {
            'id': 1,
            'firstName': 'ValraStud',
            'lastName': 'IllenkovStud',
            'middleName': 'Igorevich',
            'male': true,
            'isRemote': true,
            'dob': '2022-01-03T18:29:03.284Z',
            'groupId': 1,
            'movedToGroupId': null,
            'email': 'string',
            'telegramId': 0,
            'historyTelegramId': 0,
            'telegramUserName': 'string',
            'inactive': true,
            'employed': true,
            'paidLevel': 0,
            'companyId': null,
            'startSalary': 0,
            'cvLinks': 'string',
            'contacts': 'string',
            'passwordHash': 'string',
            'cityId': null,
            'userId': 0,
            'specialistLevel': 0,
            'note': 'string',
            'registrationData': 'string',
            'socialNetworkUserId': 0,
            'simpleName': 'string',
            'englishLevel': 0,
            'mentorsNote': 'string'
        }
    ]*/
}


const instance = axios.create({
    baseURL: 'https://labs-api.testing.it-kamasutra.com',
    // baseURL: 'https://localhost:44380',
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
    })
});

const tests = async () => {
    console.log(data)
    try {
        const res = await instance.post('/api/testing/data/generate', data)
        console.log(res.data)
    } catch (err) {
        console.log(err)
    }

    let res = await instance.put('/api/users/2', {
        "login": addNew(account_dasha.login),
        "firstName": addNew(user_dasha.firstName),
        "lastName": addNew(user_dasha.lastName),
        "telegramId": user_dasha.telegramId + 100,
        "telegramUserName": addNew(user_dasha.telegramUserName),
        "roleId": 2,
        "password": null
    })
    if (res.data.resultCode !== 0) {
        console.log(res.data)
        throw new Error('не сохарнился юзер')
    }

    res = await instance.get('/api/users/2')
    console.log(res.data);
    console.log(res.data.login === addNew(account_dasha.login));
    console.log(res.data.firstName === addNew(user_dasha.firstName));
    console.log(res.data.telegramId === user_dasha.telegramId + 100);
}

function addNew(original) {
    return original + "_new"
}



tests();
