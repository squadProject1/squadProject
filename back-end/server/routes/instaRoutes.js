const router = require('express').Router();
const instaController = require("../controllers/instaController");
router.post('/addUser',instaController.add)
router.get('/getAll',instaController.get)
module.exports = router;