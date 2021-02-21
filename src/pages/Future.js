
import { useState } from 'react';
import {Switch, Link , BrowserRouter , Route  } from 'react-router-dom';
import { ProviderContext } from '../configText/config';
import Business from './business';
import Details from './details';
import Finance from './Finance';
import Technology from './health';

export default function Futer() {

  
    return(
        <>
<BrowserRouter>       

<div className='container-fluid'>
<section className='row'>    
<div className='col-lg-3'>
<ul className="nav flex-column">
  <li className="nav-item">
    <Link className='nav-link' to='/future/business'>business</Link>
  </li>
  <li className="nav-item">
  <Link className='nav-link' to='/future/finance'>Finance</Link>
  </li>
  <li className="nav-item">
  <Link className='nav-link' to='/future/technology'>Technology</Link>
  </li>
  <li className="nav-item">
  <Link className='nav-link' to='/future/blogs'>blogs</Link>
  </li>
</ul>
</div>


<div className='col-lg-9'>

<Route path='/future/business' exact  component={Business}></Route>
<Route path='/future/technology' exact  component={Technology}></Route>
<Route path='/future/finance' exact  component={Finance}></Route>
<Route path='/details' exact component={Details}></Route>

</div>
</section>

</div>

</BrowserRouter> 

        </>
    );   
   }