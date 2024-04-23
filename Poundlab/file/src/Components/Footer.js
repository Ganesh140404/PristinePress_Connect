import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
function Footer() {
  return (
    <div>
       <footer>
    <div class="footer-container">
        <div class="footer-content">
            <h3>Contact Us</h3>
            <p>Plot no 18 , near metro station , kukatpally</p>
            <p>Hyderabad, India</p>
            <p>Email: info@laundry.com</p>
            <p>Phone: 9542196436</p>
        </div>
        <div class="footer-content">
            <h3>Quick Links</h3>
            <ul>
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/Service">Service</Link></li>
                <li><Link to="/Terms">Terms & conditions</Link></li>
                <li><Link to="/Privacy">Privacy & Policy</Link></li>
                <li><Link to="/Faq">FAQs</Link></li>
            </ul>
        </div>
       
    </div>
    <div class="footer-bottom">
        <p>&copy; 2024 Pristine press connect. All rights reserved.</p>
    </div>
</footer>
    </div>
  )
}

export default Footer
