import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlbums , deleteAlbum} from "../../store/albums";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import AlbumForm from "./AlbumForm"
import './Albums.css'

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
    // console.log("hit use effect")
    dispatch(fetchAlbums(+userId))
}, [dispatch, userId])


const removeAlbum = albumId => e => {

    e.preventDefault();
    dispatch(deleteAlbum(albumId))
    window.location.reload()
    // history.push(`/users/${userId}`)
}

return(
<div className='albums-display' id='albums-display'>
<div className='show-album-form'>
           <p>Add an Album</p>
        <button className='add-album'type='button' value={showForm} onClick={() => setShowForm(!showForm)}>+</button>
    </div>
    <div className='album-form' hidden={showForm}>
           <AlbumForm  />
    </div>
    <div className='albums-layout'> 
       {albums.map(album => 
       <NavLink className='album-link' key={album.id} to={`/users/${userId}/albums/${album.id}/images`}>
           <div className='albums-link-image' key={album.id}>
           <h3 className='album-title'>{album.title}</h3>
                <img src={album?.imageUrl} alt='album-cover'/>
           <button className='remove-album'type='button' onClick={removeAlbum(album.id)}>-</button>
           </div>
       </NavLink>
    )}
    </div>
   
</div>
);
}

export default Albums;