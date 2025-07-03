import React, { Component } from 'react';

class ContactSection extends Component {
    render() {
        return (
            <section id="contact" className="portfolio-section styled-section animate-fade-in">
                <div className="content-wrapper">
                    <h3>Contact</h3>
                    <p>Let's work together! You can reach me at:</p>
                    <div className="contact-info">
                        <p>Email: ulrichsnyman2006@gmail.com</p>
                        <p>LinkedIn: <a href="https://www.linkedin.com/in/ulrich-snyman-a5a980368/" target="_blank" rel="noopener noreferrer">Ulrich Snyman</a></p>
                        <p>GitHub: <a href="https://github.com/Thefirstxerg" target="_blank" rel="noopener noreferrer">Thefirstxerg</a></p>
                    </div>
                </div>
            </section>
        );
    }
}

export default ContactSection;