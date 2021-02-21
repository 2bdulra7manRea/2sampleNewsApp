import { getPartBusinessNews } from '../networks/Network';
import { useEffect, useState } from "react";
import Card from '../components/card';
import aos from 'aos'
import 'aos/dist/aos.css';
export default function Business() {
    

    let [newData, setNewData]=useState([])    

    useEffect(()=>{

      aos.init({
        duration:2000
      })
    getPartBusinessNews().then((data)=>{
    console.log(data.data.articles)
    setNewData(data.data.articles)
    })

return()=>{
  setNewData([])
}

    },[])
    



    return(
        <>
<div className='d-flex flex-wrap flex-row'>

{newData!=''?newData.map((news, index)=>{
return(
<div key={index} data-aos='fade-up'>
<Card articles={news}></Card>
</div>
)
})

:
<div className="text-center">
  <div className="spinner-border" role="status">
    <span className="sr-only">Loading...</span>
  </div>
</div>


}

       </div>
        </>
    );   
   }