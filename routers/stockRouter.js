const express = require("express");
const stockRouter = express.Router();
const validator = require("./middleware/validator");
const {
  Create,
  Update,
  Delete,
  GetAll,
} = require("../controller/stockController.js");
stockRouter.use(express.json());

stockRouter.post("/", validator, Create);
stockRouter.get("/todos", GetAll);
stockRouter.delete("/:id", Delete);
stockRouter.put("/:id", validator, Update);

module.exports = stockRouter;
