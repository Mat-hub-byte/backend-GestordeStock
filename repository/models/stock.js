const mongoose = require("mongoose");

const StockSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  category: Number,
  image: String,
  amount: Number,
});

/**
 * Convierte un ID en formato string a un ObjectId de MongoDB.
 * @param {string} id El ID en formato string a convertir.
 * @returns {mongoose.Types.ObjectId} El ObjectId correspondiente.
 */
const stringToObjectId = (id) => {
  return new mongoose.Types.ObjectId(id);
};

/**
 * Modelo de Mongoose para la colección "Stock".
 * @typedef {Object} StockModel
 */
const persistence = mongoose.model("Stock", StockSchema);


module.exports = { persistence, stringToObjectId };
