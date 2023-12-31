import React, {useEffect, useState} from 'react'
import axios from 'axios'

const useEffectRender = () => {
  const [user, setUser] = useState(null)
  const fetchJSON = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users/1')
    return res.data;
  }
  useEffect(() => {
    const fetchUser = async () => {
      const user = await fetchJSON()
      setUser(user)
    }
    fetchUser()
  },[])
  
  return (
    <div>
      {user ? (
        <p data-testid="user">I am {user.username} : {user.email}</p>
      ) : null}
    </div>
  )
}

export default useEffectRender