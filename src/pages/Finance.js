import { useEffect, useState } from "react"
import { ApiFinance } from "../networks/Network"

export default function Finance(){

let [infoNew , setInfoNew]=useState([]);
let [artInfo , setartInfo]=useState([]);
useEffect(()=>{
ApiFinance().then((d)=>{
console.log(d.data)
setInfoNew(d.data)
})





return()=>{
    setInfoNew([])
}
},[])


return(<>
<section className='row'>
<div className='col-2'>
{infoNew.slice(0,4).map((data , index)=>{
return(
<div className="card" key={index}>
  <div className="card-body">
    <h5 className="card-title">{data.sourceName}</h5>
    <p className="card-text">{data.title}</p>
  </div>
</div>
)
})}
</div>
<div className='col-8'>


</div>
<div className='col-2'>
{infoNew.slice(4,9).map((data , index)=>{
return(
<div className="card" key={index}>
  <div className="card-body">
    <h5 className="card-title">{data.sourceName}</h5>
    <p className="card-text">{data.title}</p>
  </div>
</div>
)
})}
</div>
</section>



</>)
}