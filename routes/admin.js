const express = require('express');

const router = express.Router();
const adminController = require('../controllers/admin');

router.get('/create-post', adminController.getCreatePost);

router.post('/create-post', adminController.postCreatePost);

router.get('/edit/:postId', adminController.getEditPost)

router.post('/edit/:postId', adminController.postEditPost)

router.get('/backlog', adminController.getBackLog);

module.exports = router;