const router = require('express').Router();
const mid=require('../midelware/middlware')
const instaController = require("../controllers/instaController");
router.post('/register',instaController.add)
router.get('/getAll',instaController.get)
router.get('/user',mid.verifytoken,instaController.getuser)
router.post('/login',instaController.login)
router.get("/users", instaController.getAllUsers);
router.get("/posts", instaController.getAllPosts);
router.get("/comments", instaController.getAllComments);
router.get("/oneUser/:id", instaController.oneUser);
router.get("/onePost/:id", instaController.onePost);
router.post("/addUser",instaController.createUser);
router.post("/addPost",instaController.createPost);
router.post("/addComment",instaController.createComment);
router.put("/updateUserPhoto/:id",instaController.updateUserPhoto);
router.put("/updateUserBio/:id",instaController.updateUserBio);
router.put("/updateUserFollowers/:id",instaController.updateUserFollowers);
router.put("/updatePost/:id",instaController.updatePost);
router.put("/updatePostLike/:id",instaController.updatePost);
router.put("/updatePostDislike/:id",instaController.updatePost);
router.put("/updateComment/:id",instaController.updateComment);
router.put("/updateCommentLike/:id",instaController.updateCommentLike);
router.put("/updateCommentDislike/:id",instaController.updateCommentDislike);
router.delete("/deletePost/:id",instaController.deletePost);
router.delete("/deleteComment/:id",instaController.deleteComment);
module.exports = router;