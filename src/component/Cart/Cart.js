import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props
    let Total = 0;
    let Shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity
        Total = Total + (product.price * product.quantity);
        Shipping = Shipping + product.shipping;
    }
    let Tax = (Total * 0.1).toFixed(2);
    const grandTotal = Total + Shipping + parseFloat(Tax)
    return (
        <div className='cart'>
            <h2>Order Summury</h2>
            <p>selected item:{quantity}</p>
            <p>Total price : ${Total}</p>
            <p>Total shipping: ${Shipping}</p>
            <p>Tax:{Tax}</p>
            <h3>Grand Total: ${grandTotal}</h3>

        </div>
    );
};

export default Cart;