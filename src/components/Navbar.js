import React from 'react'
import './Navbarstyle.css'
import {Menu} from './Menu'
import { Link } from 'react-router-dom'


 function Navbar (){
     
    return (
        <nav className='navbaritems'>
          <h1 className='navbar-logo'>Trippy</h1>
          
          <ul className="nav-menu">
             {Menu.map((item, index) =>{
             return(
              <li key={index}>
              <Link className={item.cName} to={item.url}>
               <i className={item.icon}></i>{item.title}
              </Link>
             </li>
             )
            })}
             <button>Sign Up</button>  
          </ul>
        </nav>
      
    )
}

export default Navbar