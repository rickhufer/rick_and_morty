const http = require("http");
const fs = require("fs")
const PORT = 3001;
const data = require("./utils/data")

http
  .createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const { url } = req;

    if (url.includes("rickandmorty/character/")) {
      const id = url.split("/").at(-1);
      const character = data.find(elem => elem.id == id);

      if (character) {
        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify(character))
      } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ error: "Character not found" }))
      }
    }

    res.writeHead(404, { "content-Type": "text/plain" });
    res.end("No existe la página ");
  }).listen(PORT, "localhost");