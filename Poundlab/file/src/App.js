import React from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Service from './Components/Service'
import Terms from './Components/Terms'
import Myorders from './Components/Myorders'
import Faq from './Components/Faq'
import Membership from './Components/Membership'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Profile from './Components/Profile'
import OrderDetails from './Components/OrderDetails'
import Privacy from './Components/Privacy'
import Service1 from './Components/Service1'
import Card from './Components/Card'





function App() {
  return (
    <div>
      
      
      <BrowserRouter>
      
     
      <Routes>

        <Route path='/' element={<Login />}/>
        <Route path='/card' element={<Card />}/>
        <Route path='/Signup' element={<Signup />}/>
        <Route path='/Home' element={<Home />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Contact' element={<Contact />}/>
        <Route path='/Service' element={<Service1 />}/>
        <Route path='/Terms' element={<Terms />}/>
        <Route path='/MyOrders' element={<Myorders />}/>
        <Route path='/membership' element={<Membership />}/>
        <Route path='/Profile' element={<Profile />}/>
        <Route path='/OrderDetails' element={<OrderDetails />}/>
        <Route path='/Privacy' element={<Privacy />}/>
        <Route path='/Faq' element={<Faq />}/>

      </Routes>
      </BrowserRouter>

     
      
    </div>
  )
}

export default App
