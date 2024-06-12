const Stockrepository = require("../repository/Stockrepository");

exports.CreateStock = async (stock) => {
  try {
    let isCreate = await Stockrepository.create(stock);
    return { msg: "create object", id: isCreate.id };
  } catch (err) {
    console.log(err);
  }
};

exports.GetAllStock = async () => {
  try {
    return Stockrepository.GetAll();
  } catch (err) {
    console.log(err);
  }
};

exports.DeleteStock = async (id) => {
  try {
    if (id.length == 24) {
      let isDelete = await Stockrepository.Delete(id);
      if (isDelete.acknowledged == true) {
        return { msg: "record successfully deleted ", value: true };
      } else {
        return { msg: "error when deleting a product ", value: false };
      }
    } else {
      return { msg: "invalid id ", value: false };
    }
  } catch (err) {
    console.log(err);
  }
};

exports.UpdateStock = async (id, stock) => {
  try {
    if (id.length == 24) {
      let isUpdate = await Stockrepository.Update(id, stock);
      return { msg: "updated resource ", id: isUpdate.id };
    } else {
      return { msg: "invalid id ", id: null };
    }
  } catch (err) {
    console.log(err);
  }
};
