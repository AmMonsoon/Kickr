// import {  useSelector } from "react-redux";
// import { useParams } from "react-router";
import ImageDisplay from "../Images/Images.js"
// import PostAnImage from "../Images/ImageForm.js";
// import EditImage from "../Images/EditImage.js";
const AlbumDisplay = () => {
// const { albumId } = useParams()
// const albums = useSelector(state => Object.values(state.albums))


    return(
        <div className='single-album-page'>
            <ImageDisplay />
            {/* <PostAnImage /> */}
            {/* <EditImage /> */}
        </div>
    );
}

export default AlbumDisplay;