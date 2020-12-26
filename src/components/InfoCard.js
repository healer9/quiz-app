import React from 'react'

const InfoCard = (props) => {
    return (
        <div className="info-container">
            <p>Attempted</p>
            <p className="dot">:</p>
            <p>{props.attempt}</p>

            <p>Left</p>
            <p className="dot">:</p>
            <p>{props.left}</p>

            <p>Correct</p>
            <p className="dot">:</p>
            <p>{props.correct}</p>

            <p>Wrong</p>
            <p className="dot">:</p>
            <p>{props.wrong}</p>
        </div>
    )
}

export default InfoCard