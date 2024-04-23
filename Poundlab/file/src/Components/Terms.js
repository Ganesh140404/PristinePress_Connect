import React from 'react'
import './About.css'
import Footer from './Footer'
import Navbar from './Navbar'

function Terms() {
  return (
    <div>
      <Navbar />
      
    <div className="ctn">
       

    <section>
        <h2>These terms and conditions outline the rules and regulations for the use of our laundry service website.</h2>
        <p>By accessing this website, we assume you accept these terms and conditions. Do not continue to use this website if you do not agree to all of the terms and conditions stated on this page.</p>
    </section>

    <section>
        <h2>1. Services Offered</h2>
        <ul>
            <li>Our laundry service offers pick-up and delivery services for your convenience.</li>
            <li>We provide laundry services for various items including clothing, linens, and other washable materials.</li>
            <li>All laundry services are subject to availability and scheduling.</li>
        </ul>
    </section>
    <img src="./Images/term.jpg" alt="img" />
    <section>
        <h2>2. Pick-up and Delivery</h2>
        <ul>
            <li>Our pick-up and delivery services operate within specified areas and timeframes.</li>
            <li>Customers are responsible for ensuring that their laundry items are ready for pick-up at the designated time.</li>
            <li>We aim to deliver laundry items within the agreed timeframe; however, delays may occur due to unforeseen circumstances.</li>
        </ul>
    </section>
    <img src="./Images/bike.gif" alt="img" />
    <section>
        <h2>3. Payment and Pricing</h2>
        <ul>
            <li>Payment for laundry services is required at the time of booking or upon delivery.</li>
            <li>We accept secure online payments through our website using reputable payment gateways.</li>
            <li>Prices for laundry services are clearly displayed on our website and may vary based on the type and quantity of items.</li>
        </ul>
    </section>
    <img src="./Images/cash.jpg" alt="img" />
    <section>
        <h2>4. Privacy and Security</h2>
        <ul>
            <li>We are committed to protecting the privacy and security of our customers' personal information.</li>
            <li>All transactions conducted through our website are encrypted and secured using industry-standard security protocols.</li>
            <li>Customer information will not be shared with third parties without consent unless required by law.</li>
        </ul>
    </section>
    <img src="./Images/privacyy.jpg" alt="img" />
    <section>
        <h2>5. Refunds and Returns</h2>
        <ul>
            <li>Refunds or credits may be issued in the event of unsatisfactory service or damage to laundry items.</li>
            <li>Customers must notify us of any issues or concerns regarding their laundry items within a reasonable timeframe.</li>
            <li>Refunds or credits are issued at the discretion of our management.</li>
        </ul>
    </section>
    <img src="./Images/refund.jpg" alt="img" />
    <section>
        <h2>6. Changes to Terms and Conditions</h2>
        <ul>
            <li>We reserve the right to modify these terms and conditions at any time without prior notice.</li>
            <li>Changes to the terms and conditions will be effective immediately upon posting on this website.</li>
        </ul>
    </section>
    </div>
    <Footer />
    </div>
  )
}

export default Terms
