const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const bodyParser = require('body-parser');

const User = require('./models/user');

const path = require('path');

const blogRoute = require('./routes/blog')
const adminRoute = require('./routes/admin');
const erorrController = require('./controllers/error');

// const DB_URI = DB_URI;
const DB_URI = 'mongodb://localhost/softnews24'

const app = express();
const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now().toString() + '-' + file.originalname)
    }
});

const fileFilter = (req, file, cb) => {
        if(file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
            return cb(null, true);
        } else { 
            return cb(null, false); 
        }
    }


app.use(multer({
    storage: fileStorage,
    fileFilter: fileFilter
    // dest: 'uploads',
}).single('image'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use('uploads', express.static(path.join(__dirname, 'uploads')));
app.use(bodyParser.urlencoded({ extended: true }));

 app.use(blogRoute);
 app.use('/admin', adminRoute);
 app.use(erorrController.error404);

 mongoose.connect(DB_URI,  { useNewUrlParser: true })
 .then(result => {
     return User.find()
     .then(user => {
         if(user.length < 1) {
            const user = new User({
                username: 'abala',
                email: 'test@test.com'
            })
            console.log('created one user')
            return user.save()
         } else {
             return user;
         }

     })
     .catch(err => console.log(err))
})
.then(result => {
    console.log('Database Connection Completed');
    app.listen(3000);
})
.catch(err => console.log(err));