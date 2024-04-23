import React, { useState } from 'react';
import './Faq.css';
import Footer from './Footer'
import Navbar from './Navbar'

const FAQ = () => {
    const [answersVisible, setAnswersVisible] = useState({});

    const toggleAnswer = (id) => {
        setAnswersVisible({
            ...answersVisible,
            [id]: !answersVisible[id]
        });
    };

    return (
        <div>
             <Navbar />
        <div className="container">
            <h1>FAQ - Laundry Service</h1>

            <div className="faq-item">
                <div className="question" onClick={() => toggleAnswer('q1')}>
                    Q: How do I schedule a laundry service? {answersVisible['q1'] ? '-' : '+'}
                </div>
                <div className={`answer ${answersVisible['q1'] ? 'visible' : ''}`}>
                    A: Scheduling a laundry service is easy. You can either call our customer service hotline or use our online booking system on our website to schedule a pickup and delivery time that is convenient for you.
                </div>
            </div>

            <div className="faq-item">
                <div className="question" onClick={() => toggleAnswer('q2')}>
                    Q: What laundry products do you use? {answersVisible['q2'] ? '-' : '+'}
                </div>
                <div className={`answer ${answersVisible['q2'] ? 'visible' : ''}`}>
                    A: We use high-quality, eco-friendly laundry detergents and fabric softeners to ensure your clothes are clean, fresh, and soft after each wash.
                </div>
            </div>

            <div className="faq-item">
                <div className="question" onClick={() => toggleAnswer('q3')}>
                    Q: Can I specify special instructions for my laundry? {answersVisible['q3'] ? '-' : '+'}
                </div>
                <div className={`answer ${answersVisible['q3'] ? 'visible' : ''}`}>
                    A: Yes, you can! During the scheduling process, you can provide specific instructions such as temperature settings, fabric preferences, and any other special requests you may have for your laundry.
                </div>
            </div>

            <div className="faq-item">
                <div className="question" onClick={() => toggleAnswer('q4')}>
                    Q: How long does it take to get my laundry back? {answersVisible['q4'] ? '-' : '+'}
                </div>
                <div className={`answer ${answersVisible['q4'] ? 'visible' : ''}`}>
                    A: The turnaround time for laundry service may vary depending on factors such as the volume of laundry, your location, and any special requests. However, we strive to deliver your clean laundry back to you within [insert time frame].
                </div>
            </div>
            {/* Add more questions and answers as needed */}
        </div>
        <Footer />
        </div>
    );
}

export default FAQ;
