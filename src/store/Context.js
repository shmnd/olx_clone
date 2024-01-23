// this all data we can call globally that the purpose of this floder

import { createContext, useState } from "react";

export const FirebaseContext = createContext(null);
export const Authcontext =createContext(null);

export default function Context ({children}){             //the reason we put in context for we are using this data every where that we need 

    const [user,setUser]=useState(null)

    return(                                                 //created a component and created a state and passed user state gollably via provider
        <Authcontext.Provider value={{user,setUser}}>     
            {children}
        </Authcontext.Provider>     //childeren mean app
    )

}
