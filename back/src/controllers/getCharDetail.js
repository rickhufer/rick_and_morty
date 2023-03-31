const axios = require("axios");
const { URL, KEY } = process.env;

const getCharDetail = (req, res) => {
  const { id } = req.params;

  axios
    .get(`${URL}/character/${id}?key=${KEY}`)
    .then((data) => {
      const { id, name, species, image, gender, origin } = data.data;
      res.status(200).json({ id, name, species, image, gender, origin });
    }).catch((error) => {
      res.status(500).json({ error: error.message })
    })

}
module.exports = getCharDetail;