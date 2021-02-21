import { useState } from "react";
import { useEffect } from "react";

export default function Details(props) {
    

const [articles, setART]=useState({})

useEffect(()=>{

console.log(props.location.state.articles)
setART(props.location.state.articles)

},[])



return(
<>

<div className="card mb-3">
<section className='row'>
  <div className='col-lg-5' >  
  <img className="card-img-top" src={articles.urlToImage}  alt="Card image cap"></img>
  </div>  

  <div className='col-lg-7'>
  <div className="card-body">
    <h3 className="card-title">{articles.title}</h3>
    <p className="card-text">{articles.content}</p>
    <p className="card-text">{articles.description}</p>
    <p>author : {articles.author} </p>
    <p className="card-text"><small className="text-muted">{articles.publishedAt}</small></p>
    <a className='btn btn-warning' href={articles.url}>more info </a>
  </div>
  </div>
</section>  
</div>

</>
);
}

