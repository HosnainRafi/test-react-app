import React from 'react';
import Services from '../Services/Services';
import Navigation from '../Shared/Navigation/Navigation';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import Banner from './Banner/Banner';
import Info from './Info/Info';
import Patients from './Patient/Patients';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <AppointmentBanner></AppointmentBanner>
            <Patients></Patients>
        </div>
    );
};

export default Home;