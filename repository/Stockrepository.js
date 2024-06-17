const stock = require("./models/stock");

// crear
exports.create = async (stockModel) => {
  try {
    let newStock = await stock.persistence.create(stockModel);
    return newStock;
  } catch (err) {
    console.log(err)
  }
};
// obtener
exports.GetAll = async () => {
  try {
    let stocks = await stock.persistence.find({});
    return stocks;
  } catch (err) {
    console.log(err);
  }
};
// eliminar
exports.Delete = async (id) => {
  try {
    let idObject = stock.stringToObjectId(id);
    let StockDelete = await stock.persistence.deleteOne(idObject);
    return StockDelete;
  } catch (err) {
    console.log(err);
  }
};
// put
exports.Update = async (id, stockUpdate) => {
  try {
    let idObject = stock.stringToObjectId(id);
    let updateStock = await stock.persistence.findOneAndUpdate(
      idObject,
      stockUpdate,
    );
    return updateStock;
  } catch (err) {
    console.log(err);
  }
};
