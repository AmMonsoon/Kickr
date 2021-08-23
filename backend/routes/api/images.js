const express = require('express');
const asyncHandler = require('express-async-handler');
const {Image} = require('../../db/models')


const router = express.Router()

//get all images
// router.get('/', asyncHandler(async function (req,res){
//     const images = await Image.findAll();
//     return res.json(images)
//     }))
    

const imageNotFound = (imageId) => {
  const error = new Error();
  error.title = 'Image Not Found'
  error.message = 'Id does not exist'
  error.status = 422
  return error
}

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
  // console.log('**************',req.body)
    const image = await Image.create(req.body)
    res.json(image)
  }))


  router.put('/:id/edit', asyncHandler(async (req, res, next) => {
    const imageId = req.params.id
    const {content, imageUrl} = req.body;
    const image = await Image.findByPk(imageId)
  
    if(image){
      
      image.imageUrl=imageUrl;
      image.content=content
  
      await image.save()
      res.status(200).json(image);
    } else {
      next(imageNotFound(imageId))
    }
  }))


router.delete('/:id', asyncHandler (async function (req, res, next) {
    const imageId = req.params.id;
    if(imageId){
      await Image.destroy({ where: {id: imageId }})
      res.status(200).json(imageId)
    } else {
      next(imageNotFound(imageId))
    }
  }))

module.exports = router;