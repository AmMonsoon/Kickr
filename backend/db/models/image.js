'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    userId: DataTypes.INTEGER,
    albumId: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING,
    content: DataTypes.STRING
  }, {});
  Image.associate = function(models) {
    // associations can be defined here
    Image.belongsTo(models.Albums, {foreignKey: 'albumId'})
    Image.belongsTo(models.User, {foreignKey: 'userId'})
    Image.hasMany(models.Comment, {foreignKey: 'imageId'})
  };
  return Image;
};