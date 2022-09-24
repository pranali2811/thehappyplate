import React from 'react';

import Navbar from './components/Navbar';
import Home from './pages/Home'
import Register from './pages/Register';
import Login from './pages/Login';
import About from './pages/About';
import Safety from './pages/Safety';
import Service from './pages/Service';
import UserServices from './pages/UserServices';
import allAboutServices from './pages/allAboutServices';
import AddService from './pages/AddService'
import Secret from './pages/Secret';
import FpDetailPage from './pages/FpDetail'
import SentOffers from './pages/offers/SentOffers';
import ReceivedOffers from './pages/offers/ReceivedOffers';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Feedback from './pages/Feedback';

const Routes = () => 
        <Switch>
        <Route path="/Register">
            <Register />
        </Route>
        <Route path="/Login">
            <Login />
        </Route>
        <Route path="/About">
            <About />
        </Route>
        <Route path="/Safety">
            <Safety />
        </Route>
        <Route path="/Service">
            <Service />
        </Route>
        <Route path="/offers/sent">
            <SentOffers />
        </Route>
        <Route path="/offers/received">
            <ReceivedOffers />
        </Route>
        <Route path="/services/me">
            <UserServices />
        </Route>
        <Route path="/services/new">
            <AddService />
        </Route>
        <Route path='allAboutServices'>
            <allAboutServices />
        </Route>
        <Route path="/Feedback">
            <Feedback />
        </Route>
        <Route path="/Secret">
            <Secret />
        </Route>
        <Route path="/services/:serviceId">
            <FpDetailPage />
        </Route>
        <Route path="/">
            <Home />
        </Route>
        </Switch>
export default Routes
