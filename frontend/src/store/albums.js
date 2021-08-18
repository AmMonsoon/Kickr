import { csrfFetch } from "./csrf"

const GET_ALBUMS = 'album/GET_ALBUMS'
const ADD_ALBUM = 'album/ADD_ALBUM'
// const EDIT_ALBUM = 'album/UPDATE_ALBUM'

export const getAlbums = (albums) => {
    return {
        type: GET_ALBUMS,
        albums
    }
}

export const addOneAlbum = album => ({
type: ADD_ALBUM,
album
});


// get all the albums of a specific user 
export const fetchAlbums =  (userId) => async(dispatch) =>{
    console.log(userId)
    const response = await fetch(`/api/users/${userId}/albums`)
    const albums = await response.json()
    if(response.ok){
    dispatch(getAlbums(albums))
    }
    return albums
} 
//thunk creator for a post request
export const newAlbum = (album, userId) => async(dispatch) => {
    const response = await csrfFetch(`/api/users/${userId}/albums`,{
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(album)
    })

    if (response.ok){
        const album = await response.json();
        dispatch(addOneAlbum(album))
        return album
    }
}




const albumReducer = (state = {} , action) => {
    let newState = {};
    switch(action.type) {
        case GET_ALBUMS:
            action.albums.forEach((album) => {
                newState[album.id] = album;
            })
            return ({
                ...newState,
                 ...state
                });
        case ADD_ALBUM:
            return {
                ...newState,
                [action.album.id]: action.album
                      
                    };
            default:
                return state;
    }
}

export default albumReducer;