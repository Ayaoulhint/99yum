import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
  return (
    <button
    className='bg-gradient-to-r from-orange-500 to-red-500 px-6 py-2 m-1 rounded-full text-white shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn