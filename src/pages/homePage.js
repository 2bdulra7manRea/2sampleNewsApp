import { useEffect, useState } from "react";
import { getPartTslaNews } from '../networks/Network';
import axios from 'axios';
import Card from "../components/card";
import { useDispatch, useSelector } from "react-redux";
import { GETNEWS } from "../store/actions";
import Carousel from 'react-bootstrap/Carousel'
import Headling from "../components/headline";
export default function HomePage() {



let slidingOfdata =useSelector((data)=>{
    console.log(Object.values(data))
return Object.values(data)
})

/*
<div className="card bg-dark text-white">
<img src={slidingOfdata[0]['urlToImage']} className="card-img" alt="..."></img>
  <div className="card-img-overlay">
    <h5 className="card-title">{slidingOfdata[0].title}</h5>
    <p className="card-text">{slidingOfdata[0].description}</p>
    <p className="card-text">Last updated 3 mins ago</p>
  </div>
</div>
*/



    return(
        <>
<section style={{width:'100%'}} >
<Carousel>
 {  slidingOfdata.map((item , index)=>{ 

return(
  <Carousel.Item key={index}>
    <img
      className="d-block w-100"
      src={item.urlToImage}
      alt="First slide"
      style={{width:"400px", height:'550px'}}
    />
    <Carousel.Caption>
      <h3 style={{backgroundColor:'rgba(0, 0, 0, 0.644)' , padding:'10px'}} >{item.title}</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
);
 }) 
}
</Carousel>
<section className="row">
<div className="col-lg-6"style={{ display:'flex' ,flexDirection:'row', flexWrap:'wrap' }}>

{slidingOfdata!=''?slidingOfdata.slice(0,8).map((head, index)=>{
return(
<div key={index} style={{width:'50%' , height:'700px'}}>
<Card articles={head} ></Card>
</div>
);
}):<div class="spinner-border text-success" role="status">
<span class="sr-only">Loading...</span>
</div> 
}




</div>
<div className="col-lg-6 d-flex flex-wrap align-items-start">
{slidingOfdata!=''?slidingOfdata.map((head, index)=>{
return(
<div key={index} style={{width:'50%'}}>
<Headling items={head}></Headling>
</div>
);
}):<div class="spinner-border text-success" role="status">
<span class="sr-only">Loading...</span>
</div> 
}
</div>
</section>





</section>
        </>
    );   
   }