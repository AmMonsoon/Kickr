import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router";
import './Home.css'


const HomeDisplay = () => {
const history = useHistory()

const routeChange = () =>{ 
    let path = `/users`; 
    history.push(path);
  }


    return(
    <div className='home-display'>
        <button id='check-button'type='button' onClick={routeChange}>Check Out Some Kicks</button>
        <img className="slide-1" src='../../images/slide-1.jpeg' alt=''/>
        <div className='footer'> created by Alex Monson</div>
    </div>
    )
}

export default HomeDisplay;