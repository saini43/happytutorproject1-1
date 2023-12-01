const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const UserModel = require('./models/User'); // Changed the model name

const app = express();

app.use(express.json());
app.use(cors());

// Update MongoDB connection URI
const MONGODB_URI = 'mongodb+srv://pranavkumar97954:zlVxT7INPRW8Sjbi@cluster0.gi6fh6q.mongodb.net/akash?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.post('/login',(req,res) => {
  const {email,password} = req.body;
  UserModel.findOne({email:email})
  .then(user =>{
    if(user){
      if(user.password==password){
        res.json("Success")
      }else{
        res.json("Password is incorrect")
      }
    } else{
      res.json("No record exist")
    }
  })
})

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
