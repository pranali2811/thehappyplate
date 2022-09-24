import React from 'react'
import Home from './Home'
import Navbar from '../components/Navbar';
import About1 from './About.css';

class About extends React.Component{
    
        render(){
            return(
                <div>
                <section id="services" class="service-section pt-150">
                <div class="he">
                <div class="hero-shape">
                </div>
                <div class="container">
                <div class="row align-items-center">
                <div class="col-lg-6">
                <div class="hero-content">
                <h1 class="wow fadeInUp" data-wow-delay=".2s" >ABOUT US </h1>
                <h2 class="wow fadeInUp" data-wow-delay=".2s" style={{fontSize:'30px'}}>Our Purpose </h2>
                <p class="About1" data-wow-delay=".4s" >
                <i>Here are many people who live their home town and come to stay in mumbai and many people are old and some cannot
                                            cook food. the pivotal aim of this website is to connect such home cooked foo lovers with the home chefs who are also
                                            in search of the customers to whom they can serve their fresh healthy and tasty food, which the cook with love 
                                            and atmost care.
                                            This website acts as a bridge beetween the customer and seller
                                            This will be quite helpful to boost the small businesses of many people and will be very much helpful for many people
                                            to get connected with such homely businesses and get good food.</i>
                </p>
                <br/>
                <h2 class="wow fadeInUp" data-wow-delay=".2s" style={{fontSize:'30px'}}>Why Us? </h2>
                <p class="About2" data-wow-delay=".4s">
                <i>Although you would love to have that fulfilling home cooked meal you enjoyed back in school days it's difficult
                                        to manage anything close to that with your busy schedule. What most of us end up eating is not really healthy and 
                                        at times to our horror even unhygienic food, nutritious meal has become "out of sight, out of mind". It's very 
                                        important for you to get your daily nutrition - too less or too much is equally harmful, what your health demands
                                        is a well balanced and healthy tiffin service.</i>
                </p>
                
                </div>
                </div>
                <div class="col-lg-6">
                <div class="hero-img wow fadeInUp" data-wow-delay=".5s">
                <img src="assets/img/Aboutimg/blue.jpg" alt="" />
                </div>
                </div>
                </div>
                
                </div>
                </div>
             </section>
          
             
            
        </div>
         
    
            );
        }
    }
export default About;