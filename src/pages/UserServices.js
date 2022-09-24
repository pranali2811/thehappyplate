import React from 'react'

import withAuthorization from '../components/hoc/withAuthorization'
import { fetchUserServices } from '../actions/index'
import ServiceItem from '../components/service/ServiceItem'

//import { fetchUserServices } from 'actions'

class UserServices extends React.Component {

componentDidMount() {
    const { auth: { user }, dispatch } = this.props
    dispatch(fetchUserServices(user.uid))
  }


  render() {
    const { services } = this.props.auth.user
    return (
      <div className="container">
           <section id="services" class="service-section pt-150">
        <div className="content-wrapper">
        <h1 className="title">Your Food Service</h1>
          <div className="columns ">
            {
              services.map(s => (
                <div key={s.id} className="column">
                  <ServiceItem service={s} />
                </div>
                )
              )
            }
          </div>
        </div>
        </section>
      </div>
    )
  }
}




export default withAuthorization(UserServices)