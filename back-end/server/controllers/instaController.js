const {connection} = require("../database/index.js");
const jwt=require('jsonwebtoken')
const db=require('../database/index.js')
const JWT_KEY='bedoui123'
const add = async (req, res) => {
    const {userName,userEmail}=req.body;
  
    try {
      if (!(userName && userEmail)) {
        return res.status(400).send('Necessary fields are missing');
      }
  
      const [existingUser] = await connection.promise().query('SELECT * FROM user WHERE userEmail = ?',[userEmail]);
 
      if (existingUser.length===0) {
        await connection.promise().query('INSERT INTO user SET ?', req.body);
        return res.status(200).send('User added successfully');
      } else {
        return res.status(400).send('User already exists');
      }
    } catch (err) {
       res.status(500).send('Internal Server Error');
    }
  };
  
const get=(req,res)=>{
    connection.query(`select * from user`,(err,result)=>{
        err?res.json(err):res.json(result)
    })
}
const login=(req,res)=>{
   
    const {email,password}=req.body
    if(!(email&&password)){
       
        return res.status(400).send('u have to fill all content')
    }
    

    connection.query(`select * from user where userEmail='${req.body.email}' and userPassword=${req.body.password}`,(err,result)=>{
        if(err) return res.status(400).send('user not found')
        else if (result.length===0) return res.send('user not found')
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
    add,get,login,getuser,getAllUsers : (req, res)=>{
      db.getAllUsers((err,result)=>{
         if(err){
             res.status(500).send(err)
         }
         res.status(200).json(result)
      })
     },
     updateUserPhoto:(req, res)=>{
         const newPic={
             userPic:req.body.userPic
         }
         console.log(req.body);
         db.updatePhoto([newPic,req.params.id],(err,result)=>{
             if(err){
                 res.status(500).send(err)
             }
             res.status(200).json(result)
         })
     },
     updateUserBio:(req, res)=>{
         const newBio={
             userPic:req.body.userBio
         }
         db.updateBio([newBio,req.params.id],(err,result)=>{
             if(err){
                 res.status(500).send(err)
             }
             res.status(200).json(result)
         })
     },
     updateUserFollowers:(req, res)=>{
         const newFollowers={
             userPic:req.body.userFollowers
         }
         db.updateFollowers([req.body.userFollowers,req.params.id],(err,result)=>{
             if(err){
                 res.status(500).send(err)
             }
             res.status(200).json(result)
         })
     },
     
     oneUser : (req, res)=>{
         console.log(req.params);
         db.oneUserr(req.params.id,(err,result)=>{
             if(err){
                 res.status(500).send(err)
             }
             res.status(200).json(result)
         })
     },
     createUser:(req,res)=>{
         const newUser={
             "userName": req.body.userName,
             "userBirth": req.body.userBirth,
             "userEmail": req.body.userEmail,
             "userPic": req.body.userPic,
             "userBio": req.body.userBio,
             "userGender": req.body.userGender,
             "userFollowers": req.body.userFollowers,
             "userStatus": req.body.userStatus,
             "userPassword": req.body.userPassword
           }
           console.log(newUser);
         db.createUser(newUser,(err,result)=>{
             if(err){
                 res.status(500).send(err)
             }
             res.status(200).json(result)
         })
     },
     //-----------------------------------------------------
     getAllPosts : (req, res)=>{
         db.getAllPosts((err,result)=>{
            if(err){
                res.status(500).send(err)
            }
            res.status(200).json(result)
         })
        },
        updatePost:(req, res)=>{
            db.updatePost([req.body,req.params.id],(err,result)=>{
                if(err){
                    res.status(500).send(err)
                }
                res.status(200).json(result)
            })
        },
        updatePostLike:(req, res)=>{
         db.updatePostLike([req.body.like,req.params.id],(err,result)=>{
             if(err){
                 res.status(500).send(err)
             }
             res.status(200).json(result)
         })
     },
     updatePostDislike:(req, res)=>{
         db.updatePostDislike([req.body.dislike,req.params.id],(err,result)=>{
             if(err){
                 res.status(500).send(err)
             }
             res.status(200).json(result)
         })
     },
         onePost : (req, res)=>{
            db.onePost(req.params.id,(err,result)=>{
                if(err){
                    res.status(500).send(err)
                }
                res.status(200).json(result)
            })
        },
         createPost:(req,res)=>{
             const newPost={
                 title :req.body.title,
                 date :req.body.date,
                 like:req.body.like,
                 postscol:req.body.postscol,
                 dislike :req.body.dislike,
                 content :req.body.content
             }
            db.createPost(newPost,(err,result)=>{
                if(err){
                    res.status(500).send(err)
                }
                res.status(200).json(result)
            })
        },
         deletePost:(req,res)=>{
         db.deletePost(req.params.id,(err,result)=>{
             if(err){
                 res.status(500).send(err)
             }
             res.status(200).json(result)
         })
     },
     //------------------------------------------------------------
     getAllComments : (req, res)=>{
         db.getAllComments((err,result)=>{
            if(err){
                res.status(500).send(err)
            }
            res.status(200).json(result)
         })
        },
        updateComment:(req, res)=>{
            db.updateComment([req.body,req.params.id],(err,result)=>{
                if(err){
                    res.status(500).send(err)
                }
                res.status(200).json(result)
            })
        },
        updateCommentLike:(req, res)=>{
         db.updateCommentLike([req.body.like,req.params.id],(err,result)=>{
             if(err){
                 res.status(500).send(err)
             }
             res.status(200).json(result)
         })
     },
        updateCommentDislike:(req, res)=>{
         db.updateCommentDislike([req.body.dislike,req.params.id],(err,result)=>{
             if(err){
                 res.status(500).send(err)
             }
             res.status(200).json(result)
         })
     },
         createComment:(req,res)=>{
             const newComment={
                 title :req.body.title,
                 date :req.body.date,
                 like:req.body.like,
                 dislike :req.body.dislike,
                 content :req.body.content,
             }
            db.createComment(newComment,(err,result)=>{
                if(err){
                    res.status(500).send(err)
                }
                res.status(200).json(result)
            })
        },
         deleteComment:(req,res)=>{
         db.deleteComment(req.params.id,(err,result)=>{
             if(err){
                 res.status(500).send(err)
             }
             res.status(200).json(result)
         })
     },
     
}