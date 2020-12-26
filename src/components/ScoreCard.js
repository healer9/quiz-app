import React from 'react'
import { Link } from 'react-router-dom'

const ScoreCard = (props) => {

    const score = Math.floor((props.value / props.total) * 100)

    return (
        <div className="score-container">
            <button className="score-card">
                {(score === 100) ? (<h2 className="score-text"><span className="score">Bravo</span><br /><span>🏆</span></h2>)
                    : (<><h2 className="score-text">Number of Correct Answers : {props.value}</h2>
                        <h2 className="score-text">Number of Wrong Answers : {props.total - props.value}</h2></>)}
                <h2 className="score-text score">You Scored : {score} %</h2>
            </button>
            <br />
            <Link to='/'>
                <button className="exit-btn"><h2>Exit</h2></button>
            </Link>
        </div>
    )
}

export default ScoreCard