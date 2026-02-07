import { createContext, useContext, useState } from "react";
import UserData from "../data.json";

export const userContext = createContext();

export const UserProvider =  ({children}) => {
    const [users, setUsers] = useState(UserData);

   
    

    const addUser = (data) => {
        setUsers((prev) => [...users,{ id: Date.now().toString(), ...data } ])
    }


    return(
        <userContext.Provider value={{users, setUsers, addUser}}>
         {children}
        </userContext.Provider>
    )
}

export const useUserContext = () => {
    const data = useContext(userContext);
    return data;
    
}