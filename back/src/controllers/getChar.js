const { Favorite } = require("../DB_connection");

const getChar = async (req, res) => {
  try {
    const allFavs = await Favorite.findAll();
    res.status(200).json(allFavs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = getChar;