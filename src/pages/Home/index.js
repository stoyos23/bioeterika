import React, { Fragment } from 'react';
import { Image, ImageBox, TestButton, Divider, Heading, TopSpacer } from './HomePageElements';
import lavenderImg from '../../images/lavender-oil.jpg';
import { Link } from 'react-router-dom';


const Home = () => {

    const onMouseMove = (e) => {

        const x = e.pageX - e.target.offsetLeft + 378
        const y = e.pageY - e.target.offsetTop - 84

        e.target.style.setProperty('--x', `${x}px`)
        e.target.style.setProperty('--y', `${y}px`)
        console.log(e.pageX);

    }

    return (
        <>
            <TopSpacer />

            <ImageBox>
                <Image src={lavenderImg} alt="Snow"></Image>
                <Heading>BIOETERIKA</Heading>
                <Link to="/shop"><TestButton onMouseMove={onMouseMove}>Shop Now</TestButton></Link>
            </ImageBox>

            <Divider />

            <div className="text-center">
                <h2>About Us</h2>
                <p>Some information about the company, production, origins etc.</p>
            </div>
        </>
    )
}

export default Home;