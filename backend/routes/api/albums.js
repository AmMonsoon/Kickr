const express = require('express');
const asyncHandler = require('express-async-handler');
const {Album} = require('../../db/models')

const router = express.Router()


router.put('/:id/edit', asyncHandler(async (req, res) => {
    const albumId = req.params.id
    const {title, imageUrl, description} = req.body;
    const album = await Album.findByPk(albumId)
  
    if(album){
      album.title=title;
      album.imageUrl=imageUrl;
      album.description=description;
  
      await home.save()
      res.status(200).json(album);
    } else {
      next(albumNotFound(albumId))
    }
  }))


router.delete('/:id', asyncHandler (async function (req, res) {
    const albumId = req.params.id;
    if(albumId){
      await Album.destroy({ where: {id: albumId }})
      res.status(200).json(albumId)
    } else {
      next(albumNotFound(albumId))
    }
  }))


module.exports = router;