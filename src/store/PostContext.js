import { createContext,useState } from "react";


export const PostContext = createContext(null)  //it's named export

function Post({children}){
    const [postDetails,setPostDetails]=useState()
    return(
        <PostContext.Provider value={{postDetails,setPostDetails}}>
            {children}
        </PostContext.Provider>

    )
}


export default Post  //component export