const { Favorite } = require("../DB_connection");

const deleteFav = async (req, res) => {
  const { id } = req.params;

  try {
    const fav = await Favorite.findByPk(id);
    // const aux = { ...fav };
    await fav.destroy();

    const allFavs = await Favorite.findAll();

    res.status(200).json(allFavs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

}

module.exports = deleteFav;