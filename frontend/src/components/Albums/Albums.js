import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAlbums } from "../../store/albums";
import { useParams } from "react-router";


const Albums = () =>{
const dispatch = useDispatch()
const {userId} = useParams()

const albums  = useSelector(state => Object.values(state.albums));
console.log(albums)
// console.log(albums)
useEffect(() => {
    dispatch(getAlbums(userId))
})


return(
<div>
    <h3>Album</h3>
</div>
);
}

export default Albums;