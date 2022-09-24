import React from 'react'
import Home from './Home'
import Navbar from '../components/Navbar'

class Safety extends React.Component{
    render(){
        return(
            <div>
                <Navbar />
            <section id="services" class="service-section pt-150">
      <div class="container">
      <div class="row justify-content-center">
      <div class="col-xl-6 col-lg-8">
      <div class="section-title text-center mb-70">
      <span class="wow fadeInUp" data-wow-delay=".2s">Safety in the Spotlight</span>
      <h1 class="wow fadeInUp" data-wow-delay=".4s">All Safety Measures that are service providers follows</h1>
      </div>
      </div>
      </div>
      <div class="row">
      <div class="col-lg-4 col-md-6">
      <div class="single-service wow fadeInUp" data-wow-delay=".2s">
      <div class="icon">
      <img src="assets/img/safety/image3.jpg" alt="" />
      </div>
      <div class="content">
      <h3>Sanitized Hands</h3>
      <p>Chefs who cook food for you sanitize their hands regularly</p>
      </div>
      </div>
      </div>
      <div class="col-lg-4 col-md-6">
      <div class="single-service wow fadeInUp" data-wow-delay=".4s">
      <div class="icon">
      <img src="assets/img/serviceimg/dancee.jpg" alt="" />
      </div>
      <div class="content">
      <h3>Temperature Check</h3>
      <p>Temperature of the delivery boy is checked regularly</p>
      </div>
      </div>
      </div>
      <div class="col-lg-4 col-md-6">
      <div class="single-service wow fadeInUp" data-wow-delay=".6s">
      <div class="icon">
      <img src="assets/img/safety/img4.jpg" alt="" />
      </div>
      <div class="content">
      <h3>Hygiene</h3>
      <p>All our Food Providers maintain hygiene while cooking</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      </div>

        );
    }
}

export default Safety;