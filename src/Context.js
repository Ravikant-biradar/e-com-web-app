import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { app } from './Firestoreconfig'

export const authcontext = createContext()

function Context({children}) {
     const [user ,setuser] = useState(null)
     const [value , setvalue ] = useState(10)
     const auth = getAuth(app)
     useEffect(()=>{
        onAuthStateChanged(auth , (user)=>{
          setuser(user)
        })
     },[])
  return (
    <>
     <authcontext.Provider value={{user , value}}>{children}</authcontext.Provider>
    </>
  )
}

export default Context