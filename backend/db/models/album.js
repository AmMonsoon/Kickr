'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    imageUrl: DataTypes.STRING
  }, {});
  Album.associate = function(models) {
    Album.hasMany(models.Image, {foreignKey: 'albumId'})
    Album.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return Album;
};