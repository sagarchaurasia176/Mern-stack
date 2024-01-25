import React from 'react'

function Cart(props) {
    const {DataStored} = props;
  return (
     <>
        <i class="fa-solid fa-cart-shopping">
            <sup>{DataStored}</sup>
        </i>
     </>
  )
}

export default Cart