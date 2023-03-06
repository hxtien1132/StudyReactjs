import React, { createContext, useContext, useState } from 'react';
const AuthContext = createContext()
function AuthProvider(props){
    console.log("props",props);
    const [user,setUser] = useState({
        userId:1,
        fullname:"hxt",
        email:"hxt132@gmail.com",
        avatar:"https://images.unsplash.com/photo-1667429135701-0df2b16de1b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
       
    });
    const value = {user,setUser};
    return <AuthContext.Provider value={value} {...props} ></AuthContext.Provider>
}
function useAuth(){
    const context = useContext(AuthContext);
    if(typeof context === "undefined")
    throw new Error("useAuth must be used within a AuthProvider");
    return context ;
}
export {useAuth ,AuthProvider}