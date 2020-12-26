import React from 'react'
import Subjects from '../components/Subjects'
import Header from '../components/Header'

const Home = () => {
    return (
        <div>
            <Header />
            <div className="topic-div">
                <button className="topic-head"><h2>Topics</h2></button>
            </div>
            <Subjects />
        </div>
    )
}

export default Home