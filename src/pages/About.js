import React from 'react'
import Header from '../components/Header'
import AboutDetails from '../details/AboutDetails'

const About = () => {
    const { AboutTheApp, AboutTheDev } = AboutDetails
    return (
        <>
            <Header />
            <div className="topic-div">
                <button className="topic-head"><h2>About</h2></button> <br />
                <button className="about-info">
                    <h2>About App</h2>
                    <div className="para">
                        <p>{AboutTheApp}</p>
                    </div>
                    <h2>About Developer</h2>
                    <div className="para">
                        <p>{AboutTheDev}</p>
                    </div>
                </button>
            </div>
        </>
    )
}

export default About