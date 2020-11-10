import React from 'react';
import { Image, ImageBox, Button, TestBtn} from './HomePageElements';
import lavenderImg from '../../images/lavender-oil.jpg'



const Home = () => {
    return (
        <>
            <ImageBox>
                <Image src={lavenderImg} alt="Snow"></Image>
                <TestBtn>Shop Now</TestBtn>
            </ImageBox>

            <div className="text-center">
                <h2>Who We Are</h2>
                <p>Some information about the company, production, origins etc.</p>
            </div>
        </>
    )
}

export default Home;