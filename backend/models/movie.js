module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Movie', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: DataTypes.TEXT,
    releaseYear: DataTypes.INTEGER,
    genre: DataTypes.STRING,
    posterUrl: DataTypes.STRING,
  });
};
