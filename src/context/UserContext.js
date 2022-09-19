import {createContext,useState} from 'react'

const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [user,setUser] = useState(null);

    const values = {user, setUser}

    return <UserProvider value={values}>{children}</UserProvider>

}

export default UserContext;