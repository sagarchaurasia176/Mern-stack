import React from 'react'
import './Card.css'
export default function PropsFuns() {
    return (
        <>

            <div class="card">
                <img src="https://www.w3schools.com/w3images/team2.jpg" width={300} />
                <h1>Sagar Chauraia</h1>
                <p class="title">CEO & Founder, Example</p>
                <p>Harvard University</p>
                <a href="#"><i class="fa fa-dribbble"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-linkedin"></i></a>
                <a href="#"><i class="fa fa-facebook"></i></a>
                <p><button>Contact</button></p>
            </div>
        </>
    )
}