import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { Link,useNavigate } from 'react-router-dom'
import {Input} from './index'
import { useForm } from 'react-hook-form'
import {login as authLogin} from '../Store/authSlice'
import authService from '../appwrite/auth'

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [error,setError] = useState('')
    const {register,handleSubmit} = useForm()

    //login function will gonna use at handleSubmit
    const login = async(data) =>{
        setError('')
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if (userData) {
                    dispatch(authLogin(userData))
                }
                navigate('/')
            }
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div className='flex items-center justify-center'>
        <h2 className='text-center text-2xl font-bold'>Sign in to your account</h2>
        <p className='text-center '>Don't have an account
        <Link to="/signup">
            Sign Up
        </Link>
        </p>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit(login)}>
            <div className=''>
            <Input
            type="email"
            label="email"
            placeholder ="Enter your email"
            {...register("email",{
                required:true,
                validate:{
                    matchPattern:(value)=>/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                }
            })}
            />
            <Input
            type="password"
            label="password"
            placeholder ="Enter your password"
            {...register("password",{
                required:true,
                minLength:6,
            })}
            />
            <button type='submit' className='bg-gradient-to-r from-orange-500 to-red-500 p-2 m-1 rounded-lg text-white shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl'>
              Login
            </button>
            </div>
        </form>



    </div>
  )
}

export default Login