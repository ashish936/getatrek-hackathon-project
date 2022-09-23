import React from 'react';
import Header from '../shared/header';
import MobileNav from '../shared/MobileNav';
import Footer from '../shared/footer';

const Base = (props) => {
    return(
        <React.Fragment>
            <Header />
            {props.children}
            <Footer />
        </React.Fragment>
    );
};

export default Base;