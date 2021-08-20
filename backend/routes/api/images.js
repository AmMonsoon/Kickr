const express = require('express');
const asyncHandler = require('express-async-handler');
const {Image} = require('../../db/models')


const router = express.Router()

//get all images
// router.get('/', asyncHandler(async function (req,res){
//     const images = await Image.findAll();
//     return res.json(images)
//     }))
    

//get all images for a specific album of a specific user
router.get(`/albums/:id(\\d+)/images`, asyncHandler(async function(req, res){
    const images = await Image.findAll({
    //   where: {
    //     albumId: req.params.id
    //   }
    })
    return res.json(images)
  }))

//post a new image
router.post('/:id/images', asyncHandler(async (req, res) => {
    const image = await Image.create(req.body)
    res.json(image)
  }))


module.exports = router;