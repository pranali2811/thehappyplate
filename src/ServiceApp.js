import React from 'react'

import { connect } from 'react-redux'
import Spinner from './components/Spinner'
import Navbar from './components/Navbar'
import Routes from './Routes'
import { logout } from './/actions/index'

class ServiceApp extends React.Component {

  handleLogout = () => this.props.dispatch(logout())

  renderApplication = auth => 
    <React.Fragment>
      <Navbar 
      logout={this.handleLogout}
      auth={auth}/>     
        <Routes />
    </React.Fragment>

  render() {
    const { auth } = this.props
    //return this.renderApplication(auth)
    return auth.isAuthResolved ? this.renderApplication(auth) : <Spinner />
  }
}


const mapStateToProps = state => ({auth: state.auth})

export default connect(mapStateToProps)(ServiceApp)