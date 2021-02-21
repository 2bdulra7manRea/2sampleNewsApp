
import { Suspense } from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom';

import HeaderComponent from '../components/header';

import HomePage from './homePage';
import News from './news';
import Sport from './sport';
import React from 'react';
import Details from './details';
import { GETNEWS } from "../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ProviderContext } from '../configText/config';
import { CountryProvider } from '../configText/configTwo';
import { getLocationOftheCountry } from '../networks/Network';
export default function App() {
let [country , setCountry]=useState('lonodn')    
    let dispach=useDispatch();
    useEffect(()=>{
    dispach(GETNEWS())

getLocationOftheCountry().then((d)=>{
    console.log(d.data.country)
    setCountry(d.data.country)
})

    },[])
    
const otherComponent=React.lazy(()=>import('../pages/Future'))




 return(
     <>
<Suspense fallback={'this loading....'}>
<BrowserRouter>

<CountryProvider value={{country , setCountry}}>
<HeaderComponent></HeaderComponent>
<Switch>
<Route path='/'exact component={HomePage}></Route>
<Route path='/news'exact component={News} ></Route>
<Route path='/sport' exact component={Sport}></Route>
<Route path='/future/*' exact component={otherComponent}></Route>
<Route path='/details' exact component={Details}></Route>
</Switch>
</CountryProvider>

</BrowserRouter>
</Suspense>
     </>
 );   
}

