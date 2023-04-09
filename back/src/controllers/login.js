const { User } = require("../DB_connection");

const login = async (req, res) => {
  const { email, password } = req.query;

  try {
    if (!(email && password))
      throw Error("Faltan datos");

    const newUser = await User.findOne({ where: { email: email } }
    );
    if (newUser) {
      if (newUser.password === password) res.status(200).json({ access: true });
      else res.status(403).json({ error: "Contraseña incorrecta" });
    }
    else res.status(404).json({ error: "Usuario no encontrado" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }

}

module.exports = login;