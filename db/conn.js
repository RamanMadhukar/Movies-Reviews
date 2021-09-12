const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(process.env.DATABASE, {
    useCreateIndex:true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false 
}).then(() => {
    console.log("Database Connected");
}).catch((e) => {
    console.log("database Not Connected");
})