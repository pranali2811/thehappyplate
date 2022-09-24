import React, { useState } from 'react'
import Modal from '../Modal'
import { useToasts } from 'react-toast-notifications'
import { createRef, createOffer} from '../../actions/index'

const InquiryModal = ({service, auth}) => {
 
  const { addToast } = useToasts()
  const [ offer, setOffer ] = useState({
    fromUser: '',
    toUser: '',
    service: '',
    status: 'pending',
    days: 0,
  })

  const handleChange = ({ target: {value, name}}) => {
    // if (name === 'time') {
    //   const price = Math.round(value * service.price * 100) / 100
    //   return setOffer({...offer, [name]: value, price})
    // }

     setOffer({...offer, [name]: value})
  }

  const handleSubmit = (closeModal) => {
    const offerCopy = { ...offer }
    offerCopy.fromUser = createRef('profiles', auth.user.uid)
    offerCopy.toUser = createRef('profiles', service.user.id)
    offerCopy.service = createRef('services', service.id)
    offerCopy.days = parseInt(offer.days)

    createOffer(offerCopy)
      .then(_ => {
        closeModal()
        addToast('Subcription Request was successfully send! (:', { appearance: 'success', autoDismiss: true, autoDismissTimeout: 3000 })
      }, (error) => {
        console.log(error)
      })
  }


  return (
    <Modal 
        onModalSubmit={handleSubmit}
        openButtonText="Inquire for Subscription">
            <div className="field">
                <input
                    onChange={handleChange}
                    className="input is-large"
                    name="inquiry"
                    type="text"
                    placeholder="Provide all details mentioned in 'Note'"
                    max="5"
                    min="0"/>
                <p className="help" style={{textAlign: 'center'}}>Note: Please mention the type of food from provided description and also mention at what duration of the day you want to subscribe to service(eg: Breakfast/Lunch/Dinner) </p>
            </div>
            <div className="field">
                <input
                    onChange={handleChange}
                    className="input is-large"
                    name="days"
                    type="number"
                    placeholder="How long you need service for ?"
                    max="5"
                    min="0"/>
                <p className="help" style={{textAlign: 'center'}}>Enter Subcription Duration in days</p>
            </div>
            <div className="service-price-title">
              {service.user && `Upon acceptance Service Provider ${service.user.fullName} will reach out to you.`}
            </div>
    </Modal>
)
}


export default InquiryModal