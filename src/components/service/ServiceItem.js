import React from 'react'
import { Link } from 'react-router-dom'


const ServiceItem = ({service, children, noButton}) => {
  const shortText = (text, maxLength = 50) => {

    if (!text) { return ' '}
    if (text.length <= maxLength ) { return text }

    return text.substr(0, maxLength) + '...'
  }

  return (
    <div
      className="column is-one-third">
      <div className="feature-card is-bordered has-text-centered revealOnScroll delay-1" data-animation="fadeInLeft">
        <div className="card-title">
           <h3>{service.fp_name}</h3>
        </div>
        <div className="card-icon">
           <img src={service.image} alt=""/>
        </div>
        <div className="card-text">
           <p>{shortText(service.description)}</p>
        </div>
        { children &&
          <div className="card-text">
            { children }
          </div>
        }
        { !noButton &&
          <div className="card-action">
           <Link 
            to={`/services/${service.id}`}
           className="button btn-align-md accent-btn raised">Know More</Link>
          </div>
        }
      </div>
    </div>
  )
}



export default ServiceItem 