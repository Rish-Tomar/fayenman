const express = require('express');
const Router = express.Router()
const  controller  = require('../controller/controller');


Router.get('/',controller.home)

module.exports =Router