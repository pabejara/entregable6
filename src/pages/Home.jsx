import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import CardProduct from '../components/Home/CardProduct'

const Home = () => {

    const [productsFilter, setProductsFilter] = useState()

    const products = useSelector(state => state.products)

    const handleChange = e => {
        console.log(e.trget.value)
        const filter = products?.filter(prod => prod.title.toLowerCase() === e.trget.value.toLowerCase().trim()) 
        setProductsFilter(filter)
    }

    return (
        <div>
            <input onChange={handleChange} type="text" />
        <div className='products-container'>
            {
                products?.map(product => (
                    <CardProduct
                        key={product.id}
                        product={product}
                    />
                ))
            }
        </div>
        </div>

    )
}

export default Home