import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import './styles/login.css'

const Login = () => {

  const navigate = useNavigate()

  const [isLogged, setIsLogged] = useState(false)

  const {handleSubmit, register, reset} = useForm()

  const submit = (data) => {
    const URL = 'https://e-commerce-api.academlo.tech/api/v1/users/login';
    axios.post(URL, data)
      .then((res) => {
        console.log(res.data.data);
        localStorage.setItem('token', res.data.data.token);
        setIsLogged(true)
        navigate('/')
      })
      .catch((err) => console.log(err));
    reset({
      email: '',
      password: '',
    })
  }

  useEffect(() => {
    const condition = localStorage.getItem('token') ? true : false
    setIsLogged(condition)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    setIsLogged(false)
  }
  
  if(isLogged) {
    return (
      <div>
         <h3 className='logged' >User Logged👌</h3>
         <button onClick={handleLogout} >Logout</button>
      </div>
    )
  }

  return (
    <div className='login'  >
      <h3>Welcome! Enter your email and</h3>
      <h3>password to continue</h3>
      <form  onSubmit={handleSubmit(submit)} >
        <div  >
          <label htmlFor="email">Email</label>
          <input type="text" id='email' {...register("email")} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id='password' {...register("password")} />
        </div>
        <button className='btn' >Login</button>
      </form>
      <h5>Don't have an account? Sign up</h5>
    </div>
  )
}

export default Login
