import React from 'react'
import {Link} from 'react-router-dom'

const TopicPage = (props) => {

    const instructions = `Once you select the option your are not able to change it, so be "Carefull".`
    return (
        <div className="topic-container">
            <div className="topic-info-page">
                <button className="topic-info">
                    <h2>Topic : {props.title}</h2>
                </button>
                <br />
                <button className="topic-info">
                    <h2>No. of Questions : {props.no_of_questions}</h2>
                </button>
                <br />
                <button className="topic-info">
                    <h2>Alloted Time : {props.alloted_time} minutes</h2>
                </button>
                <br />
                <Link to={props.path}>
                <button className="quiz-start"
                    onClick={() => {
                        alert(instructions)
                        // window.open(`${props.path}`)
                    }}
                >
                    <h2>Start Quiz</h2>
                </button>
                </Link>
            </div>
        </div>
    )
}

export default TopicPage