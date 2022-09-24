import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../pages/Home'
import Navbar from '../components/Navbar'
import Safety from '../pages/Safety'

class Service extends React.Component{
    render(){
        return(
            <div>
                <Navbar />
            <section id="services" class="service-section pt-150">
      <div class="container">
      <div class="row justify-content-center">
      <div class="col-xl-6 col-lg-8">
      <div class="section-title text-center mb-70">
      <span class="wow fadeInUp" data-wow-delay=".2s">Delivery Services</span>
      <h1 class="wow fadeInUp" data-wow-delay=".4s">All Essentials You Need</h1>
      </div>
      </div>
      </div>
      <div class="row">
      <div class="col-lg-4 col-md-6">
      <div class="single-service wow fadeInUp" data-wow-delay=".2s">
      <Link class="page-scroll" to="/Sregister">
      <div class="icon">
      <img src="assets/img/Serviceimg/imagine.jpg" alt="" />
      </div>
      <div class="content">
      <h3>Apply as a Food Services Provider</h3>
      <p></p>
      </div>
      </Link>
      </div>
      
      </div>
      </div>
      </div>
      </section>
      </div>

        );
    }
}

export default Service;