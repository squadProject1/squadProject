const {connection} = require("../database/index.js");
const jwt=require('jsonwebtoken')
const JWT_KEY='bedoui123'
const add=(req,res)=>{
    connection.query(`insert into user set ?`,req.body,(err,result)=>{
        err?res.json(err):res.json(result)
    })
 
}
const get=(req,res)=>{
    connection.query(`select * from user`,(err,result)=>{
        err?res.json(err):res.json(result)
    })
}
const login=(req,res)=>{
   
    const {email,password}=req.body
    if(!(email&&password)){
       
        return res.send('u have to fill all content')
    }
    

    connection.query(`select * from user where userEmail='${req.body.email}' and userPassword=${req.body.password}`,(err,result)=>{
        if(err) return res.send('user not found')
        const token=jwt.sign({id:result[0].id},JWT_KEY,{expiresIn:'10h'})
        res.json({result,token})
        
       
         })
}

const getuser=(req,res)=>{
    connection.query(`select * from user where id=${req.id}`,(err,result)=>{
        err?res.json(err):res.json(result)
    })


    
}
module.exports={
    add,get,login,getuser
}