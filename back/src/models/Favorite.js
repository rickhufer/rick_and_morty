const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', {

      id: {
         type: DataTypes.INTEGER,
         // autoIncrement: true,
         allowNull: false,
         primaryKey: true,
      },
      name: {
         type: DataTypes.STRING,
         unique: true,
         allowNull: false,
      },
      status: {
         type: DataTypes.ENUM("Alive", "Dead", "Unknown"),
         defaultValue: "Alive",
         allowNull: false,
      },
      species: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      gender: {
         type: DataTypes.ENUM("Male", "Female", "Genderless", "unknown"),
         allowNull: false,
      },
      origin: {
         type: DataTypes.STRING,
         // allowNull: false,
      },
      image: {
         type: DataTypes.STRING,
         allowNull: false,
      }

   }, { timestamps: false });
};
