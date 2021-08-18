import { useDispatch , useSelector } from "react-redux";
import { useParams } from "react-router";


const AlbumDisplay = () => {
const { albumId } = useParams()
const albums = useSelector(state => Object.values(state.albums))
console.log('ID',albumId)
console.log('ALBUMS' , albums)

    return(
        <div className='single album page'>
            {albums.map(album => <h1>{album.title}</h1>)}
            
        </div>
    );
}

export default AlbumDisplay;