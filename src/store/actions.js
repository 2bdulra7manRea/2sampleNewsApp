

import axios from 'axios';


export const GETNEWS=()=>async ( dispach)=>{
try{    
let response=await axios.get('http://newsapi.org/v2/everything?domains=wsj.com&apiKey=993537b58f7e47c8a6003aadce8a8a2e')
dispach({
type:'DO_GET_DATA',
payload:response.data.articles
})
}
catch(err){
console.log(err)
}
}