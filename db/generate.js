// {
//     "users": [
//         {
//             "id": 1,
//             "name": "zaria Monahan",
//             "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/gusoto/128.jpg",
//             "phone": "619-888-5248"
//             "username": "zaria_monahan",
//             "email": "Barton41@yahoo.com",
//              "password": sdfgafghg
//             "department": "Engineering",

//         }

//     ]
// }

module.exports = function () {
    var faker = require("faker")
    var lodash = require("lodash")

    return {
        users: lodash.times(100, function (n) {
            return {
                id: n + 1,
                name: faker.name.findName(),
                avatar: faker.image.avatar(),
                phone: faker.phone.phoneNumber(),
                email: faker.internet.email(),
                password: faker.internet.password(),
                department: lodash.sample(["Customer Support", "Engineering", "Sales", "Marketing"])

            }
        })
    }

}