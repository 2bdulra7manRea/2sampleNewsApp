import axios from 'axios';

let linkOne='http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=993537b58f7e47c8a6003aadce8a8a2e'
export const getPartTslaNews=()=>{

return axios.get(linkOne)
}


let linkTow='http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=993537b58f7e47c8a6003aadce8a8a2e'
export const getPartBusinessNews=()=>{
return axios.get(linkTow)
}



let linkthree='http://newsapi.org/v2/everything?q=apple&from=2021-02-08&to=2021-02-08&sortBy=popularity&apiKey=993537b58f7e47c8a6003aadce8a8a2e'
export const getPartApple=()=>{
return axios.get(linkthree)
}

let CountryGet='https://extreme-ip-lookup.com/json/';

export const getLocationOftheCountry=()=>{
return axios.get(CountryGet)
}



let financeUrl='https://morning-star.p.rapidapi.com/news/list'

export const ApiFinance=()=>{
    return axios.get(financeUrl , {
        headers:{
            "x-rapidapi-key": "4c20780e23msh9433ad7f86d531ap16a232jsnea903001c210",
            "x-rapidapi-host": "morning-star.p.rapidapi.com",
            'useQueryString': true
        },
        params:{'performanceId':"0P0000OQN8"}
    })
}

