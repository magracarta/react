import { createContext, useContext, useEffect, useState } from "react";
import { login, logout, onUserStateChange } from "../../api/firebase";

const AuthContext = createContext();

export function AuthoContextProvider({children}){
    const [user, setUser] = useState();
    useEffect(()=>{
        onUserStateChange(setUser);
    },[]);

    return <AuthContext.Provider value={{user, login, logout}}>
        {children}
    </AuthContext.Provider>
}

export function useAuthcontext(){
    return useContext(AuthContext);
}