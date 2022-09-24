import React, { useState } from 'react'
import RegisterForm from '../components/auth/RegisterForm'
import { connect } from 'react-redux'
import { register } from '../actions'

import { useToasts } from 'react-toast-notifications'

import { Redirect } from 'react-router-dom'
import onlyGuest from '../components/hoc/onlyGuest'

// import { withRouter } from 'react-router-dom'




const Register = (props) => {

    const [ redirect, setRedirect ] = useState(false)
    const { addToast } = useToasts()

    const registerUser = (userData) => {
       // props.history.push('/')
        register(userData)
        .then(
        _ => setRedirect(true),
        errorMessage => addToast(errorMessage, { appearance: 'error', autoDismiss: true, autoDismissTimeout: 3000 }))
      }
      if (redirect) { return <Redirect to="/" />}

        return(
            <section id="home" class="hero-section">
            <div className="auth-page">
            <div className="container has-text-centered">
              <div className="column is-4 is-offset-4">
                  <br />
                  
                <h3 className="grey">Register</h3>
                
                  <RegisterForm onRegister={registerUser} />
              </div>
            </div>
          </div> 

          </section>
        );
    }

    // export default withRouter(Register)
    export default onlyGuest(Register)