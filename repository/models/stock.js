const mongoose = require("mongoose");
const StockSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  category: Number,
  image: String,
  amount: Number,
});

const stringToObjectId = (id) => {
  return new mongoose.Types.ObjectId(id);
};

const persistence = mongoose.model("Stock", StockSchema);
module.exports = { persistence, stringToObjectId };
