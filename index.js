
//imports 
const express = require('express')
const db = require('./config/mongoose');
const expressLayouts = require('express-ejs-layouts');

//firmwares
const app = express();

//middlewares
app.use(expressLayouts);
app.use(express.static('./assets'));

// use express router
app.use('/', require('./routes'));

app.set('view engine', 'ejs');
app.set('views', './views');


//serverlistening 
app.listen(8001, (err)=>{
    if(err){
        console.log('error occured while listening',err);
    }
    console.log(`server listening at port ${8001}`)
})