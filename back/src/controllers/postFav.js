const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  const { id, name, origin, status, image, species, gender } = req.body;
  console.log("ID: ", id, ", NAME: ", name, ", ORIGIN: ", origin, ", STATUS: ", status, ", IMAGE: ", image, ", ESPECIES: ", species, ", GENDER: ", gender);
  try {
    if (!(id && name && status && image && species && gender)) {
      console.log("FALTAAAA datos");
      return res.status(401).json({ error: "Faltan datos" });
    }

    const [newfav, created] = await Favorite.findOrCreate({
      where: { name },
      defaults: { id, origin, status, image, species, gender },
      through: {
        attributes: [],
      },
    });
    if (!created) return res.status(200).json({ message: "Favorito existente" });
    const allFavs = await Favorite.findAll();
    res.status(200).json(allFavs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

}

module.exports = postFav;