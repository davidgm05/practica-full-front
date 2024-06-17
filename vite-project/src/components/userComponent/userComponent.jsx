import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, getUsersData, postUser, updateUser } from '../../core/services/userServices'
import { loadUsers } from './userAction'

const UserComponent = () => {
    const [usersList, setUsersList] = useState([])
    const [newUser, setNewUser] = useState({})
    const [updatedUser, setUpdatedUser] = useState({})
    const usersFromReducer = useSelector((state) => state.usersReducer.users);
    const dispatch = useDispatch()

    useEffect(() => {
        setUsersList(usersFromReducer)
        console.log(usersList)
    },[usersFromReducer])

    const createObjNewUser = (e) => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value,
        })
    }

    const addNewUser = () => {
        postUser(newUser)
        const aux = [...usersFromReducer]
        aux.push(newUser)
        dispatch(loadUsers(aux))
    }
    const borrarUserHandler = (id) => {
        const userDelete = async () => {
            console.log(id)
            deleteUser(id)
            const users = await getUsersData()
            dispatch(loadUsers(users))
        }
        userDelete()
    }

    const updateInputHandler = (e) => {
        setUpdatedUser({
            ...updatedUser,
            [e.target.name]: e.target.value,
        })
    }

    const updateUserHandler = async (id) => {
            updateUser(id, updatedUser);
            const users = await getUsersData();
            dispatch(loadUsers(users))
    }

  return (
    <div>
        <div>
            <input type="text" name='nombre' onChange={(e)=> createObjNewUser(e)} />
            <input type="text" name='apellido' onChange={(e)=> createObjNewUser(e)} />
            <button onClick={addNewUser}>crear</button>
        </div>
        {usersList && usersList.map((user, i) => (
            <div key={i}>
                <h2>{user.nombre} {user.apellido}</h2>
                <button onClick={() => borrarUserHandler(user._id)}>borrar</button>
                <div>
                    <input type="text" name='nombre' onChange={(e) => updateInputHandler(e)}/>
                    <input type="text" name='apellido' onChange={(e) => updateInputHandler(e)}/>
                    <button onClick={() => updateUserHandler(user._id)}>actualizar</button>
                </div>
            </div>
        ))}
    </div>
  )
}

export default UserComponent