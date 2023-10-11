// import React from 'react';

// const Cart = (props) => {
//     const cart = props.cart;
//     console.log(cart);
//     const total = cart.reduce((sum,num)=>sum + num.price,0)
//     return (
//         <div>
//             <h2>Cart</h2>
//             <h5>Total Course selected:{cart.length}</h5>
//             <h5>price:{total}</h5>

//         </div>
//     );
// };

// export default Cart;

import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    
    // Use reduce to calculate the total price
    const total = cart.reduce((sum, item) => sum + parseFloat(item.price), 0);
    
    return (
        <div>
            <h2>Cart</h2>
            <h5>Total Course selected: {cart.length}</h5>
            <h5>Total Price: {total}</h5>
        </div>
    );
};

export default Cart;
