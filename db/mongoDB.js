const mongoose = require("mongoose");

//conexion con la base de datos
const dbConection = async () => {
  try {
    await mongoose.connect(process.env.URL);
    console.log("DB connect....");
  } catch (err) {
    console.error(err);
  }
};


//destructuring 
module.exports = { dbConection };
