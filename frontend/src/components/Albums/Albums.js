import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlbums } from "../../store/albums";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";


const Albums = () =>{
const dispatch = useDispatch()
const {userId} = useParams()
// console.log(userId)
const albums  = useSelector(state => Object.values(state.albums));

// console.log('ALBUMS',albums)



useEffect(() => {
    console.log("hit use effect")
    dispatch(fetchAlbums(+userId))
}, [dispatch, userId])


return(
<div className='albums-display'>
    <div className='users-list'>
       {albums.map(album =>  
       <NavLink className='album-link' to={`/users/${userId}/albums/${album.id}`}>
           <div className='albums-link-image'>
           <p>{album.title}</p>
           </div>
           </NavLink>
           
           )}
    </div>
</div>
);
}

export default Albums;