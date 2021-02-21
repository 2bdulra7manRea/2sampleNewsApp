export default function Headling({items}){




return(

<div className="card"  style={{width:"100%" , height:'230px', border:'1px solid red' , backgroundColor:'lightgrey'}}>
  <div className="card-body" style={{ height:'110px' , overflow:'hidden'}}>
    <h6 className="card-subtitle mb-2 text-muted">{items.publishedAt}</h6>
    <h3 style={{display:'inline' , color:'red'}}>{items.source.name}/</h3>
    <h3 style={{display:'inline' }}>{items.title}</h3>
  </div>
  <div>
  <a href={items.url} className="btn">INFO</a>
  </div>
</div>

);





}