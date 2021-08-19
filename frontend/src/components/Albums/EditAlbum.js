import { useParams } from "react-router"
import { updateAlbum } from "../../store/albums";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";



const EditAlbum = () => {
const dispatch = useDispatch()
const {albumId} = useParams()
const [title, setTitle] = useState()
const [imageUrl, setImageUrl] = useState()
const albums = useSelector(state => state.album === albumId)

console.log('ALBUMS',albums)

const reset = () => {
    setTitle('')
    setImageUrl('')
    }
    
    const handleCancelClick = (e) => {
        e.preventDefault()
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const editedAlbum = {
            title,
            imageUrl,
        }
        
        await dispatch(updateAlbum(editedAlbum))
        reset()
        
    }
    
    return(
<section className='edit-form'>
    <form onSubmit={handleSubmit}>
        <label>
            Title
        <input type='text' value={title} onChange={e => setTitle(e.target.value)} />
        </label>
        <label>
            ImageURL
        <input type='text' value={imageUrl} onChange={e => setImageUrl(e.target.value)}/>
        </label>
    <button type='submit'>Edit</button>
    <button type='button' onClick={handleCancelClick}>Cancel</button>
    </form>
</section>
);
}
    export default EditAlbum;