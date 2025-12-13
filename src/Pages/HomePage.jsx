import React from 'react';
import HeroSection from './Hero/HeroSection';
import AboutUs from './About/AboutUs';
import VisionMissionValues from './VMV/VisionMissionValues';
import OurServices from '../Components/OurServices';
import WhyChooseMe from './ChooseMe/WhyChooseMe';

const HomePage = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <AboutUs></AboutUs>
            <VisionMissionValues></VisionMissionValues>
            <OurServices></OurServices>
            <WhyChooseMe></WhyChooseMe>
        </div>
    );
};

export default HomePage;