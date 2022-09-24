// eslint-disable-next-line

import React from 'react';
import { useForm }  from 'react-hook-form';
import { checkpass } from '../../helpers/validators'
import Register from './Register.css';

const RegisterForm = (props) => {
    
    const { register , handleSubmit , formState: {errors}, getValues} = useForm()

const getFormData = data => {
    console.log(data)
    
    }


    return(
        <form onSubmit ={ handleSubmit(props.onRegister)}>
            <div className="field">
                <div className="control">
                <input   {...register('email', { required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}
                        name="email"
                        className="large"
                        type="email"
                        placeholder="Email ID"
                         />
                { errors.email &&
                    <div className="form-error">
                        {errors.email.type=== 'required' && <span className="help is-danger">Email is required</span>}
                        {errors.email.type=== 'pattern' &&<span className="help is-danger">Email address is not valid</span>}
                    </div>
                }
                </div>
            </div>
            <div className="field">
                <div className="control">
                <input {...register('fullName', { required: true, minLength: 7})}
                        name="fullName"
                        className="small"
                        type="text"
                        placeholder="Full Name"/>
                {errors.fullName &&
                    <div className="form-error">
                        {errors.fullName.type=== 'required' && <span className="help is-danger">Name is required</span>}
                        {errors.fullName.type=== 'minLength' && <span className="help is-danger">Name must have minimum length of 7 characters </span>}
                    </div>
                }
                </div>
            </div>
            <div className="field">
                <div className="control">
                <input {...register('phone', { required: true, maxLength: 10})}
                        name="phone"
                        className="small"
                        type="tel"
                        placeholder="Mobile Number"/>
                {errors.phone &&
                    <div className="form-error">
                        {errors.fullName.type=== 'required' && <span className="help is-danger">Number is required</span>}
                        {errors.fullName.type=== 'maxLength' && <span className="help is-danger">Only 10 digits are allowed</span>}
                    </div>
                }
                </div>
            </div>

            <div className="field">
                <div className="control">
                <input {...register('password', { required: true, minLength: 6 })}
                        name="password"
                        className="big"
                        type="password"
                        placeholder="Password"
                        />
                {errors.password &&
                    <div className="form-error">
                        {errors.password.type=== 'required' && <span className="help is-danger">Password is required</span>}
                        {errors.password.type=== 'minLength' && <span className="help is-danger">Password must be of atleast 6 characters</span>}
                    </div>
                }
                </div>
            </div>
            <div className="field">
                <div className="control">
                <input {...register('cpassword', { required: true,minLength: 6, validate: {checkpass: checkpass(getValues, 'password')} })}
                        name="cpassword"
                        className="level"
                        type="password"
                        placeholder="Confirm Password"
                        autoComplete="current-password" />
                {errors.cpassword &&
                    <div className="form-error">
                        {errors.cpassword.type=== 'required' && <span className="help is-danger">Confirm Password is required</span>}
                        {errors.cpassword.type=== 'minLength' && <span className="help is-danger">Password must be of atleast 6 characters</span>}
                        {errors.cpassword.type=== 'checkpass' && <span className="help is-danger">Confirm Password not matching</span>}
                    </div>
                }
                </div>
            </div>
            <button
                type="submit"
                className="bottom"><span>Register</span></button>
            </form>
    )
}

export default RegisterForm;