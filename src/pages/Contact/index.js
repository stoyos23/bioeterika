
import React, { useState } from 'react';
import { Form, Input } from './ContactPageElements';
import { TopSpacer } from '../../pages/Home/HomePageElements';
import emailjs from 'emailjs-com';

function Contact() {

    return (
        <div>
            <TopSpacer />

            <Form className="contact-form" >
                <Input type="hidden" name="contact_number" />
                <label>Name</label>
                <Input type="text" name="user_name" />
                <label>Email</label>
                <Input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <Input type="submit" value="Send" />
            </Form>
        </div>
    )
}

export default Contact;