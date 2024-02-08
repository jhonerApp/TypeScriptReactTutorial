import { useState } from "react";


type AuthUser = {
    name: string
    email: string
}

export const User = () => {
    

    const [user, setUser] = useState<AuthUser>({} as AuthUser) 
    //{} as AuthUser = remove ? or example user?.name
    // now you will allow to use type assertion if value is string or integer
    
       const handleLogin = () => {
        setUser({
            name: "J",
            email: "JJ"
          })
          
        
       }
       const handleLogout = () => {
        setUser({} as AuthUser)
       }
   
       return (
           <div>
               <button onClick={handleLogin}>Login</button>
               <button onClick={handleLogout}>Logout</button>
               <div>User name is {user.name}</div>
               <div>User email is {user.email}</div>
           </div>
       )
   
     };