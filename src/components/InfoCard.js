import React from 'react'

const InfoCard = (props) => {
    const questions = props.quesLength
    return (
        <div className="info-container">
            <h2 style={{ fontSize: "20px", marginBottom: "15px" }}>Topic : {props.topic}</h2>
            <div className="question-list">
                {questions.map((ques, index) => {
                    return <div
                        key={index}
                        onClick={() => props.changeQues(index)}
                        className={ques !== null ? "question-box active" : "question-box"}>
                        {index + 1}
                    </div>
                })}
            </div>
        </div>
    )
}

export default InfoCard