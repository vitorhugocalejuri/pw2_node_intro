const User = require('../models/User')
const bcrypt = require('bcryptjs')

module.exports = class UserController{
    static loguin(req, res){
        res.render('auth/login')
    }
}