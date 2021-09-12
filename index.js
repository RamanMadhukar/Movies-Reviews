const express = require("express");
const dotenv = require("dotenv");
require('./db/conn')
const cors = require("cors");
const bodyParser = require("body-parser");
dotenv.config();
const app =  express();



//import Routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require('./routes/category');
const languageRoutes = require('./routes/language');
const movieRoutes = require('./routes/movie');
// const fileUpload = require('express-fileupload');
//app middlewares

app.use(bodyParser.json());
// app.use(fileUpload());

// if ((process.env.NODE_ENV = 'development')) {
//     app.use(cors({ origin: `http://localhost:3000` }));
// }


app.use(cors());


// Middlewares
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', categoryRoutes);
app.use('/api', languageRoutes);
app.use('/api', movieRoutes);


if (process.env.NODE_ENV === 'production') {
    const root = require('path').join(__dirname, 'client', 'build')
    app.use(express.static(root));
    console.log(root);
    app.get("*", (req, res) => {
    res.sendFile('index.html', { root });
})
} 



const port = process.env.PORT || 5000;
app.listen(port, (req, res) => {
    console.log(`App is running  on port ${port}`);
})