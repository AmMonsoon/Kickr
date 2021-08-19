import {  useSelector } from "react-redux";
import { useParams } from "react-router";


const AlbumDisplay = () => {
const { albumId } = useParams()
const albums = useSelector(state => Object.values(state.albums))
console.log('ID',albumId)
console.log('ALBUMS' , albums)

    return(
        <div className='single album page'>
            {/* {albums.map(album => <div className='album-div' key={album.id}>{album.title}
            
            </div>)}
             */}
        </div>
    );
}

export default AlbumDisplay;