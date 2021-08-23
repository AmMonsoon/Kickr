import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { newImage } from '../../store/images'; 
import {useHistory} from 'react-router-dom'
import './ImageForm.css'

const PostAnImage = () => {
const dispatch = useDispatch();
const history = useHistory()
const {albumId} = useParams()
const [content, setContent] = useState('')
const [imageUrl, setImageUrl] = useState('')
const userId = useSelector(state => state.session.user.id)

const handleSubmit = async (e) => {
    e.preventDefault();

    const image = {
      userId,
      albumId,
      imageUrl,
      content  
    }

    let addedImage = await dispatch(newImage(image, albumId))
    if(addedImage){
        history.push(`/users/${userId}/albums/${albumId}/images`)
        window.location.reload()
    }
}

const handleCancelClick = e => {
    e.preventDefault()
}
return(
  <section className='new-image-form'>
      <form onSubmit={handleSubmit} className='new-image-form-fields'>
        <input className='new-image-form-input'type="text" placeholder= "Image URL" required value={imageUrl} onChange={e => setImageUrl(e.target.value)} />        
        <input className='new-image-form-input' type="text" placeholder= "Add a caption"  value={content} onChange={e => setContent(e.target.value)} />
        <button className='form-add' type="submit">Add</button>
        <button className='form-cancel' type="button" onClick={handleCancelClick}>Cancel</button>
      </form>

  </section>  
);


}

export default PostAnImage;