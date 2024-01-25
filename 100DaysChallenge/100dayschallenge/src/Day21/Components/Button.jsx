import React from 'react'
import { useState } from 'react';

export default function Button() {
    let [products, setProducts] = useState(0);
    const addHandler = () => {
        setProducts(products + 1);
    };
    let DataStored = { products };
    return (

        <>
            <button onClick={addHandler}>Add To cart</button>

        </>

    )
}
