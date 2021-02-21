import React from 'react'
const ContextCountry=React.createContext({
country:'',
SetCountry:()=>{}
})


export const CountryProvider=ContextCountry.Provider;
export default ContextCountry;

