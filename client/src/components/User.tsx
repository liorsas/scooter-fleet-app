import React from 'react'

interface IProps {
    user: {
       _id:string
       username: string
       passward: number
       firstName:string
       lastName:string
       email:string
 
    }
    
}

function User({user}:IProps) {
  return (
    <div className='user-box'>
        <label>User Name:</label> {' '}
        <label>{user.firstName} {' '} {user.lastName}</label><br />
        <label>Email:</label> {' '}
        <label>{user.email} </label>
        
        </div>
  )
}

export default User