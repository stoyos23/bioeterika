import React, { useState } from 'react';
import { TextArea, SubmitButton } from './ContactPageElements';
import { TopSpacer } from '../../pages/Home/HomePageElements';

function Contact() {

    const [textInput, setTextInput] = useState("");

    const userInputHandler = (e) => {
        setTextInput(e.target.value);
    }

    return (
        <>
            <TopSpacer />

            <h1>Contact Form</h1>
            <TextArea onChange={userInputHandler} cols="40" rows="10" />
            <SubmitButton >Submit</SubmitButton>
            <text>{textInput}</text>
        </>
    )
}

export default Contact;