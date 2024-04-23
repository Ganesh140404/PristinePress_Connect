import React from 'react'
import './About.css'
import Footer from './Footer'
import Navbar from './Navbar'
function Privacy() {
  return (

    <div>
      <Navbar />
      <div class="ctn">
        <h1>Privacy Policy</h1>
        <img src="./Images/privacy.jpg" alt="img" class="privacy-image" />

        <p>At [Pristine press connect !], we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you use our laundry services or visit our website.</p>

        <h2>Information We Collect</h2>
        <ul>
            <li>Name</li>
            <li>Contact information (address, email address, phone number)</li>
            <li>Payment information (credit card details, billing address)</li>
            <li>Laundry preferences and instructions</li>
            <li>Any other information you provide to us voluntarily</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use the information we collect for the following purposes:</p>
        <ul>
            <li>To provide laundry services and fulfill customer orders</li>
            <li>To communicate with you about your orders, appointments, and service inquiries</li>
            <li>To process payments and billing transactions</li>
            <li>To improve our services, website, and customer experience</li>
            <li>To send promotional offers, newsletters, and updates with your consent</li>
            <li>To comply with legal and regulatory requirements</li>
        </ul>

        <h2>Data Security</h2>
        <p>We take appropriate measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. We use industry-standard security protocols and encryption technologies to safeguard your data.</p>

        <h2>Third-Party Services</h2>
        <p>We may engage third-party service providers to assist us in delivering our services and managing our operations. These service providers may have access to your personal information only to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>

        <h2>Data Retention</h2>
        <p>We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy unless a longer retention period is required or permitted by law.</p>

        <h2>Your Choices</h2>
        <p>You have the right to access, update, or delete your personal information at any time. You may also opt out of receiving promotional communications from us by following the instructions provided in the messages or contacting us directly.</p>

        <h2>Changes to this Privacy Policy</h2>
        <p>We reserve the right to update or revise this Privacy Policy from time to time. Any changes will be posted on this page, and the effective date will be updated accordingly.</p>

        

        <p>This Privacy Policy was last updated on [08-03-2024].</p>
    </div>
    <Footer />
    </div>
    
    
  )
}

export default Privacy
