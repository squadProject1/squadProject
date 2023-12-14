const {connection} = require("../database/index.js");
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
module.exports={
    add,get
}