const mongoose = require("mongoose");

const dbConection = async () => {
  try {
    await mongoose.connect(process.env.URL);
    console.log("DB connect....");
  } catch (err) {
    console.error(err);
  }
};

module.exports = { dbConection };
