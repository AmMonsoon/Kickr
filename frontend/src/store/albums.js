const GET_ALBUMS = 'album/GET_ALBUMS'



export const getAlbums = (albums) => {
    return {
        type: GET_ALBUMS,
        albums
    }
}


export const fetchAlbums =  () => async(dispatch) =>{
    const response = await fetch('/api/albums')
    const albums = response.json()
    dispatch(getAlbums(albums))
} 



const albumReducer = (state = {} , action) => {
    let newState;
    switch(action.type) {
        case GET_ALBUMS:
            action.albums.forEach((album) => {
                newState[album.id] = album;
            })
            return ({...newState, ...state});

            default:
                return state;
    }
}

export default albumReducer;