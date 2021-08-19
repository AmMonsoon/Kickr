import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlbums , deleteAlbum} from "../../store/albums";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
// import { useHistory } from "react-router";
import AlbumForm from "./AlbumForm"
const Albums = () =>{
// const history = useHistory()
const dispatch = useDispatch()
const {userId} = useParams()
const [showForm, setShowForm] = useState(true)
// console.log(userId)
const albums  = useSelector(state => Object.values(state.albums));
// console.log('ALBUMS',albums)

// const goToAlbumForm = (userId) =>{
//     const path = `/users/${userId}/albums`;

//     history.push(path)
// }

useEffect(() => {
    console.log("hit use effect")
    dispatch(fetchAlbums(+userId))
}, [dispatch, userId])


const removeAlbum = albumId => e => {

    e.preventDefault();
    dispatch(deleteAlbum(albumId))
    // history.push(`/users/${userId}`)
}

return(
<div className='albums-display'>
    <div className='users-list'>
       {albums.map(album =>  
       <NavLink className='album-link' to={`/users/${userId}/albums/${album.id}`}>
           <div className='albums-link-image' key={album.id}>
           <p>{album.title}</p>
           <img src={album?.imageUrl} alt='album-cover'/>
           <button type='button' onClick={removeAlbum(album.id)}>-</button>
           </div>
       </NavLink>

)}
    <div className='show-album-form'>
           <p>Add an Album</p>
        <button type='button' value={showForm} onClick={() => setShowForm(!showForm)}>+</button>
    </div>
    <div className='album-form' hidden={showForm}>
           <AlbumForm  />
    </div>
    </div>
</div>
);
}

export default Albums;