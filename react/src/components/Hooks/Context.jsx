import {createContext} from 'react'
export const Context=createContext();
 export const UserContext = ({children}) => {
    const user = {name:"Premi",phoneno:"9876543210"}
  return (
    <div>
        <Context.Provider value={user}>{children}</Context.Provider>
    </div>
  )
}

export default Context