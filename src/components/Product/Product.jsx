import React from 'react';
import './Product.css'
const Product = (props) => {
    // console.log(props.product);
    const {img, name, seller, quantity, price, ratings} = props.product;
    return (
        <div className='product'>
            <img src={img} alt=""/>

            <section className='product-info'>
                <h6 className='product-name'>{name}</h6>

                <p>Price&#58; &#36;{price} </p>
                <p>Manufacturer&#58; {seller}</p>
                <p>Rating&#58; {ratings} Stars </p>
            </section>
            <button className='button-addcart'>Add to Cart</button>
            
        </div>
    );
};

export default Product;