import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

const Login = () => {

  const [isLogged, setIsLogged] = useState(false)

  const {handleSubmit, register, reset} = useForm()

  const submit = (data) => {
    const URL = 'https://e-commerce-api.academlo.tech/api/v1/users/login';
    axios.post(URL, data)
      .then((res) => {
        console.log(res.data.data);
        localStorage.setItem('token', res.data.data.token);
        setIsLogged(true)
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
  
  if(isLogged) {
    <h1>User Logged </h1>
  }


  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" id='email' {...register("email")} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id='password' {...register("password")} />
        </div>
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login
