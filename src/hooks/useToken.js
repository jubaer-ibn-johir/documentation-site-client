import { useEffect, useState } from "react"

const useToken = user => {
  const [token, setToken] = useState('')
  console.log(user)
  useEffect(() => {
    const email = user?.user?.email
    const name = user?.user?.displayName
    const photo = user?.user?.photoURL
    const currentUser = {
      name: name,
      email: email,
      photo: photo
    }
    if (email) {
      fetch(`https://polar-shore-69456.herokuapp.com/user/${email}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
      })
        .then(res => res.json())
        .then(data => {
          const accessToken = data.token
          localStorage.setItem('accessToken', accessToken)
          setToken(accessToken)
          console.log(data);
        })
    }

  }, [user])
  return [token]
}
export default useToken;