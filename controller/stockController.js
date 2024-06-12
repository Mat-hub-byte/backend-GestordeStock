const {
  CreateStock,
  GetAllStock,
  UpdateStock,
  DeleteStock,
} = require("../services/StockService");
exports.Create = async (req, res) => {
  try {
    let isCreate = await CreateStock(req.body);
    res.status(200).send(isCreate);
  } catch (err) {
    console.log(err);
    res.status(500).send(" internal server error ");
  }
};
exports.GetAll = async (req, res) => {
  try {
    let stocks = await GetAllStock();
    res.status(200).send(stocks);
  } catch (err) {
    console.log(err);
    res.status(500).send("internal server error");
  }
};
exports.Update = async (req, res) => {
  try {
    let id = req.params.id;
    let isUpdate = await UpdateStock(id, req.body);
    if (isUpdate.id == null) {
      res.status(400).send(isUpdate);
    } else {
      res.status(200).send(isUpdate);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("internal server error ");
  }
};
exports.Delete = async (req, res) => {
  try {
    let id = req.params.id;
    let isDelete = await DeleteStock(id);
    if (isDelete.value == true) {
      res.status(200).send(isDelete.msg);
    } else {
      res.status(400).send(isDeguete.msg);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("internal server error  ");
  }
};
