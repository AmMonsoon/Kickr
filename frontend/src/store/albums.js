const GET_ALBUMS = 'album/GET_ALBUMS'
// const ADD_ALBUM = 'album/ADD_ALBUM'


export const getAlbums = (albums) => {
    return {
        type: GET_ALBUMS,
        albums
    }
}

// const addOneAlbum = album => ({
// type: ADD_ALBUM,
// album
// });


// get all the albums of a specific user 
export const fetchAlbums =  () => async(dispatch) =>{
    const response = await fetch('/api/users/:id/albums')
    const albums = await response.json()
    if(response.ok){
    dispatch(getAlbums(albums))
    }
    return albums
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

            default:
                return state;
    }
}

export default albumReducer;