const axios = require("axios");
const { URL, KEY } = process.env;

const getCharById = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await axios.get(`${URL}/character/${id}?key=${KEY}`)
    const { name, species, image, gender } = data.data;
    res.status(200).json({ id, name, species, image, gender });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

  // axios.get(`${URL}/character/${id}?key=${KEY}`)
  // .then((data) => {
  //   const { id, name, species, image, gender } = data.data;
  //   res.status(200).json({ id, name, species, image, gender });
  // }).catch((error) => {
  //   res.status(500).json({ error: error.message })
  // })

}
module.exports = getCharById;