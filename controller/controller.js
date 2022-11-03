const User = require('../models/user')

module.exports.home = function(req, res){
    // console.log(req.cookies);
    // res.cookie('user_id', 25);
    return res.render('home', {
        title: "Home"
    });
}

module.exports.createUser = async (req,res)=>{

    console.log('recieved data',req.body.username)
    
    const user= await User.findOne({name:req.body.username})

    if(!user){
        const usercreated=await User.create({
            name:req.body.username
        })

        if(usercreated){
            console.log('user has bean created in the databse')
            return res.redirect('back')
        }
    }
    res.redirect('back')
}

module.exports.login = async (req,res)=>{
    console.log('recieved',req.body)

    const user =await User.findOne({name:req.body.username})

    if(user){
        res.cookie('user',user._id)
        return  res.render('dashboard',{
            title:"dashboard"
        })
    }

    // if(req.isAuthenticated()){
    //     console.log('authenticated')
    //     return res.render('dashboard',{
    //         title:"dashboard"
    //     })
    // }
    console.log('not authenticated')
    return res.redirect('back')
}