require("dotenv").config();
const express = require("express");
const router = require("./routes/index")
const cors = require('cors');

const PORT = process.env.PORT || 3001;
const server = express();
const { sequelize } = require("./DB_connection");

// const { json } = require("express");
server.use(express.json());
server.use(cors());
server.use("/", router);

sequelize
  // .sync({ alter: true })
  .sync({ force: true })
  .then(() => {
    server.listen(PORT, () => {
      console.log("Listening on port", PORT);
    });
  })
  .catch((err) => console.log(err));
