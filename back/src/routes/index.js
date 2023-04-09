const { Router } = require("express");
const getCharById = require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetail");
const login = require("../controllers/login");
const postUser = require("../controllers/postUser");
const postFav = require("../controllers/postFav");
const deleteFav = require("../controllers/deleteFav");
const getChar = require("../controllers/getChar");
// let favs = require("../utils/favs")

const router = Router();

// GETS
router.get("/rickandmorty/onsearch/:id", getCharById);
router.get("/rickandmorty/detail/:id", getCharDetail);

router.get("/rickandmorty/login", login)

router.post("/rickandmorty/login", postUser)

// POST
router.post("/rickandmorty/fav", postFav
  // (req, res) => {
  //   const char = favs.find(c => favs.id == req.body.id)
  //   if (!char) favs.push(req.body);
  //   res.status(200).json({ status: "ok" })
  // }
)

router.get("/rickandmorty/fav", getChar)

// DELETE
router.delete("/rickandmorty/fav/:id", deleteFav
  // (req, res) => {
  //   const { id } = req.params;
  //   favs = favs.filter((char) => char.id != id)
  //   res.status(200).json({ status: "ok" })
  // }
)

module.exports = router;
