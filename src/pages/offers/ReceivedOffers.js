import React from 'react'
import { fetchReceivedOffers, changeOfferStatus } from '../../actions/index'
import withAuthorization from '../../components/hoc/withAuthorization'
import ServiceItem from '../../components/service/ServiceItem'
import { connect } from 'react-redux'

class ReceivedOffers extends React.Component {


    componentDidMount() {
        const { auth } = this.props
        this.props.fetchReceivedOffers(auth.user.uid)
      }

    acceptOffer = offerId => {
       this.props.changeOfferStatus(offerId, 'accepted')
    }

    
    declineOffer = offerId => {
      this.props.changeOfferStatus(offerId, 'declined')
    }

    statusClass = status => {
      if (status === 'pending') return 'btn btn-warning'
      if (status === 'accepted') return 'btn btn-success'
      if (status === 'declined') return 'btn btn-danger'
    }

    render() {
      const { offers } = this.props
      return (
        <div className="container">
          <div className="content-wrapper">
            <h1 className="title">Received Offers</h1>
            <div className="columns">
            {offers.map(offer => (
              <div 
              key={offer.id}
              className="column is-one-third" style={{width:'auto'}}>
                <ServiceItem
                  noButton
                  className="offer-card"
                  service={offer.service}>
                  <div className={` ${this.statusClass(offer.status)}`}>
                    {offer.status}
                  </div>
                  <hr />
                  <div className="service-offer">
                    <div>
                      <span className="label">From User:</span> {offer.fromUser.fullName}
                    </div>
                    <div>
                      <span className="label">Request:</span> {offer.inquiry}
                    </div>
                    <div>
                      <span className="label">Days:</span> {offer.days} days
                    </div>
                  </div>
                  { offer.status === 'pending' &&
                    <div>
                      <hr />
                      <button 
                        onClick={() => this.acceptOffer(offer.id)} 
                        className="btn btn-success">Accept</button>
                      <br />
                      <br />
                      <button 
                        onClick={() => this.declineOffer(offer.id)} 
                        className="btn btn-danger">Decline</button>
                    </div>
                  }
                </ServiceItem>
                
              </div>
            ))
            }
            </div>
          </div>
        </div>
      )
    }
  }
  
  const mapStateToProps = ({offers}) => ({ offers: offers.received })

  const mapDispatchToProps = () => ({
    changeOfferStatus,
    fetchReceivedOffers
  })

export default 
  withAuthorization(
    connect(mapStateToProps, mapDispatchToProps())(ReceivedOffers))
  