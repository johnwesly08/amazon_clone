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