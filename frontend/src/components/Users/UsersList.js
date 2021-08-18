import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../store/users";
import { useParams } from "react-router";
import {NavLink } from "react-router-dom"
import './UsersList.css';

const UserDisplay = () => {
    
    const dispatch = useDispatch()
    const {userId} = useParams()
    const users = useSelector(state => Object.values(state.users))
    // console.log(users)
    // const thisUser = users.find(user => users[user.id] === userId)
    // console.log('ID',thisUser)

    
    // const routeChange = (userId) =>{ 
    //     let path = `/users/${userId.id}`; 
    //     history.push(path);
    //   }
    // console.log('USERS',users)

useEffect(() => {
dispatch(getUsers(userId))
}, [dispatch,userId]);

    return (
        <>
        <div className='users-display'>
            <div className='users-list'>

           {users.map(user => 
           <NavLink className='user-link' to={`/users/${user.id}`}>
               <div className='users-card' key={user.id}> 
               <h3>{user.username}</h3>
           <img className='default-icon' src='./images/icon-default.png' alt='' /> 
           </div>
           </NavLink> 
          
            )}
            </div>
        </div>
        </>
    );
}


export default UserDisplay;