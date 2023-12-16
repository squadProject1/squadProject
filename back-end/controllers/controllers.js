const db = require("../database/index");

module.exports={
    getAllUsers : (req, res)=>{
        console.log('getallusers works')
 db.getAllUsers((err,result)=>{
    if(err){
       
        res.status(500).send(err)
    }
    res.status(200).send(result)
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
    console.log(req.params)
    const newBio={
        userBio:req.body.userBio
    }
    db.updateBio([newBio,req.params.id],(err,result)=>{
        if(err){
            res.status(500).send(err)
        }
        else res.status(200).json(result)
    })
},
updateUserFollowers:(req, res)=>{
    const userFollowers={
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
            date :'2023-12-31',
            like:0,
            postscol:0,
            dislike :0,
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
