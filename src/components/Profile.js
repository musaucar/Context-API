import {useContext, useState} from 'react'

import UserContext from '../context/UserContext' 

function Profile() {
    const {user, setUser} = useContext(UserContext);

    const [loading, setLoading] = useState(false);

    const handleLogin = () => {
      setLoading(true)
      setTimeout(() => {
        setUser({id:1, username:"musaucar", bio:"lorem ipsum dolor"})
        setLoading(false)
      },1500)
    };

    const handleLogout = () => {
      setUser(null);
    }
  return (
    <div>
      {
        !user && <button onClick={handleLogin}>{loading ? 'loading...' : "Login"}</button>
      }
      <br />
      <code>{JSON.stringify(user)}</code>
      <br />
      {
        user && <button onClick={handleLogout}></button>
      }
    </div>
  )
}

export default Profile