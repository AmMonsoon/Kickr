import { useParams } from "react-router";
import { updateImage } from "../../store/images";
import { useState , useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchImages } from "../../store/images";


const EditImage = () => {
const dispatch = useDispatch()
const {albumId, imageId} = useParams()
const image = useSelector(state => state.images[imageId])
const [content, setContent] = useState('')
const [imageUrl, setImageUrl] = useState('')


const reset = () => {
    setContent('')
    setImageUrl('')
    }

useEffect(() => {
    dispatch(fetchImages(albumId))
}, [dispatch, albumId])

useEffect(() => {
    if(image){
        setContent(image.content)
        setImageUrl(image.imageUrl)
    }
}, [image])

const handleCancelClick = (e) => {
    e.preventDefault()
}


const handleSubmit = async (e) => {
    e.preventDefault()
    
    const editedImage = {
        id: imageId,
        content,
        imageUrl,
    }
    
    await dispatch(updateImage(editedImage))
    reset()
    
}

return(
    <section className='image-edit-form'>
        <form onSubmit={handleSubmit}>
            <label>
                Content
            <input type='text' value={content} onChange={e => setContent(e.target.value)} />
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

export default EditImage;