import React from 'react'
import { connect } from 'react-redux'
import { getServices } from '../store/index'
import ServiceItem from '../components/service/ServiceItem'
import { fetchServices } from '../actions/index'


class allAboutServices extends React.Component{
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
            <div >
                <hr/>
                    <h1>Services Are Listed Below</h1>
                <hr/>
                { this.renderServices(services) }
            </div>   
        );
    }
}
//const mapStateToProps = state => ({test: state.service})
const mapStateToProps = state => ({services: state.services.all})

export default connect(mapStateToProps, {fetchServices})(allAboutServices)

