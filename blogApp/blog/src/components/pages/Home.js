import React, { Component } from 'react';
import Header from '../common/Header';
import image from '../assets/img/header-bg.jpg';

// Re-usable components
import Services from '../common/Services';

class Home extends Component {
    render() {
        return (
            <div>
                <Header
                    title="Welcome to our Studio!"
                    subtitle="IT'S NICE TO MEET YOU"
                    buttonText="tell me more"
                    link="/services"
                    showButton={true}
                    image={image}
                />

                <Services />
            </div>
        )
    }
}

export default Home;