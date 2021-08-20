const express = require('express');
const asyncHandler = require('express-async-handler');
const {Album} = require('../../db/models')

const router = express.Router()

const albumNotFound = (albumId) => {
    const error = new Error();
    error.title = 'Album Not Found'
    error.message = 'Id does not exist'
    error.status = 422
    return error
  }

router.put('/:id/edit', asyncHandler(async (req, res,next) => {
    const albumId = req.params.id
    const {title, imageUrl, description} = req.body;
    const album = await Album.findByPk(albumId)
  
    if(album){
      album.title=title;
      album.imageUrl=imageUrl;
      album.description=description;
  
      await album.save()
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