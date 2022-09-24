import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'


const withAuthorization = Component => {

  class WithAuthorization extends React.Component {

   
    render() {
      const { auth} = this.props
      return auth.isAuth ? <Component {...this.props} /> : <Redirect to="/login"/>
      
    }
  }

  //const mapStateToProps = ({auth}) => ({auth})
  return connect(({auth}) => ({auth}))(WithAuthorization)
}


export default withAuthorization


