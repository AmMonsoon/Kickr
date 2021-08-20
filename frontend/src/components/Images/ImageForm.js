import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { addOneImage } from '../../store/images'; 
import {useHistory} from 'react-router-dom'


const PostAnImage = () => {
const dispatch = useDispatch();
const history = useHistory()
const {albumId} = useParams()
const [content, setContent] = useState('')
const [imageUrl, setImageUrl] = useState('')


const handleSubmit = async (e) => {
    e.preventDefault();

    const image = {
      albumId,
      imageUrl,
      content  
    }

    let addedImage = await dispatch(addOneImage(image, albumId))
    if(addedImage){
        history.push(`/albums/${albumId}`)
        window.location.reload()
    }
}

const handleCancelClick = e => {
    e.preventDefault()
}
return(
  <section className='new-image-form'>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder= "Image URL" required value={imageUrl} onChange={e => setImageUrl(e.target.value)} />        
        <input type="text" placeholder= "Add a caption"  value={content} onChange={e => setContent(e.target.value)} />
        <button type="submit">Add</button>
        <button type="button" onClick={handleCancelClick}>Cancel</button>
      </form>

  </section>  
);


}

export default PostAnImage;