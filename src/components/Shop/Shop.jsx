import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
// use state
    const [products, setProducts] = useState([]);


// use effect and fetch for importing data from 'products.json' in the "public" folder
    useEffect( () =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    
    return (

        <div className='shop-container'>
        {/* products container start */}
                <div className="products-container">
                    {
                       products.map(product => <Product key={product.id
                    } product = {product} ></Product> ) 
                    }
                </div>
        {/* products container ends */}

        {/* cart container start */}  
                <div className="cart-container">
                    <h4>Order Summary</h4>
                </div>
        {/* cart container end */}
        </div>
    );
};

export default Shop;