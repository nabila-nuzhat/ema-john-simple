import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus} from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
    // console.log(props.product);
    const {img, name, seller, quantity, price, ratings} = props.product;
    const handleAddToCart = props.handleAddToCart;

//(previously added) button add to cart eventhandler
    // const handleAddToCart = (product) => {
    //     console.log(product);}
    return (
        <div className='product'>
            <img src={img} alt=""/>

            <section className='product-info'>
                <h6 className='product-name'>{name}</h6>

                <p>Price&#58; &#36;{price} </p>
                <p>Manufacturer&#58; {seller}</p>
                <p>Rating&#58; {ratings} Stars </p>
            </section>
            <button className='button-addcart'
            onClick={() => handleAddToCart(props.product)}>Add to Cart <FontAwesomeIcon icon={faCartPlus} /> </button>
            
        </div>
    );
};

export default Product;