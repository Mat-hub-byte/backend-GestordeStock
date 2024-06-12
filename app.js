const express = require("express");
const { dbConection } = require("./db/mongoDB.js");
const stockRouter = require("./routers/stockRouter.js");
const cors = require("cors");
const app = express();

dbConection();
app.use(cors());
app.use("/api/v1", stockRouter);

app.listen(process.env.PORT, () => {
  console.log("start server in http://localhost:3000");
});
