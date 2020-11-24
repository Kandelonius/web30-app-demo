import React, { Component } from 'react';
import Header from '../common/Header';
import image from '../assets/img/header-bg.jpg';
import Timeline from '../common/Timeline';
import Team from '../common/Team';

class About extends Component {
    render() {
        return (

            <div>
                <div>
                    <Header
                        title="About Us"
                        subtitle="A Tale for the ages"
                        showButton={false}
                        image={image}
                    />
                    <Timeline />
                    <Team />
                </div>
            </div>
        )
    }
}

export default About;