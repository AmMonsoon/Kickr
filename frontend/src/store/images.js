import { csrfFetch } from "./csrf";

const GET_IMAGES =  'image/GET_IMAGES';
const ADD_IMAGE = 'image/ADD_IMAGE'


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
const response = await csrfFetch(`/api/images/albums/${albumId}/images`, {
    method: 'POST',
    headers: {'Content-Type': 'application.json'},
    body: JSON.stringify(image)
})
if(response.ok){
    const image = await response.json()
    dispatch(addOneImage(image))
    return image
}

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
            default:
                return state;
    }
}

export default imageReducer;