import React from 'react';
import Contact from '../PortfolioContainer/ContactMe/Contact';
import ScrollToTop from '../PortfolioContainer/ScrollToTop';
import {Animated} from "react-animated-css";


export default function ContactPage() {
    
    return (
        <>
        <ScrollToTop/>
            <Animated animationIn="fadeInRight" animationOut="fadeOutRight" isVisible={true}>
                <Contact/>
                </Animated>

        </>
    )
}
