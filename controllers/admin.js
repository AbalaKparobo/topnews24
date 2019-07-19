const Draft = require('../models/draft');
exports.getCreatePost = (req, res, next) => {
    res.render('admin/create-post', {
        editing: false
    });
}

exports.postCreatePost = (req, res, next) => {
    const title = req.body.title;
    const image = req.file;
    const content = req.body.content;
    const draft = new Draft({
        title: title,
        imageUrl: image.path,
        content: content
    });
    return draft.save()
    .then(result => {
        res.redirect('/admin/backlog');
    })
    .catch(err => console.log(err))
}

exports.getEditPost = (req, res, next) => {
    const postId = req.params.postId
    Draft.findOne({_id: postId})
     .then(post => {
         res.render('admin/create-post', {
             post: post,
             editing: !!postId
         });
     })
     .catch(err => console.log(err))
}

exports.postEditPost = (req, res, next) => {
    const postId = req.params.postId
    let foundPost;
    Draft.findOne({_id: postId})
     .then( post => {
         foundPost = post;
         const title = req.body.title
         const content = req.body.content;
         const image = req.file;
         if(req.file) {foundPost.imageUrl = image.path}
         foundPost.title = title;
         foundPost.content = content;
         console.log(foundPost);
         return foundPost.save()
     })
     .then(result => {
         res.status(302).redirect('/post/' + result._id);
     })
     .catch(err => console.log(err))
}

exports.getBackLog = (req, res, next) => {
    Draft.find()
      .then(savedPosts => {
        res.render('admin/backlog.ejs', {posts: savedPosts});
      })
      .catch(err => console.log(err));
}