import React from 'react'
import AboutSection from '../Components/AboutSection';
import Title from '../Components/Title';
import {MainLayout} from '../styles/Layouts';
// import Education from '../Components/Education';
function AboutPage() {
    return (
        <MainLayout>
            <div>
                <Title title={'About Me'} span={'About Me'} />
                <AboutSection />
                {/* <Education /> */}
            </div>
        </MainLayout>
    )
}



export default AboutPage
