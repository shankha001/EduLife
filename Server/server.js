require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const path = require('path');

const passport = require('passport');
const PORT = process.env.PORT || 5000;
const methodOverride = require('method-override');
// const config = require('./config');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const crypto = require('crypto');

const users = require('./routes/auth/users');
const courses = require('./routes/courses');
const chats = require('./routes/chats');
const announcements = require('./routes/announcements');
const imageRouter = require('./routes/uploads');

//===MongoDB===//
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected '));
// mongoose.set('debug', true);

//===MIDDLEWARE===//
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

//===FILE HANDLING===//
// create storage engine
const storage = new GridFsStorage({
  url: process.env.MONGO_URI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads',
        };
        resolve(fileInfo);
      });
    });
  },
});

const upload = multer({ storage });

//===PASSPORT===//
app.use(passport.initialize());
require('./controllers/passport')(passport);

//===ROUTES===//

app.use('/auth/users', users);
app.use('/courses', courses);
app.use('/chats', chats);
app.use('/announcements', announcements);
app.use('/uploads', imageRouter(upload));

//==DEPLOY==//

// app.use(express.static(path.join(__dirname, 'build')));

// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

app.listen(PORT, () => {
  console.log(`Server started on PORT:${PORT}`);
});
