const express = require('express');
const Router = express.Router()
const  controller  = require('../controller/controller');
const passport = require('passport')

Router.get('/',controller.home)
Router.post('/user/create',controller.createUser)
Router.post('/user/login' ,controller.login)
module.exports =Router