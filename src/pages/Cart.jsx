import axios from 'axios'
import React from 'react'
import CartProduct from '../components/Cart/CartProduct'
import getConfig from '../utils/getConfig'
import { getUserCart } from '../store/slices/cart.slice'
import { useDispatch, useSelector } from 'react-redux'
import './styles/cart.css'

const Cart = () => {

  const dispatch = useDispatch()

  const cartProducts = useSelector(state => state.cart)

  console.log(cartProducts)

  const handleCheckout = () => {
    const URL = 'https://e-commerce-api.academlo.tech/api/v1/purchases'
    const data = {
      street: "Green St. 1456",
      colony: "Southwest",
      zipCode: 12345,
      city: "USA",
      references: "Some references"
    }
    axios.post(URL, data, getConfig())
      .then(res => {
        console.log(res.data)
        dispatch(getUserCart())
      })
      .catch(err => console.log(err))
  }

  return (
    <section>
      <h2 className='cart' >Cart</h2>
      <div>
        {
          cartProducts?.map(product => (
            <CartProduct
              key={product.id}
              product={product}
            />
          ))
        }
      </div>
      <footer>
        <span>Total:</span>
        <p>
          {
            cartProducts ?
              cartProducts.reduce((acc, cv) => {
                return cv.price * cv.productsInCart.quantity + acc
              }, 0)
              :
              0
          }
        </p>
        <button onClick={handleCheckout}>Checkout</button>
      </footer>
    </section>
  )
}

export default Cart
