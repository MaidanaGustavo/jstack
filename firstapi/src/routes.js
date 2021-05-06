const userController = require('./controllers/UserController')
module.exports = [
    {
        endpoint : '/users',
        method: 'GET',
        handler: userController.listUsers
    },
]