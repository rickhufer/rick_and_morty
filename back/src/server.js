require("dotenv").config();
const express = require("express");
const router = require("./routes/index")
const cors = require('cors');

const PORT = process.env.PORT || 3001;
const server = express();

// const { json } = require("express");
server.use(express.json());
server.use(cors());
server.use("/", router);

server.listen(PORT, () => {
  console.log(`Server raised in port ${PORT}`);
})
