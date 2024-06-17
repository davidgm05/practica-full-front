import React, { useEffect, useState } from 'react'
import UserComponent from '../components/userComponent/userComponent'
import { useDispatch } from 'react-redux'
import { loadUsers } from '../components/userComponent/userAction'
import { getUsersData } from '../core/services/userServices'

const UsersListPage = () => {
    const [usersListData, setUsersListData] = useState(undefined)
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchUsers = async () =>{
          const aux = await getUsersData()
          setUsersListData(aux)
        }
        fetchUsers()
      }, [])

    useEffect(() => {
        dispatch(loadUsers(usersListData))
    },[usersListData])
  return (
    <>
    <UserComponent/>
    </>
  )
}

export default UsersListPage