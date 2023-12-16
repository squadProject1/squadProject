const router = require('express').Router();
const controller = require("../controllers/controllers");

router.get("/users", controller.getAllUsers);
router.get("/posts", controller.getAllPosts);
router.get("/comments", controller.getAllComments);
router.get("/oneUser/:id", controller.oneUser);
router.get("/onePost/:id", controller.onePost);
//router.get("/oneComment/:id", controller.oneComment);
router.post("/addUser",controller.createUser);
router.post("/addPost",controller.createPost);
router.post("/addComment",controller.createComment);
router.put("/updateUserPhoto/:id",controller.updateUserPhoto);
router.put("/updateUserBio/:id",controller.updateUserBio);
router.put("/updateUserFollowers/:id",controller.updateUserFollowers);
router.put("/updatePost/:id",controller.updatePost);
router.put("/updatePostLike/:id",controller.updatePost);
router.put("/updatePostDislike/:id",controller.updatePost);
router.put("/updateComment/:id",controller.updateComment);
router.put("/updateCommentLike/:id",controller.updateCommentLike);
router.put("/updateCommentDislike/:id",controller.updateCommentDislike);
router.delete("/deletePost/:id",controller.deletePost);
router.delete("/deleteComment/:id",controller.deleteComment);
module.exports = router;