import React from 'react';
import './styles.css';

const Contact = () => {
    return (
        <div className="contact">
            <h1>Contact Me</h1>
            <p>You can contact me at: email@example.com</p>

            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" />
                </label>
                <label>
                    Message:
                    <textarea name="message" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Contact;