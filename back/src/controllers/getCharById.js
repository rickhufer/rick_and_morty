const axios = require("axios");
const { URL, KEY } = process.env;

const getCharById = (res, ID) => {
  axios
    .get(`${URL}/character/${ID}?key=${KEY}`)
    .then((response) => {
      const { id, image, name, gender, species } = response.data;
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ id, image, name, gender, species }));
    })
    .catch((error) => {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end(error.message);
    });
}
module.exports = getCharById;