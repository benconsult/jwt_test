const CustomAPIError = require('../errors/custom-error')

const login = async (req,res)=>{
    const {username, password} = req.body
    if(!username || !password){
        throw new CustomAPIError('please provide a username or password', 400)
    }
    //console.log(username,password);
    res.send('Fake login/Register/Signup Route')
}

const dashboard = async(req,res)=>{
    const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).json({msg:`Hello, Ben Bruce`, secret:`Here is your lucky Number ${luckyNumber}`})
}

module.exports = {login, dashboard}