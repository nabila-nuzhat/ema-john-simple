import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
// option 1:
    // const cart = props.cart;
// option 2: destructuring-------
    // const {cart} = props;
// option 3: use the {cart} instead of props which is the shortcut of option 2

console.log(cart);

// cart total price
    let totalPrice = 0;
    let totalShipping = 0;
    for (const product of cart){
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;
    }
// 7% tax on totao price
    const tax = totalPrice*7/100;

// grand Total
    const grandTotal = totalPrice + totalShipping + tax;
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
                    <p>Selected Items: {cart.length} </p>
                    <p>Total Price: &#36;{totalPrice} </p>
                    <p>Total Shipping Charge: &#36;{totalShipping} </p>
                    <p>Tax: &#36;{tax.toFixed(2)} </p>
                    <h6>Grand Total: &#36;{grandTotal.toFixed(2)} </h6>
        </div>
    );
};

export default Cart;