import React from 'react'
import '../index.css'
import { useState } from 'react';

// what is useState 
/*
    Syntax - 
    const [value , value update funaction] = useState();

    to change the render values 
*/ 

const ProductImg =
    [ 
        {
            productId: 'sagar',
            productName: 'comming soon',
        },
        {
            productId: 'raju',
            productName: 'comming soon',
        }
    ]
        
        function moveHandler(){
               let text =  document.createElement('p');
                    text.innerHTML = 'hello jsx';
                    document.body.appendChild(text);
            }

export default function ArrayImg() {
    return (
        <>
            <div className="container">
                {ProductImg.map((dtl) => (
                    <>
                        <p key={dtl.productId}>
                            {dtl.productId}
                        </p>
                            <p>{dtl.productName}</p>
                        <button onClick={moveHandler}>clikk</button>
                    </>
                ))}


            </div>

        </>
    )
}