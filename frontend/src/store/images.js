import { csrfFetch } from "./csrf";

const GET_IMAGES =  'image/GET_IMAGES';
const ADD_IMAGE = 'image/ADD_IMAGE'
const EDIT_IMAGE = 'image/EDIT_IMAGE'
const REMOVE_IMAGE = 'image/REMOVE_IMAGE'

export const getImages = images => {
    return{
        type: GET_IMAGES,
        images
    }
}


export const addOneImage = image => ({
    type: ADD_IMAGE,
    image
})

export const editImage = (editedImage) => ({
    type:EDIT_IMAGE,
    editedImage
})

export const removeImage = imageId => ({
    type: REMOVE_IMAGE,
    imageId
})

//get all the images of a specific album
export const fetchImages = albumId => async(dispatch) => {
    const response = await fetch(`/api/images/albums/${albumId}/images`)
    const images = await response.json()
    if(response.ok){
        dispatch(getImages(images))
    }
    return images
}

export const newImage = (image, albumId) => async(dispatch) =>{
console.log('IMAGE', image)

const response = await csrfFetch(`/api/images/${albumId}/images`, {
    method: 'POST',
    // headers: {'Content-Type': 'application.json'},
    body: JSON.stringify(image)
})
if(response.ok){
    const image = await response.json()
    dispatch(addOneImage(image))
    return image
}

}

//edit an image
export const updateImage = image => async (dispatch) => {
    const response = await csrfFetch(`/api/images/${image.id}/edit`, {
        method: 'PUT',
        body: JSON.stringify(image)
    }) 
    const editedImage = await response.json();


    if(response.ok){
        dispatch(editImage(editedImage))
    }
}

export const deleteImage = imageId => async(dispatch) => {
    const response = await csrfFetch(`/api/images/${imageId}`,{
        method: 'DELETE'
    })
const deletedImage = await response.json()

if(response.ok){
    dispatch(removeImage(imageId))
}
    return deletedImage
} 

const imageReducer = (state = {}, action) => {
    let newState = {...state};
    switch(action.type){
        case GET_IMAGES:
            action.images.forEach((image) => {
                newState[image.id] = image;
            })
            return ({
                ...newState,
                ...state
            });
        case ADD_IMAGE:
            return{
                ...newState,
                [action.image.id]: action.image
            }
            case EDIT_IMAGE:
            return{
                ...newState,
                [action.editedImage.id]: action.editedImage
            }
        case REMOVE_IMAGE:{
            if(newState[action.imageId]) delete newState[action.imageId]
            return newState;
        }
            default:
                return state;
    }
}

export default imageReducer;