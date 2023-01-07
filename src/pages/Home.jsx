import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardProduct from '../components/Home/CardProduct'
import FilterCategory from '../components/Home/FilterCategory'
import './styles/home.css'

const Home = () => {

    const [productsFilter, setProductsFilter] = useState()

    const products = useSelector(state => state.products)

    useEffect(() => {
        setProductsFilter(products)
    }, [products])
    

    const handleChange = e => {
        const inputValue = e.target.value.toLowerCase().trim()
        const filter = products?.filter(prod => prod.title.toLowerCase().includes(inputValue))
        setProductsFilter(filter)
    }

    return (
        <div>
            <input onChange={handleChange} type="text" />
            <FilterCategory />
            <div className='products-container'>
                {
                    productsFilter?.map(product => (
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