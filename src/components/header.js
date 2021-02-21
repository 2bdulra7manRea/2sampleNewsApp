

import { useContext } from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import NumberOfLikes from '../configText/config';
import ContextCountry from '../configText/configTwo';
export default function HeaderComponent() {

  
/*

let LOVE= useSelector((data)=>{
return data.love 
})


*/





let place=useContext(ContextCountry)
    return(
        <>
<nav className="navbar navbar-expand-lg navbar-dark "  style={{backgroundColor:'rgb(1, 38, 49)'}} >
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
      <Link className='nav-link'  to='/newme'> NEWSME</Link>
      </li>
      <li className="nav-item">
       <Link className='nav-link'  to='/'>Home</Link>
      </li>
      <li className="nav-item">
       <Link className='nav-link' to='/news'>new</Link>
      </li>
      <li className="nav-item">
       <Link className='nav-link' to='/sport'>sport</Link>
      </li>
      <li className="nav-item ">
       <Link className='nav-link' to='/future/'>future</Link>
      </li>





    </ul>
    <span className="navbar-text">

    <span  className="btn btn-warning"> Your Country : {place.country}</span>
    </span>
  </div>
</nav>














        </>


    );   
   }