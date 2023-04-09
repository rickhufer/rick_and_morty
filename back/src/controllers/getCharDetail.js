const axios = require("axios");
const { URL, KEY } = process.env;

const getCharDetail = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await axios.get(`${URL}/character/${id}?key=${KEY}`)
    let { name, species, image, gender, origin, status } = data.data;
    origin = origin.name;
    console.log(origin);
    res.status(200).json({ id, name, species, image, gender, origin, status });
  } catch (error) {
    res.status(500).json({ error: error.message })
  }

  //  axios.get(`${URL}/character/${id}?key=${KEY}`)
  // .then((data) => {
  //   const { id, name, species, image, gender, origin } = data.data;
  //   res.status(200).json({ id, name, species, image, gender, origin });
  // }).catch((error) => {
  //   res.status(500).json({ error: error.message })
  // })

}
module.exports = getCharDetail;