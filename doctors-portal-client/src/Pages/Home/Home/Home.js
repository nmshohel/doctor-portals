import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppoinmentBanner from '../AppoinmentBaner/AppoinmentBanner';
import Baner from '../Baner/Baner';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
        <Navigation/>
        <Baner/>
        <Services/>
        <AppoinmentBanner/>
            
        </div>
    );
};

export default Home;