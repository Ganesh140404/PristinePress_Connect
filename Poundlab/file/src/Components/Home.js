import React from 'react'
import  './Home.css'
import Footer from './Footer'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'


function Home() {
  return (
    
    <div className="HomePage">


      
      <Navbar />
      
     

      <div className="image-container">
        <img src="./Images/man.jpg" alt="Laundry Service" />
        
        
      </div>
      
      <div class="hero">
  <div class="wrapper">
    <div class="hero-desc">
      <h1>Get your Laundry and dry cleaning done within 48hrs</h1>
    
      
    </div>
    <img src="./Images/man1.jpg" alt="" />
  </div>
</div>

<div class="how-it-works">
  <div class="wrapper">
    <h1>How it works</h1>
    <p>This is our process for customers</p>

    <div class="row">
      <div class="card">
        <i class="fa-regular fa-square-check"></i>
        <h2>Step 1 :</h2>
        <h1>Schedule Pickup</h1>
        <p>
        Schedule a pickup for your laundry online or by phone.
        </p>
      </div>
      <div class="card">
        <i class="fa-solid fa-bag-shopping"></i>
        <h2>Step 2 :</h2>
        <h1>Laundry Processing</h1>
        <p>
        Our professionals will wash, dry, and fold your clothes with care.
        </p>
      </div>
      <div class="card">
        <i class="fa-solid fa-bed"></i>
        <h2>Step 3 :</h2>
        <h1>Instant Delivery</h1>
        <p>
        Your freshly laundered clothes will be delivered to your doorstep.
        </p>
      </div>
    </div>
    <Link to="/Service">
        <button className='but'>Pickup</button>
      </Link>
    
    


  </div>
</div>



      <div className="offers">
      <img src="./Images/offer.jpg" alt="Laundry Service" />
        <h2>Special Offers</h2>
        <ul>
          
          <li>Use <strong>FLAT40</strong> couponCode to get Flat40 % discount</li>
          <li>Free pickup and delivery!</li>
          <li>Special discounts for regular customers!</li>
        </ul>
        
      </div>
      
     
<Footer />

    </div>

    

    
  )
}

export default Home
