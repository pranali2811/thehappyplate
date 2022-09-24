import React from 'react'
import Navbar from '../components/Navbar'
import { connect } from 'react-redux'
import { getServices } from '../store'
import ServiceItem from '../components/service/ServiceItem'
import { fetchServices } from '../actions'
import Homee from './Home.css';


class Home extends React.Component{
  state = {
    services: []
  }

  componentDidMount() {
    this.props.fetchServices()
  }

    renderServices = (services) =>
    services.map(service => <ServiceItem key={service.id} service={service} />)
    
    render()
    {
        //const { services } = this.state
        //const { testingData, testingNumber } = this.props.test
        const { services } = this.props
        return(
            <div>
            
            <section id="home" class="hero-section gap he">
                <div class="hero-shape">
                <img src="assets/img/hero/hero-shape.svg" alt="" class="shape" style={{ marginRight:'35px'}}/>
                </div>
                <div class="container">
                <div class="row align-items-center">
                <div class="col-lg-6">
                <div class="hero-content">
                <h1  data-wow-delay=".2s" style={{ fontWeight:'40px'}}>THE HAPPY PLATE </h1>
                <h2 class="wow fadeInUp" data-wow-delay=".2s" style={{ marginLeft:'75px', fontSize:'30px'}}>Food Services Near You </h2>
                <p class="wow fadeInUp" data-wow-delay=".4s" style={{ marginLeft:'75px'}}>
                We connect some with the customers and some with the home made fresh food service providers.
                </p>
                
                </div>
                </div>
                <div class="col-lg-6">
                <div class="hero-img wow fadeInUp" data-wow-delay=".5s">
                <img src="assets/img/hero/hero-img3.jpg" alt="" />
                </div>
                </div>
                </div>
                
                </div>
      </section>
      
      <div className="he">
      <br  />
      <br />
      <br  />
      <br />
      <br  />
      <br />
      <br  />
      <br />
      <br  />
      <br />
      <div className="chare ">
      <h1>Services Are Listed Below</h1>
      <hr/>
      </div>
      <br />
      <br />

      
      { this.renderServices(services) }
      </div>
      </div>
           
        );
    }
}
//const mapStateToProps = state => ({test: state.service})
const mapStateToProps = state => ({services: state.services.all})

export default connect(mapStateToProps, {fetchServices})(Home)