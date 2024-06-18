const mongoose = require("mongoose");

/**
 * Esta función establece una conexión con la base de datos MongoDB.
 * Utiliza el ODM  Mongoose para conectarse a la base de datos.
 */
const dbConection = async () => {
  try {
    await mongoose.connect(process.env.URL);
    console.log("BD conectando...");
  } catch (err) {
    console.error(err);
  }
}; 


 
module.exports = { dbConection };
