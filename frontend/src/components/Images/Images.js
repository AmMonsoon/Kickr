import { useSelector , useDispatch} from "react-redux";
import { fetchImages , deleteImage} from "../../store/images";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
// import { removeImage } from "../../store/images";


const ImageDisplay = () => {

    const {albumId, userId} = useParams()
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
          
        {userImages.map(image => <div className='images' key={image.id}><NavLink className='image-link'  to={`/images/${image.id}/edit`}>
            <img src={image.imageUrl} alt=''/></NavLink>
           <button type='button' onClick={removeOneImage(image.id)}>-</button>
                <p>{image.content}</p>
        </div>
        )}
      </div>
      </>  
    );
}

export default ImageDisplay;