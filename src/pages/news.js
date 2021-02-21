import { useEffect, useState } from "react";
import { getPartApple, getPartTslaNews } from '../networks/Network';
import axios from 'axios';
import Card from "../components/card";
import aos from 'aos';
import 'aos/dist/aos.css';
export default function News() {

let [newData, setNewData]=useState([])    

useEffect(()=>{

aos.init({
duration:2000,
easing:'ease-in-out',
delay:100

})    

getPartApple().then((data)=>{
console.log(data.data.articles)
setNewData(data.data.articles)

})


},[])





    return(
        <>


<div className='container d-flex flex-wrap p-5'>
{newData.map((news, index)=>{
return(
<div key={index} data-aos='flip-up'>
<Card  articles={news} ></Card>
</div>
);
})
}
       </div>
        </>
    );   
   }