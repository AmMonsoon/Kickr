import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { newAlbum } from '../../store/albums';

const CreateAlbumForm = () => {
const dispatch = useDispatch();
const history = useHistory();

const [title, setTitle] = useState('')
const [imageUrl, setImageUrl] = useState('')
const [description, setDescription] = useState('')


useEffect(() => {
    dispatch(newAlbum())
}, [dispatch])

const handleSubmit = async (e) => {
    e.preventDefault();

    const album = {
        title,
        imageUrl,
        description
    }

    let createAlbum = await dispatch(newAlbum(album))
    if(createAlbum) {
        history.push(`/users/${createAlbum.id}`)
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
        <textarea type="description" placeholder="description" value={description} onChange={e => setDescription(e.target.value)}/>
        <button type="submit">Add an Album</button>
        <button type="button" onClick={handleCancelClick}>Cancel</button>
    </form>

</section>
);

}

export default CreateAlbumForm;