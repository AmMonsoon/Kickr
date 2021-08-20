import { csrfFetch } from "./csrf"

const GET_ALBUMS = 'album/GET_ALBUMS'
const ADD_ALBUM = 'album/ADD_ALBUM'
const EDIT_ALBUM = 'album/EDIT_ALBUM'
const REMOVE_ALBUM ='album/REMOVE_ALBUM'



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


export const editAlbum = (editedAlbum) => ({
    type:EDIT_ALBUM,
    editedAlbum
})

export const removeAlbum = albumId => ({
    type: REMOVE_ALBUM,
    albumId
})

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
//edit an album
export const updateAlbum = album => async (dispatch) => {
    const response = await csrfFetch(`/api/albums/${album.id}/edit`, {
        method: 'PUT',
        body: JSON.stringify(album)
    }) 
    const editedAlbum = await response.json();


    if(response.ok){
        dispatch(editAlbum(editedAlbum))
    }
}

//delete album 
export const deleteAlbum = albumId => async(dispatch) => {
    const response = await csrfFetch(`/api/albums/${albumId}`,{
        method: 'DELETE',
    })
    const deletedAlbum = await response.json()

    if(response.ok){
        dispatch(removeAlbum(albumId))
    }
    return deletedAlbum;
}

const albumReducer = (state = {} , action) => {
    let newState = {...state};
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
        case EDIT_ALBUM:
            return{
                ...newState,
                [action.editedAlbum.id]: action.editedAlbum
            }
        case REMOVE_ALBUM:{
            if(newState[action.albumId]) delete newState[action.albumId]
            return newState;
        }
            default:
                return state;
    }
}

export default albumReducer;