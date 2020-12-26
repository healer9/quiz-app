import React from 'react'
import topics from '../data/topics'

const OopsQuizHeader = () => {
    const { title } = topics[5]
    return (
        <header>
            <h1>Quiz App</h1>
            <h2>Topic : {title}</h2>
        </header>
    )
}

export default OopsQuizHeader