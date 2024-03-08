const mongoose = require("mongoose");
// require("dotenv").config();
const dotenv = require('dotenv')
dotenv.config({path: 'studnot_backend/.env'})

exports.connect = () => {
  mongoose
    .connect(process.env.MONGODB_URL, {
      // useNewUrlParser: true,
      useUnifiedTopology: true,
    })
   .then(() => console.log("DB Connected Successfully"))
    .catch((error) => {
      console.log("DB coonection Failed");
      console.error(error);
      process.exit(1);
    });
};

