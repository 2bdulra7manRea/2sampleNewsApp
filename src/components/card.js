import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IloveIt } from '../store/actions';
import Details from '../pages/details';
import { useContext, useEffect } from 'react';
import { useState } from 'react';
import NumberOfLikes from '../configText/config';

export default function Card({articles}) {
let fakepic='https://images.unsplash.com/photo-1476242906366-d8eb64c2f661?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1008&q=80'





let [iLiked , setLiked]=useState(false)


const addLike=()=>{
 
if(iLiked==false){
setLiked(!iLiked)
}else{

setLiked(!iLiked)
}

}



    return(
    <div>
<div className="card shadow  m-2 bg-white rounded" style={{width:'300px' , height:'600px' , overflow:"hidden"}}>

  <img className="card-img-top" src={articles.urlToImage? articles.urlToImage : fakepic} alt="Card image cap"></img>
  <div className="card-body" style={{height:'100px' , overflow:'hidden'}}>
      <h5 className='card-text'>{articles.title}</h5>
    <p className="card-text"  >{articles.description}</p>
</div>


<div style={{padding:'10px'}}>
  <Link type="button" to={{pathname:'/details' , state:{articles} }}  className="btn btn-link">More details</Link>
    <button onClick={addLike}  className="btn btn-danger" style={{backgroundColor:(iLiked)?'indigo':'crimson'}} >{iLiked?'Liked':'Like'}</button>  
</div>
  
</div>



</div>
    );   
   }