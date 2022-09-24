import React from 'react'
import withAuthorization from '../../components/hoc/withAuthorization'
import { fetchSentOffers, collaborate } from '../../actions/index'
import ServiceItem from '../../components/service/ServiceItem'
import { newMessage, newCollaboration } from '../../helpers/offers'
import { connect } from 'react-redux'

class SentOffers extends React.Component {
 
  componentDidMount() {
    const { auth } = this.props
    this.props.dispatch(fetchSentOffers(auth.user.uid))
  }

  createCollaboration = offer => {
    const { auth: { user }} = this.props
    const collaboration = newCollaboration({offer, fromUser: user})
    const message = newMessage({offer, fromUser: user})
    collaborate({collaboration, message})
      .then(_ => alert('Collaboration was Created!'))
  } 


  render() {
    const { offers } = this.props
    return (
      <div className="container" >
        <div className="content-wrapper" >
          <h1 className="title" style={{marginBottom:'-50px'}}>Sent Offers</h1>
          <div className="columns" style={{marginTop:'-10px'}}>
          {offers.map(offer => (
              <div 
              key={offer.id}
              className="column is-one-third" style={{width:'auto'}}>
                <ServiceItem
                  noButton
                  className="offer-card"
                  service={offer.service}>
                  <div className="tag is-large is-success">
                    {offer.status}
                  </div>
                 
                  <h3>
                  <div className="service-offer">
                    <div>
                      <span className="label">To User:</span> {offer.toUser.fullName}
                    </div>
                    <div>
                      <span className="label">Request:</span> {offer.inquiry}
                    </div>
                    <div>
                      <span className="label">Days:</span> {offer.days} days
                    </div>
                  </div>
                  </h3>
                  <div>
                  <button className="button is-dark" style={{height:'30px'}}>Connect</button>
                  </div>
                  {/* { offer.status === 'accepted' &&
                    <div>
                      <hr />
                      <button 
                        onClick={() => this.createCollaboration(offer)}
                        className="button is-success">Connect</button>
                    </div>
                  } */}
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

const mapStateToProps = ({offers}) => ({ offers: offers.sent })

export default 
  withAuthorization(
    connect(mapStateToProps)(SentOffers))