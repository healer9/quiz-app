import React from 'react'
import topics from '../data/topics'

const AlgoQuizHeader = () => {
    const { title } = topics[1]
    return (
        <header>
            <h1>Quiz App</h1>
            <h2>Topic : {title}</h2>
        </header>
    )
}

export default AlgoQuizHeader