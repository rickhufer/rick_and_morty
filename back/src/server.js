require("dotenv").config();
const PORT = process.env.PORT || 3001;
const router = require("./routes/index")
const cors = require('cors');

const express = require("express");
const { json } = require("express");
const server = express();
server.use(cors());
server.use(json());
server.use("/", router);


server.listen(PORT, () => {
  console.log(`Server raised in port ${PORT}`);
})
