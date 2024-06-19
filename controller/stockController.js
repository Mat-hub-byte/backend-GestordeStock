const {
  CreateStock,
  GetAllStock,
  UpdateStock,
  DeleteStock,
  GetStockById
} = require("../services/StockService");

/**
 * Exportación del método Create que maneja la creación de un nuevo registro de stock.
 * @param {*} req El objeto req representa la solicitud HTTP que se recibe en el servidor. Ej: ´req.body´, ´req.headers´, ´req.method´
 * @param {*} res El objeto res representa la respuesta HTTP que el servidor enviará al cliente. Ej: ´res.statuscode´, ´res.send´, ´res.sendFile´
 */
exports.Create = async (req, res) => {
  try {
    let isCreate = await CreateStock(req.body);
    res.status(200).send(isCreate);
  } catch (err) {
    console.log(err);
    res.status(500).send("500: Error Interno del Servidor :(");
  }
};

/**
 * Exportación del método GetAll que maneja la obtención de todos los registros de stock.
 * @param {*} req 
 * @param {*} res 
 */
exports.GetAll = async (req, res) => {
  try {
    let stocks = await GetAllStock();
    res.status(200).send(stocks);
  } catch (err) {
    console.log(err);
    res.status(500).send("500: Error Interno del Servidor :(");
  }
};

/**
 * Exportación del método Update que maneja la actualización de un registro de stock existente.
 * @param {*} req 
 * @param {*} res 
 */
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
    res.status(500).send("500: Error Interno del Servidor :(");
  }
};

/**
 * Exportación del método Delete que maneja la eliminación de un registro de stock.
 * @param {*} req 
 * @param {*} res 
 */
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
    res.status(500).send("500: Error Interno del Servidor :(");
  }
};

/**
 * Exportación del método GetById que maneja la obtención de un registro de stock por ID.
 */
exports.GetById = async (req, res) => {
  try {
    let id = req.params.id;
    let stock = await GetStockById(id);
    if (!stock) {
      res.status(404).send("404: No se encontró el producto en el stock");
    } else {
      res.status(200).send(stock);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("500: Error Interno del Servidor :(");
  }
};

