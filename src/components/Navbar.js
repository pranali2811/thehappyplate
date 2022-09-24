import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Navbar = props => {
    const { user, isAuth } = props.auth
    const { logout } = props

    

        return(
            <div class="navbar-area">

            <div class="row align-items-center">
            <div class="col-lg-12">
            <nav id={props.id || ''} class="navbar navbar-expand-lg" style={{ fontWeight: 'bold', background: 'linear-gradient(110deg, #fdcd3b 60%, #ffed4b 60%)'}}>
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="toggler-icon"></span>
            <span class="toggler-icon"></span>
            <span class="toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse sub-menu-bar">
            <ul id="nav" class="navbar-nav ml-auto" style={{ marginRight: '35px', fontColor: 'rgb(7, 7, 87)'}}>
            { user &&
                <li class="nav-item" style={{fontSize: '18px',color: 'rgb(34, 34, 175)', marginTop: '10px' }}>
                {`Hello, ${user.fullName} !! `}
                </li>
            }
            <li class="nav-item">
            <Link class="page-scroll" to="/">Home</Link>
            </li>
            { isAuth &&
                <React.Fragment>
                    {/* <li class="nav-item">
                    <Link class="page-scroll" to="/allAboutServices">Food Services</Link>
                    </li> */}
                    <li class="nav-item">
                    <Link class="page-scroll" to="/services/new">Add Services</Link>
                    </li>
                    {/* <li class="nav-item">
                    <Link class="page-scroll" to="/services/me">Your Service</Link>
                    </li> */}
                    <li class="nav-item">
                    <Link class="page-scroll" to="/offers/sent">Sent Requests</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="page-scroll" to="/offers/received">Received Requests</Link>
                    </li>
                </React.Fragment>
            }
            <li class="nav-item">
            <Link class="page-scroll" to="/About">About</Link>
            </li>
            {/* <li class="nav-item">
            <Link class="page-scroll" to="/Feedback">Feedback</Link>
            </li> */}
            { !isAuth &&
                <React.Fragment>
                    <li class="nav-item">
                    <Link class="page-scroll" to="/Login">Login</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="page-scroll" to="/Register"><button type="button" class="is-danger btn btn-info" style={{ marginRight:'10px', borderRadius: '7px', width: '100%'}}>Register</button></Link>
                    </li>
                </React.Fragment>
            }
            { isAuth &&
                <li class="nav-item">
                <div class="page-scroll" onClick={logout} ><button type="button" class="is-danger btn btn-info" style={{ backgroundColor: 'red', marginRight:'10px', borderRadius: '7px', width:'100%'}}>Logout</button></div>
                </li>
            }
            
            
            </ul>
            </div>
            </nav>
            </div>
            </div>
            </div>
            
        );
    }

export default Navbar;