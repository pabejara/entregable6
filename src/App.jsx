import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { getAllProducts } from './store/slices/products.slice'
import { useEffect } from 'react'
import ProductInfo from './pages/ProductInfo'
import Login from './pages/Login'
import { getUserCart } from './store/slices/cart.slice'
import Header from './components/shared/Header'
import Cart from './pages/Cart'
import Purchases from './pages/Purchases'
import ProtectedRoutes from './components/shared/ProtectedRoutes'
import Footer from './components/shared/Footer'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
    dispatch(getUserCart())
  }, [])

  // este es el codigo para crear un nuevo usuario
  // useEffect(() => {
  //   const URL = 'https://e-commerce-api.academlo.tech/api/v1/users/'
  //   const data = {
  //     firstName: "Pablo",
  //     lastName: "Bejarano",
  //     email: "pabejara@gmail.com",
  //     password: "Aca1234567",
  //     phone: "3208488900",
  //     role: "admin"
  //   }

  //   axios.post(URL, data)
  //   .then(res => res.data)
  //   .catch(err => console.log(err))
  // }, [])

  // aqui ternmina

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product/:id' element={<ProductInfo />} />
        <Route element={<ProtectedRoutes />} >
          <Route path='/cart' element={<Cart />} />
          <Route path='/purchases' element={<Purchases />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App

