
//imports 
const express = require('express')
const db = require('./config/mongoose');

const expressLayouts = require('express-ejs-layouts');
const session =require('express-session')

const passport = require('passport')
const passportLocal= require('./config/passport-local');
//firmwares
const app = express();

//middlewares
app.use(express.urlencoded())
app.use(expressLayouts);
app.use(express.static('./assets'));

// use express router


app.set('view engine', 'ejs');
app.set('views', './views');


app.use(session({
    name:'fayenman',
    secret:'fayenman',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000*60*50)
    },
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(passport.setAuthenticatedUser)

app.use('/', require('./routes'));

//serverlistening 
app.listen(8001, (err)=>{
    if(err){
        console.log('error occured while listening',err);
    }
    console.log(`server listening at port ${8001}`)
})