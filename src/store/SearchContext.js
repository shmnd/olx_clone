import { createContext,useState } from "react";

export const SearchContext= createContext([])

function Search({children}){
    const [searchRes,setSearchRes]=useState([])

    return(
        <SearchContext.Provider value={{searchRes,setSearchRes}}>
            {children}
        </SearchContext.Provider>
    )
}

export default Search