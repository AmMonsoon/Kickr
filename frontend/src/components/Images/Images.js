import { useSelector , useDispatch} from "react-redux";
import { fetchImages } from "../../store/images";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";



const ImageDisplay = () => {
    const {albumId} = useParams()
    const dispatch = useDispatch()
    const images = useSelector(state => Object.values(state.images))
    console.log(images)

useEffect(() => {
    dispatch(fetchImages(albumId))
}, [dispatch, albumId])

    return(
      <>
      <div className='images-display'>
          
        {images.map(image => <div className='images'><NavLink className='image-link' key={image.id} to={`/images/${image.id}`}><img src={image.imageUrl} alt=''/></NavLink>
                <p>{image.content}</p>
        </div>
        )}
      </div>
      </>  
    );
}

export default ImageDisplay;