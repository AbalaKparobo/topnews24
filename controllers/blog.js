const Draft = require('../models/draft');

exports.index = (req, res, next) => {
    Draft.find()
     .then(result => {
        //  console.log(result)
         res.render('blog/index', {posts: result});
        })
     .catch(err => console.log(err))
}
exports.singlePost = (req, res, next) => {
    const postId = req.params.postId
    Draft.findOne({_id: postId})
     .then(post => {
         if(!post) {
             return res.status(404).render('error404');
         }
         res.render('blog/single-post', {post: post});
     })
     .catch(err => console.log(err))
}

exports.selectedPage = (req, res, next) => {
    // let page = req.params.page
}