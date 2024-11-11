const express = require('express');
const app = express();
const { default: mongoose } = require('mongoose');

const cors = require('cors');

require('dotenv').config();
const {MONGODB_URI, PORT} = process.env;

app.use(express.json({extended: false}));
app.use(cors({origin: true, Credential: true}));

mongoose.connect(MONGODB_URI)
    .then(() => {
        app.listen(PORT, () => console.log(`Database connected successfully\nServer was listening in http://localhost:${PORT}`));
    }).catch((e) => console.log(e));

// app.use('/', async(req,res) => {
//     res.status(200).json({'message': "Hello World"});
// }) 
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to serve static files from the client build directory
app.use(express.static(path.join(__dirname, 'client/build')));

// Route all other requests to the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
