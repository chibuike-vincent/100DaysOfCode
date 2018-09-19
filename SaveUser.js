const mongoose = require('mongoose');
const express = require('express');
const Promise = require('bluebird');
const bodyparser = require('body-parser');
const SaveUserschema = require('./SaveUserschema');
const app = express();

app.use((req,res,next) =>{
    res.header("Access-Control-Allow-Origin", "*"),
    res.header("Access-Control-Allow-Method", "GET,POST,PUT,DELETE"),
    res.header("Access-Control-Allow-Headers", "Content-Type, Accept")
    if(req.method === 'OPTIONS'){
        return res.end()
        
    }

    next()
    
})
mongoose.connect('mongodb://localhost:27017/Users', { useNewUrlParser: true })
.then(()=>console.log('connected to mongoDB'))
.catch(err =>console.log('Faile to connect to mongoDB', err))

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}))



app.post('/SaveUser',(req, res) =>{
    // let userinput = req.body.userinput;
    let {username, email, password} = req.body
    if(username === '' || email === '' || password === '' ){
        res.json({message: 'empty'})
    } 
    else {
        
        new SaveUserschema.saveUserID({
            username, 
            email, 
            password, 
        })
        .save()
        .then((result)=>{res.json({message: result})
    }).catch((error) =>console.log('error', error))
    }
})


app.get('/SaveUser', async (req, res) => {
   const userinfo =  await SaveUserschema.saveUserID.find()
    res.json(userinfo)
    
    console.log(userinfo)
});
app.listen(5000,() =>{console.log('app is running on port 5000')});