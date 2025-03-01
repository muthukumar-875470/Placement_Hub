import React, { useContext, useState } from 'react'

const Authcontext=React.createContext()
export function AuthProvider(props) {
    // const[user,setUser]=useState(null)
    // function login(userData){
    //     setUser(userData)
    // }

    // function logout(){
    //     setUser(null)
    // }




        //-----------------Updated Code-------------------//

const [user, setUser] = useState(localStorage.getItem('userEmail') || null);

function login(userData) {
  setUser(userData);
  localStorage.setItem('userEmail', userData); // Store email in localStorage
}

function logout() {
  setUser(null);
  localStorage.removeItem('userEmail'); 
}

        //---------------------------------------------//



    return(
        <Authcontext.Provider value={{user,login,logout}}>
            {props.children}
        </Authcontext.Provider>
    )
}

export function useAuth(){
    return useContext(Authcontext)
}

