import { useContext } from 'react'
import { UserContextA } from './UserContextA'

export const UserA = () => {
  const userContext = useContext(UserContextA)
  const handleLogin = () => {
  //  if (userContext) {
      userContext.setUser({
      name: 'Vishwas',
      email: 'asd@asd.com'
    })
  // }
  }
  const handleLogout = () => {
  // if (userContext) {
      userContext.setUser(null)
   //}
  }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {userContext?.user?.name}</div>
      <div>User email is {userContext?.user?.email}</div>
    </div>
  )
}