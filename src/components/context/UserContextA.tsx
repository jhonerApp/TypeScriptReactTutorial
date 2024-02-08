import React, { useState, createContext } from "react";

type AuthUser = {
  name: string;
  email: string;
};

type UserContextType = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};

type UserContextProviderProps = {
  children: React.ReactNode;
};

//export const UserContextA = createContext<UserContextType | null>(null)
// Requires to check if your value is null in UserA.tsx using if (userContext) {}


export const UserContextA = createContext({} as UserContextType)
//Remove to check if the value is null UserA.tsx 

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  //const [a, serA] = useState(null);

  return (
    <UserContextA.Provider value={{ user, setUser }}>
      {children}
    </UserContextA.Provider>
  );
};
