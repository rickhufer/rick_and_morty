const http = require("http");
const PORT = 3001;
const getCharById = require("./controllers/getCharById");
const getCharDetail = require("./controllers/getCharDetail");

http
  .createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const { url } = req;
    if (url.includes("onsearch")) {
      console.log(url);
      const id = url.split("/").at(-1);
      getCharById(res, id);
    }
    if (url.includes("detail")) {
      const id = url.split("/").at(-1);
      getCharDetail(res, id);
    }

  }).listen(PORT, "localhost");












