const axios = require("axios");
const URL = "https://be-a-rym.up.railway.app/api";
const KEY = "b682d44ea194.e61171acf8c72545c21e";

const getCharDetail = (res, ID) => {
  axios
    // fetch(`${URL}/character/${detailId}?key=${KEY}`)
    .get(`${URL}/character/${ID}?key=${KEY}`)
    .then((response) => {
      const { image, name, gender, status, origin, species } = response.data;
      res.writeHead(200, { "Content-Type": "application/json" })
      res.end(JSON.stringify({ image, name, gender, status, origin, species }))
    })
    .catch((error) => {
      res.writeHead(500, { "Content-Type": "text/plain" })
      res.end(error.message)
    });
}
module.exports = getCharDetail;