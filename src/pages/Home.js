import React from 'react';
import './home.css';
import lavenderImg from '../images/lavender-oil.jpg';
import {Button} from 'react-bootstrap';


function Home() {
    return (
        <>
            <div>Home Page</div>
            {/* <div className="bg-video">
                <video className="video" autoPlay loop muted>
                    <source src={lavenderDog} type="video/mp4"></source>
                </video>
            </div> */}

            <div className="img-box">
                <img className="img" src={lavenderImg} alt="Snow" />
                <Button className="shopping-btn" variant="light" size="lg">Light</Button>
            </div>

            <div className="text-center">
                <h2>Who We Are</h2>
                <p>Some information about the company, production, origins etc.</p>
            </div>
        </>
    )
}

export default Home;