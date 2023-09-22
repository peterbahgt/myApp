import React, { Component } from 'react'
import Navbar from './../Navbar/Navbar/Navbar';
import Footer from './../Footer/Footer';
import Body from './../Body/Body';

export default class Portfolio extends Component {
 
  render() {




    return <>
    <Navbar/>

<div className="portfolio py-4">
  <div className="container">
  <h1 className=' text-uppercase text-center py-3  fw-bolder'>portfolio component</h1>
  <div className=' d-flex align-items-center justify-content-center mb-3'>
<div className=' line bg-black me-3'></div>
<i class="fa-solid fa-star"></i>
<div className=' line bg-black ms-3'></div>
</div>
  <div className="row gy-5">
    <div className="col-md-4">
<div className="card">
  <img src={require("../Images/poert1.png")} alt="poert1" className=' rounded-2'/>
  <div className='overlay'>
  <i class="fa-solid fa-plus" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
  </div>
</div>
    </div>
    <div className="col-md-4">
<div className="card">
  <img src={require("../Images/port2.png")} alt="port2" className=' rounded-2'/>
  <div className='overlay'>
  <i class="fa-solid fa-plus" data-bs-toggle="modal" data-bs-target="#exampleModal2" ></i>
  </div>
</div>
    </div>
    <div className="col-md-4">
<div className="card">
  <img src={require("../Images/port3.png")} alt="port3" className=' rounded-2'/>
  <div className='overlay'>
  <i class="fa-solid fa-plus" data-bs-toggle="modal" data-bs-target="#exampleModal3"></i>
  </div>
</div>
    </div>
    <div className="col-md-4">
<div className="card">
  <img src={require("../Images/port2.png")} alt="port2" className=' rounded-2'/>
  <div className='overlay'>
  <i class="fa-solid fa-plus" data-bs-toggle="modal" data-bs-target="#exampleModal2"></i>
  </div>
</div>
    </div>
    <div className="col-md-4">
<div className="card">
  <img src={require("../Images/port3.png")} alt="port3" className=' rounded-2'/>
  <div className='overlay'>
  <i class="fa-solid fa-plus" data-bs-toggle="modal" data-bs-target="#exampleModal3"></i>
  </div>
</div>
    </div>
    <div className="col-md-4">
<div className="card">
  <img src={require("../Images/poert1.png")} alt="poert1" className=' rounded-2'/>
  <div className='overlay'>
  <i class="fa-solid fa-plus"  data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
  </div>
</div>
    </div>
  </div>
  </div>
  </div>    
 

<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog ">
      <img src={require("../Images/poert1.png")} alt="poert1" className=' rounded-2 w-100'/>
  </div>
</div>

<div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog ">
      <img src={require("../Images/port2.png")} alt="port2" className=' rounded-2 w-100'/>
  </div>
</div>

<div className="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog ">
      <img src={require("../Images/port3.png")} alt="port3" className=' rounded-2 w-100'/>
  </div>
</div>





    <Body/>
    <Footer/>

    </>
  }
}
