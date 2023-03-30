import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
// use state 1 ---------------
    const [products, setProducts] = useState([]);
// use state 2 for adding prodiuct to cart----------
    const [cart, setCart] = useState([])

// use effect and fetch for importing data from 'products.json' in the "public" folder
    useEffect( () =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);
    
//(moved from product.jsx) button add to cart eventhandler-------------------
    const handleAddToCart = (product) => {
        // console.log(product);
         
        const newCart = [...cart, product];
        setCart(newCart);

    }
    return (

        <div className='shop-container'>
        {/* products container start------------ */}
                <div className="products-container">
                    {
                       products.map(product => <Product key={product.id
                    } product = {product} handleAddToCart ={handleAddToCart} ></Product> ) 
                    }
                </div>
        {/* products container ends------------- */}

        {/* cart container start------------ */}  
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
        {/* cart container end---------- */}
        </div>
    );
};

export default Shop;