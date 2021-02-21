import React from 'react';

const NumberOfLikes=React.createContext({
value:9,
setVal:()=>{}
})
export const ProviderContext=NumberOfLikes.Provider;
export default NumberOfLikes;
