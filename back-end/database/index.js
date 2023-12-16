const mysql = require("mysql2");
const connection = require("./config.js") ;

connection.connect((err) => {
  if(err) console.log(err)
 else console.log("Welcome to your Database");
});

 module.exports={
  getAllUsers:(callback)=>{
  const sql='SELECT * FROM `user`'
  connection.query(sql,function(error,result){
    callback(error,result)
  })
 },
 createUser:(obj , callback)=>{
  console.log(obj);
  const sql='INSERT INTO `user` SET ?'
  connection.query(sql,obj,(err,res)=>{
    callback(err,res)
  })
 },
 updatePhoto:(obj , callback)=>{
  const sql='UPDATE `user` SET ? WHERE id=?'
  connection.query(sql,obj,function(err,res){
    callback(err,res)
  })
 },
 updateBio:(obj , callback)=>{
  const sql='UPDATE FROM `user`SET ? WHERE id=?'
  connection.query(sql,obj,function(err,res){
    callback(err,res)
  })
 },
 oneUserr:(obj , callback)=>{
  const sql='SELECT * FROM `user` WHERE id=?'
  connection.query(sql,obj,function(err,res){
    callback(err,res)
  })
 },
//-------------------------------------------------------------------
getAllPosts:(callback)=>{
  const sql='SELECT * FROM `posts`'
  connection.query(sql,function(err,res){
    callback(err,res)
  })
 },
 createPost:(obj , callback)=>{
  const sql='INSERT INTO `posts` SET ?'
  connection.query(sql,obj,function(err,res){
    callback(err,res)
  })
 },
 updatePost:(obj , callback)=>{
  const sql='UPDATE `posts` SET ? WHERE id=?'
  connection.query(sql,obj,function(err,res){
    callback(err,res)
  })
 },
 updatePostLike:(obj , callback)=>{
  const sql='UPDATE `posts` SET ? WHERE id=?'
  connection.query(sql,obj,function(err,res){
    callback(err,res)
  })
 },
 updatePostDislike:(obj , callback)=>{
  const sql='UPDATE `posts` SET ? WHERE id=?'
  connection.query(sql,obj,function(err,res){
    callback(err,res)
  })
 },
 onePost:(obj , callback)=>{
  const sql='SELECT * FROM `posts` WHERE id=?'
  connection.query(sql,obj,function(err,res){
    callback(err,res)
  })
 },
 deletePost:(callback)=>{
  const sql='DELETE FROM `posts` WHERE id=?'
  connection.query(sql,function(err,res){
    callback(err,res)
  })
 },
 //------------------------------------------------------------------------------
 getAllComments:(callback)=>{
  const sql='SELECT * FROM `comments`'
  connection.query(sql,function(err,res){
    callback(err,res)
  })
 },
 createComment:(obj , callback)=>{
  const sql='INSERT INTO `comments` SET ?'
  connection.query(sql,obj,function(err,res){
    callback(err,res)
  })
 },
 updateComment:(obj , callback)=>{
  const sql='UPDATE `comments` SET ? WHERE id=?'
  connection.query(sql,obj,function(err,res){
    callback(err,res)
  })
 },
 updateCommentLike:(obj , callback)=>{
  const sql='UPDATE `comments`SET ? WHERE id=?'
  connection.query(sql,obj,function(err,res){
    callback(err,res)
  })
 },
 updateCommentDislike:(obj , callback)=>{
  const sql='UPDATE `comments` SET ? WHERE id=?'
  connection.query(sql,obj,function(err,res){
    callback(err,res)
  })
 },
 deleteComment:(callback)=>{
  const sql='DELETE FROM `comments` WHERE id=?'
  connection.query(sql,function(err,res){
    callback(err,res)
  })
 },
}