import { useParams } from "react-router"
import { updateAlbum } from "../../store/albums";
import { useState , useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlbums } from "../../store/albums";
import './EditAlbum.css'

const EditAlbum = () => {
const dispatch = useDispatch()
const {albumId, userId} = useParams()
const album = useSelector(state => state.albums[albumId])
const [title, setTitle] = useState('')
const [imageUrl, setImageUrl] = useState('')


// console.log('ALBUMS',album)

const reset = () => {
    setTitle('')
    setImageUrl('')
    }
    
useEffect(() => {
    dispatch(fetchAlbums(userId))
}, [dispatch,userId])


useEffect(() => {
if(album){
    setTitle(album.title)
    setImageUrl(album.imageUrl)
}
    },[album])

    const handleCancelClick = (e) => {
        e.preventDefault()
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const editedAlbum = {
            id: albumId,
            title,
            imageUrl,
        }
        
        await dispatch(updateAlbum(editedAlbum))
        reset()
        
    }
    
    return(
<section className='edit-form'>
    <form onSubmit={handleSubmit} className='edit-form-fields'>
        <label>
            Title :
        <input  className='edit-album-input' type='text' value={title} onChange={e => setTitle(e.target.value)} />
        </label>
        <label>
            ImageURL :
        <input className='edit-album-input' type='text' value={imageUrl} onChange={e => setImageUrl(e.target.value)}/>
        </label>
    <button className='edit-add' type='submit' >Edit</button>
    <button className='edit-cancel' type='button' onClick={handleCancelClick}>Cancel</button>
    </form>
</section>
);
}
    export default EditAlbum;