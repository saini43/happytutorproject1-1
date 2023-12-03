const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const UserModel = require('./models/User');

//Video section
const multer = require('multer');
const VideoModel = require('./models/Video');
const sanitizeFilename = require('sanitize-filename');

const app = express();

app.use(express.json());
app.use(cors());

// Update MongoDB connection URI
const MONGODB_URI = 'mongodb+srv://pranavkumar97954:zlVxT7INPRW8Sjbi@cluster0.gi6fh6q.mongodb.net/akash?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI, {
  //useNewUrlParser: true,
  //useUnifiedTopology: true,
  
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email })
    .then(user => {
      if (user) {
        if (user.password == password) {
          // Send user information in the response
          res.json({ status: "Success", user: user });
        } else {
          res.json({ status: "Password is incorrect" });
        }
      } else {
        res.json({ status: "No record exists" });
      }
    })
    .catch(error => {
      console.error('MongoDB Query Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});

app.post('/register', (req, res) => {
  const { name, email, password } = req.body;

  UserModel.create({ name, email, password })
    .then((user) => {
      console.log('User registered:', user);
      res.json({ message: 'Registration successful' });
    })
    .catch((err) => {
      console.error('Error creating user:', err);
      res.status(500).json({ error: 'Internal server error' });
    });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//Video
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'videos'); // Set the destination to the 'videos' folder
  },
  filename: (req, file, cb) => {
    cb(null,file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post('/upload-video', upload.single('video'), async (req, res) => {
  try {
    const { originalname: originalFilename } = req.file;
    const { description } = req.body;

    // Sanitize the filename
    const sanitizedFilename = sanitizeFilename(originalFilename);

    // Create a new VideoModel instance
    const video = new VideoModel({ filename: sanitizedFilename, description });

    // Save the video details to the database
    await video.save();

    res.json({ status: 'Video upload successful' });
  } catch (error) {
    console.error('Upload Video Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.use('/videos', express.static('videos'));

app.get('/get-videos', async (req, res) => {
  try {
    const videos = await VideoModel.find({}).exec();
    res.json(videos);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});