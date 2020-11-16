import React, { useState } from 'react';
import { Form, Input } from './ContactPageElements';
import { TopSpacer } from '../../pages/Home/HomePageElements';
<<<<<<< HEAD
=======
import emailjs from 'emailjs-com';
>>>>>>> dee96bc36cb154c82b4f7a3f8f7ea9ab19b0a7cf
import emailSender from './emailSender';

function Contact() {

<<<<<<< HEAD
=======

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_xd0cqts', 'template_e47d3o8', e.target, 'user_vVoUMF4u9UV23R8xtHXUK')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

>>>>>>> dee96bc36cb154c82b4f7a3f8f7ea9ab19b0a7cf
    return (
        <>
            <TopSpacer />

            <Form className="contact-form" onSubmit={emailSender}>
                <Input type="hidden" name="contact_number" />
                <label>Name</label>
                <Input type="text" name="user_name" />
                <label>Email</label>
                <Input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <Input type="submit" value="Send" />
            </Form>
        </>
    )
}

export default Contact;