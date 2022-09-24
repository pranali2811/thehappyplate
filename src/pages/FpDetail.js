import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchServiceById, requestService, resetPreviousService} from '../actions/index'
import Navbar from '../components/Navbar'
import FpDetails from './FpDetails.css';
import Spinner from '../components/Spinner'
import InquiryModal from '../components/service/InquiryModal'

const FpDetail = props => {

  const { serviceId } = useParams()

  const { fetchServiceById, isFetching } = props

  useEffect(() => {
    //dispatch(resetPreviousService())
    //dispatch(requestService())
    
    fetchServiceById(serviceId)
  }, [serviceId, fetchServiceById])


  const { service, auth } = props

  if (isFetching || serviceId !== service.id) { return <Spinner />}

  return (
    <div>
     <section id="services" class="service-section pt-150">
      <div class="hero-body">
      <img src="assets/img/hero/hero-shape.svg" alt="" class="shape" />
        <div class="container has-text-centered">
          <div class="columns is-vcentered">
            <div class="column is-5">
              <figure class="img" >
                 <img src={service.image} alt="Description"  />
              </figure>
            </div>
            
            <div class="column is-6 is-offset-1">
              <h1 class="title is-2">
              <i class="fas fa-utensils"></i> {service.fp_name}
              </h1>
              <br />
              <h2 class="subtitle is-4">
              <i class="fas fa-caret-square-down"></i> {service.type}
              </h2>
              <br />
              <h2 class="subtitle is-4">
              <i class="fas fa-clipboard"></i> {service.description}
              </h2>
              <br />
              <h2 class="subtitle is-4">
              <i class="fas fa-phone-alt"></i> {service.contact}
              </h2>
              <br />
              <h2 class="subtitle is-4">
              <i class="fas fa-map-marked"></i> {service.location}
              </h2>
              <br />
              <h2 class="subtitle is-4">
              <i class="fas fa-thumbtack"></i> {service.pincode}
              </h2>
              <br />
              <div className="has-text-centered">
                <InquiryModal 
                auth={auth}
                service={service} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

const mapStateToProps = ({selectedService, auth}) => (
  {
    service: selectedService.item,
    isFetching: selectedService.isFetching,
    auth
  }
)

export default connect(mapStateToProps, {fetchServiceById})(FpDetail)
