import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useToasts } from 'react-toast-notifications'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import onlyGuest from '../components/hoc/onlyGuest'
import './Login.css'

import { login } from '../actions'


const Login = () => {
    const [ redirect, setRedirect ] = useState(false)
    const { register, handleSubmit} = useForm()
    const { addToast } = useToasts()

    const onLogin = loginData => {
        login(loginData)
        .then(
            _ => setRedirect(true),
            errorMessage => addToast(errorMessage, { appearance: 'error', autoDismiss: true, autoDismissTimeout: 3000 })
        )
    }

    if (redirect) { return <Redirect to="/" />}


    return(
        <div className="bomb">
                    
                <section id="services" class="service-section pt-150">
        <div className="bomb">
            <div className="container has-text-centered">
                <div className="column is-4 is-offset-4">
                <h3 className="world">Login</h3>
                
                <div className="box">
                <form onSubmit={handleSubmit(onLogin)}>
                    <div className="field">
                        <div className="control">
                            <input {...register('email',{required: true})}
                                name="email"
                                className="input is-large"
                                type="email"
                                placeholder="Email Id"
                                autoComplete="email" 
                            />
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <input 
                                {...register('password',{required: true})}
                                name="password"
                                className="input is-large"
                                type="password"
                                placeholder="Your Password"
                                autoComplete="current-password" 
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="button"><span>Login</span></button>
                    </form>
                </div>
                <p className="has-text-grey">
                   
                    <Link to='./Register'>Sign Up</Link> &nbsp;·&nbsp;
                    
                </p>
                </div>
            </div>
        </div>
        </section>
    </div>
    )
}

export default onlyGuest(Login);