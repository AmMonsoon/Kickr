import { useSelector , useDispatch} from "react-redux";
import { fetchImages , deleteImage} from "../../store/images";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import './Images.css';
import EditAlbum from "../Albums/EditAlbum";
import PostAnImage from "./ImageForm";
// import { removeImage } from "../../store/images";


const ImageDisplay = () => {

    const {albumId, userId} = useParams()
    const [showForm, setShowForm] = useState(true)
    const [showFormTwo, setShowFormTwo] = useState(true)
    const images = useSelector(state => Object.values(state.images))
    const userImages = images.filter(image => image.userId === +userId)
    // const [imagesArr, setImagesArr] = useState(images)
    const dispatch = useDispatch()
    // console.log(images)

// useEffect(() => {
//     setImagesArr(images)
// },[images])

useEffect(() => {
    dispatch(fetchImages(albumId))
}, [dispatch, albumId])


const removeOneImage = imageId => e => {
    e.preventDefault()
    dispatch(deleteImage(imageId))
}
    return(
      <>
      <div className='images-display'>
      <div className='show-album-edit-form'>
           
        <button className='edit-album'type='button' value={showForm} onClick={() => setShowForm(!showForm)}>Edit Album</button>
    </div>
    <div className='album-form' hidden={showForm}>
           <EditAlbum  />
    </div>
    <button className='post-image'type='button' value={showFormTwo} onClick={() => setShowFormTwo(!showFormTwo)}>+</button>
        <div className='add-image' hidden={showFormTwo}>
            <PostAnImage />
        </div>
        <div className='images-layout'>
        {userImages.map(image => <div className='images' key={image.id}><NavLink className='image-link'  to={`/images/${image.id}/edit`}>
            <img className='albums-images' src={image.imageUrl} alt=''/></NavLink>
           <button className='remove-image' type='button' onClick={removeOneImage(image.id)}>-</button>
                <p>{image.content}</p>
        </div>

        )}
        </div>
            {/* <button className='post-image'type='button' value={showFormTwo} onClick={() => setShowFormTwo(!showFormTwo)}>+</button>
        <div className='add-image' hidden={showFormTwo}>
            <PostAnImage />
        </div> */}
      </div>
      </>  
    );
}

export default ImageDisplay;