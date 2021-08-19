const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User ,Album} = require('../../db/models');



const router = express.Router();

const validateSignup = [
    check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
    check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a username with at least 4 characters.'),
    check('username')
    .not()
    .isEmail()
    .withMessage('Username cannot be an email.'),
    check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors,
];

// Sign up
router.post(
    '/',
    validateSignup,
    asyncHandler(async (req, res) => {
      const { email, password, username } = req.body;
      const user = await User.signup({ email, username, password });
  
      await setTokenCookie(res, user);
  
      return res.json({
        user,
      });
    }),
  );

//User listing
router.get('/', asyncHandler(async function (req,res){
const user = await User.findAll();
return res.json(user)
}))


//Get specific user
router.get('/:id', asyncHandler(async function(req, res){
  const user = await User.findAll({
   where:{ 
     id: req.params.id
   },
   include: Album
  })

  return res.json(user)
}))

//Get all albums for a specific user
router.get('/:id/albums', asyncHandler(async function(req, res){
  const albums = await Album.findAll({
    where: {
      userId: req.params.id
    }
  })
  return res.json(albums)
}))

router.get('/albums/:albumId', asyncHandler(async function(req, res){
  const album = await Album.findByPk(req.params.albumId)
  return res.json(album)
}))

//Create a new album
router.post('/:id/albums', asyncHandler(async (req, res) => {
  const album = await Album.create(req.body)
  res.json(album)
}))

const albumNotFound = (albumId) => {
  const error = new Error();
  error.title = 'Album Not Found'
  error.message = 'Id does not exist'
  error.status = 404
  return error
}








module.exports = router;