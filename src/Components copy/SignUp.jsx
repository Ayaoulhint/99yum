import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import authService from '../appwrite/auth'
import {login as authLogin} from '../Store/authSlice'
import {useForm} from 'react-hook-form'
import Input from './Input'


function SignUp() {
    const [error,setError] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {register,handleSubmit} = useForm()

    const create = async(data)=>{
        setError('')
        try {
            const session = await authService.createAccount(data)
            console.log(session)
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
        <h2 className='text-center text-2xl font-bold'>Sign up to create your account</h2>
        <p className='text-center '>Already have an account
        <Link to="/login">
            Sign In
        </Link>
        </p>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit(create)}>
            <div className=''>
                <Input
                label="Full Name: "
                type="text"
                placeholder = "Enter your Full Name"
                {...register("name",{
                    required:true,
                })}

                />
                <Input
                label="Email: "
                type="email"
                placeholder = "Enter your Email"
                {...register("email",{
                    required:true,
                    validate: {
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
                })}
                />
                <Input
                label="Password: "
                type="password"
                placeholder = "Enter your Password"
                {...register("password",{
                    required:true,
                    minLength: 6,
                })}
                />
                <button type='submit' className='bg-gradient-to-r from-orange-500 to-red-500 p-2 m-1 rounded-lg text-white shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl'>
                    Create Account
                </button>
            </div>
        </form>
    </div>
  )
}

export default SignUp