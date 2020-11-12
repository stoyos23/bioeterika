import React, { Fragment } from 'react';
import { Image, ImageBox, Button, Divider, Heading, TopSpacer } from './HomePageElements';
import lavenderImg from '../../images/lavender-oil.jpg';
import lavenderVintageImg from '../../images/lavender-vintage.jpg';
import lavenderOnTableImg from '../../images/lavenderOnTable.jpg';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <>
        <TopSpacer/>
            <Divider />

            <ImageBox>
                <Image src={lavenderImg} alt="Snow"></Image>
                <Heading>BIOETERIKA</Heading>
                <Link to="/shop"><Button>Shop Now</Button></Link>
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