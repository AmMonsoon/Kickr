import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneUser } from "../../store/users";
import { useParams } from "react-router";



const UserProfile = () => {
    const dispatch = useDispatch();
    const {userId} = useParams()
    // console.log(userId)

    const user = useSelector(state => state.users[userId])
    // const user = users.find(user => Number(user.id) === Number(userId))
    // console.log(user.id)


useEffect(() => {
dispatch(getOneUser(userId))
    }, [dispatch, userId])


return(
<div className='user-profile'>
    <h1>{user?.username}</h1>
</div>
);

}

export default UserProfile;