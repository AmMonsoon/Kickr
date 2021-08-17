import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../store/users";
import { useParams } from "react-router";
import './UsersList.css';

const UserDisplay = () => {
    const dispatch = useDispatch()
    const {userId} = useParams()
    const users = useSelector(state => Object.values(state.users))
    

    // console.log('USERS',users)

useEffect(() => {
dispatch(getUsers(userId))
}, [dispatch,userId]);

    return (
        <>
        <div className='users-display'>
            <div className='users-list'>

           {users.map(user => <div className='users-card' key={user.id}>  
           <img className='default-icon' src='./images/icon-default.png' alt='' /> 
               {user.username}    
            </div>)}
            </div>
        </div>
        </>
    );
}


export default UserDisplay;