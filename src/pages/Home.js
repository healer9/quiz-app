import React, { useState } from 'react'
import Subjects from '../components/Subjects'
import Header from '../components/Header'

const Home = () => {
    const [topicSelect, setTopicSelect] = useState(false)

    return (
        <div>
            <Header />
            {
                !topicSelect &&
                <>
                    <div className="topic-div">
                        <button className="topic-head"><h2>Topics</h2></button>
                    </div>
                    <Subjects onClick={() => setTopicSelect(true)} />
                </>
            }
        </div>
    )
}

export default Home