import React, { useEffect, useState } from 'react'
import axios from '../utils/axios/axios'

const GetUsersPage = () => {

  const [users, setUsers] = useState([])

  const getUsers = async () => {
  
    const response = await axios.get('/users')
    setUsers(await response.data)
  
  }

  useEffect(() => {
    getUsers()
    }, [])

  return (
    <div>{JSON.stringify(users)}</div>
    )
}

export default GetUsersPage