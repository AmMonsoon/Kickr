import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { newAlbum } from '../../store/albums';
import './AlbumForm.css'

const CreateAlbumForm = () => {
const dispatch = useDispatch();
const history = useHistory();
const userId = useSelector(state => state.session.user.id)
const [title, setTitle] = useState('')
const [imageUrl, setImageUrl] = useState('')
// const [description, setDescription] = useState('')


// useEffect(() => {
//     dispatch(newAlbum(userId))
// }, [dispatch, userId])

const handleSubmit = async (e) => {
    e.preventDefault();

    const album = {
        userId,
        title,
        imageUrl,
        // description
    }

    let createAlbum = await dispatch(newAlbum(album, userId))
    if(createAlbum) {
        history.push(`/users/${userId}`)
        window.location.reload()
    }
    
}

const handleCancelClick = (e) => {
    e.preventDefault()
}


return (
<section className='new-album-form'>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder= "Title" required value={title} onChange={e => setTitle(e.target.value)} />
        <input type="text" placeholder= "Image URL" required value={imageUrl} onChange={e => setImageUrl(e.target.value)} /> 
       
        {/* <textarea type="description" placeholder="description" value={description} onChange={e => setDescription(e.target.value)}/> */}
        <button type="submit">Add</button>
        <button type="button" onClick={handleCancelClick}>Cancel</button>
    </form>

</section>
);

}

export default CreateAlbumForm;