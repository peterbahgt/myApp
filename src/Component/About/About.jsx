import React, { Component } from 'react'
import Navbar from './../Navbar/Navbar/Navbar';
import Footer from './../Footer/Footer';
import Body from './../Body/Body';

export default class About extends Component {
  render() {
    return <>
    <Navbar/>

   <div className="about-container text-white d-flex flex-column justify-content-center align-items-center py-5 ">
   <div className="container py-5 ">
<div className="div text-center mb-4 pt-5">
<h1 className='text-center fw-bolder'>ABOUT COMPONENT</h1>
<div className=' d-flex align-items-center justify-content-center mb-3'>
<div className=' line bg-white me-3'></div>
<i class="fa-solid fa-star"></i>
<div className=' line bg-white ms-3'></div>
</div>
</div>
    <div className="row pb-5">
      <div className="col-md-6">
<div className="about cont">
<p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
</div>
      </div>
      <div className="col-md-6">
<div className="about cont">
<p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
</div>
      </div>
    </div>
    </div>
   </div>
    

   <Body/>
   <Footer/>
    </>
  }
}
