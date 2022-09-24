import React from 'react';
import Navbar from '../components/Navbar';
import withAuthorization from '../components/hoc/withAuthorization'


class Feedback extends React.Component{
    render(){
        return(
            <div>
                
                <section id="feedback" class="hero-section">
                    <h1>Feedback Page</h1>
                </section>
            </div>
            
        );
    }
}

export default withAuthorization(Feedback)