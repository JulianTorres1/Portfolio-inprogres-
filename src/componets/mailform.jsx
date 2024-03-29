import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

//mail api

import{ init } from '@emailjs/browser';
init("user_5u6vRK7MJMtC6oiAdP183");



export const Mailform = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(

            'Nicolas_portfolio',
            'template_7qsrxtc', form.current,
            'user_5u6vRK7MJMtC6oiAdP183'
        )
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
    );
};


export default Mailform;