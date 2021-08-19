const express = require('express');
const asyncHandler = require('express-async-handler');
const {Album} = require('../../db/models')

const router = express.Router()

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