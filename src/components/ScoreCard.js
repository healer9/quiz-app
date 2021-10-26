import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const ScoreCard = (props) => {
    const [right, setRight] = useState(0)
    const [wrong, setWrong] = useState(0)
    const [unattempted, setUnattempted] = useState(0, false)

    useEffect(() => {
        const getScore = () => {
            let getRight = 0, getWrong = 0, getUnattempted = 0
            for (let i = 0; i < props.userAnswer.length; i++) {
                if (props.userAnswer[i] === null) {
                    getUnattempted++
                    continue
                }
                if (props.userAnswer[i] === true)
                    getRight++
                else if (props.userAnswer[i] === false)
                    getWrong++
            }
            setRight(getRight)
            setWrong(getWrong)
            setUnattempted(getUnattempted)
        }
        getScore();
    })

    return (
        <div className="score-container">
            <button className="score-card">
                <h2 className="score-text">Number of Correct Answers : {right}</h2>
                <h2 className="score-text">Number of Wrong Answers : {wrong}</h2>
                <h2 className="score-text">Number of unattempted Answers : {unattempted}</h2>
                <h2 className="score-text score">You Scored : {Math.round(right / props.userAnswer.length * 100)} %</h2>
            </button>
            <br />
            <Link to='/'>
                <button className="exit-btn"><h2>Exit</h2></button>
            </Link>
        </div>
    )
}

export default ScoreCard