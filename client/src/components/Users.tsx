import userUtils from '../utils/usersUtils'
import {useEffect,useState} from 'react'
import User from './User'


function Users() {

  const [users,setUsers] = useState([] as any [] )

  useEffect(() => {
fetchUsers()
  },[])

  //functions

  const fetchUsers = async() => {

    let resp = await userUtils.fetchUsers();
    setUsers(resp)

  }
  return (
    <div>
<h1>Users List</h1>

<div className='users-main' >

    {
  users.map(user => {
return <User 
        key = {user._id}
        user = {user}
/>



  

  })
}
 
</div>

    </div>
  )
}

export default Users