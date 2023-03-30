require("dotenv").config();
const PORT = process.env.PORT || 3001;
const router = require("./routes/index")
const cors = require('cors');

const express = require("express");
const { json } = require("express");
const server = express();
server.use(json());
server.use(cors());
server.use("/", router);


server.listen(PORT, () => {
  console.log(`Server raised in port ${PORT}`);
})



// const getCharById = require("./controllers/getCharById");
// const getCharDetail = require("./controllers/getCharDetail");

// http
//   .createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     const { url } = req;
//     if (url.includes("onsearch")) {
//       console.log(url);
//       const id = url.split("/").at(-1);
//       getCharById(res, id);
//     }
//     if (url.includes("detail")) {
//       const id = url.split("/").at(-1);
//       getCharDetail(res, id);
//     }

//   }).listen(PORT, "localhost");
