import React from 'react'
import './Card.css'
import PropsFuns from './Card1'
function change(){
    <PropsFun/>

}   
export default function PropsFun() {
    return (
        <>

            <div class="card">
                <img src="https://www.w3schools.com/w3images/team2.jpg" width={300} />
                <h1>John Doe</h1>
                <p class="title">CEO & Founder, Example</p>
                <p>Harvard University</p>
                <a href="#"><i class="fa fa-dribbble"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-linkedin"></i></a>
                <a href="#"><i class="fa fa-facebook"></i></a>
                <p><button onClick={change}>Contact</button></p>
            </div>


        </>
    )
}