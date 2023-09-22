import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar/Navbar'
import Body from './../Body/Body';
import Footer from './../Footer/Footer';

export default class Contact extends Component {
  render() {
    return <>
    <Navbar/>
    <div className="contact">
    <h1 className=' text-uppercase text-center py-3  fw-bolder'>contact section</h1>
    <div className=' d-flex align-items-center justify-content-center mb-3'>
<div className=' line bg-black me-3'></div>
<i class="fa-solid fa-star"></i>
<div className=' line bg-black ms-3'></div>
</div>
<div className="container ">
   <form action="" className='mx-auto w-50 p-3 mt-3'>
      <input type="text" className=' form-control py-3 mt-4' placeholder='userName' />
      <input type="text" className=' form-control py-3 mt-4' placeholder='userAge'/>
      <input type="text" className=' form-control py-3 mt-4' placeholder='userEmail'/>
      <input type="text" className=' form-control py-3 mt-4' placeholder='userPassword'/>
      <button className='btn my-4'>Send Message</button>
    </form>
   </div>
    </div>
    
    
    <Body/>
<Footer/>
    
    </>



  }
}
