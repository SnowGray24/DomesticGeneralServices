import React, {useContext, createContext, useState} from 'react';



const ContextAllUsers = createContext()

export default function UsersProvider({ children }) {
    const [users, setUsers] = useState([]);
  
    return (
      <ContextAllUsers.Provider
        values={{
          users,
          setUsers
        }}
      >
        {children}
      </ContextAllUsers.Provider>
    );
  }


  export function useUsers() {
    const context = useContext(ContextAllUsers);
    if (!context) throw new Error("useCount must be used within a CountProvider");
    const { users, setUsers } = context;
    return { users, setUsers };
  }