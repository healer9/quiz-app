import React from 'react'
import topics from '../data/topics'

const CnQuizHeader = () => {
    const { title } = topics[4]
    return (
        <header>
            <h1>Quiz App</h1>
            <h2>Topic : {title}</h2>
        </header>
    )
}

export default CnQuizHeader