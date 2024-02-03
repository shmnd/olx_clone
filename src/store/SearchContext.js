import { createContext,useState } from "react";

// export const SearchContext= createContext([])
// export const SearchContext = createContext({ searchCategory: '' });
export const SearchContext = createContext({ searchRes: { searchCategory: '' }, setSearchRes: () => {} });


function Search({children}){
    // const [searchRes,setSearchRes]=useState([])
    const [searchRes, setSearchRes] = useState({ searchCategory: '' });

    return(
        <SearchContext.Provider value={{searchRes,setSearchRes}}>
            {children}
        </SearchContext.Provider>
    )
}

export default Search;