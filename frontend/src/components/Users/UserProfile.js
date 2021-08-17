import React from "react";
// import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getOneUser } from "../../store/users";
import { useParams } from "react-router";



const UserProfile = () => {
    const dispatch = useDispatch();
    const {userId} = useParams()
    // console.log(userId)

    const users = useSelector(state => Object.values(state.users))
    const user = users.find(user => Number(user.id) === Number(userId))
    console.log(user)
    

// useEffect(() => {
// dispatch(getOneUser(userId))
//     }, [dispatch, userId])


return(
<div className='user-profile'>
    <h1>user</h1>
</div>
);

}

export default UserProfile;