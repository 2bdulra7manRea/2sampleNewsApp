
    
    import { getPartApple } from '../networks/Network';
    import { useEffect, useState } from "react";
    import Card from '../components/card';
import { useSelector } from 'react-redux';
import aos from 'aos';  
     export default function Technology() {   
    
        let [newData, setNewData]=useState([])    
    
        useEffect(()=>{
          aos.init({
           duration:2000,
           easing:'ease-in-out',
           delay:100, 
          })

        getPartApple().then((data)=>{
        console.log(data.data.articles)
        setNewData(data.data.articles)
        })
return()=>{

  setNewData([])
}
        

        },[])
        useSelector((data)=>{
          console.log("health....................................")
          console.log(data)
          })
    return(
        <>
        <div className='d-flex flex-wrap flex-row'>
        {newData!=''?newData.map((news, index)=>{
        return(
        <div key={index} data-aos='slide-up' >
        <Card  articles={news} ></Card>
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