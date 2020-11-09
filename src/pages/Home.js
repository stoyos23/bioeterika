import React from 'react';
import './home.css';
import lavenderImg from '../images/lavender.jpg';
import lavenderDog from '../videos/lavenderDog.mp4';


function Home() {
    return (
        <>
            <div>Home Page</div>
            <div className="bg-video">
                <video className="video" autoPlay loop muted>
                    <source src={lavenderDog} type="video/mp4"></source>
                </video>
            </div>

            <div className="text-center">
                <h2>Who We Are</h2>
                <p>Some information about the company, production, origins etc.</p>
            </div>
        </>
    )
}

export default Home;