import React from 'react';
import './FeedbackForm.css'; 
import Header from './Header';
import Footer from './Footer';


const FeedbackForm = () => (
    <>
        <Header/>
    <section className="feedback-form-container">
        <form action="#" method="POST" className="feedback-form">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email (required)</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="phone">Phone Number (optional)</label>
            <input type="tel" id="phone" name="phone" />

            <label htmlFor="feedback">Feedback</label>
            <textarea id="feedback" name="feedback" rows="4" required></textarea>

            <div className="form-buttons">
                <button type="submit" className="send-btn">
                    Send
                </button>
                <button type="reset" className="reset-btn">
                    Reset
                </button>
            </div>
        </form>
        </section>
        <Footer />
        </>
);

export default FeedbackForm;
