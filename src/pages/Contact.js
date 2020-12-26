import React from 'react'
import Header from '../components/Header'
import ContactDetails from '../details/ContactDetails'

const Contact = () => {
    const { mail, linkedIn, gitHub } = ContactDetails

    const handleLinkedIn = () => { window.open(linkedIn) }
    const handleGithub = () => { window.open(gitHub) }
    const handleMail = () => { window.open(mail) }

    return (
        <div>
            <Header />
            <div className="topic-div">
                <button className="contact-head"><h2>Contact To Developer</h2></button> <br />
                <button className="about-info contact">
                    <div className="contact-info">
                        <i onClick={handleMail} className="fa fa-envelope fa-3x"></i>
                        <i onClick={handleLinkedIn} className="fa fa-linkedin fa-3x"></i>
                        <i onClick={handleGithub} className="fa fa-github fa-3x"></i>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Contact