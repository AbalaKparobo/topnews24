const express = require('express');
const router = express.Router();

const blogController = require('../controllers/blog')

router.get('/', blogController.index);

router.get('/post/:postId', blogController.singlePost)

router.get('/post/:page', blogController.selectedPage)

module.exports = router;