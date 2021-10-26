import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Questions from './Questions'
import { Link } from 'react-router-dom'

const TopicPage = (props) => {
    const [isLoading, setIsLoading] = useState(true)
    const [ready, setReady] = useState(false)
    const [questions, setQuestions] = useState()

    useEffect(() => {
        const getQuestions = async () => {
            const data = await axios.get(`https://tech-quiz-api.herokuapp.com/quiz-app/${props.path}`)
            const questions = data.data.questions
            setQuestions(questions)
            setIsLoading(false)
        }

        getQuestions()
    }, [props.path])

    return (
        <>
            {isLoading ?
                <div className="loader">
                    <Loader
                        type="TailSpin"
                        color="#0f4c75"
                        height={100}
                        width={100}
                    />
                    <div className="loader-text">
                        Loading Questions ...
                    </div>
                </div> :
                <>
                    {!ready ? <div className="topic-container">
                        <div className="topic-info-page">
                            <button className="topic-info">
                                <h2>Topic : {props.title}</h2>
                            </button>
                            <br />
                            <button className="topic-info">
                                <h2>No. of Questions : {questions.length}</h2>
                            </button>
                            <br />
                            <button className="topic-info">
                                <h2>Alloted Time : {questions.length} minutes</h2>
                            </button>
                            <br />
                            <div className="topic-btn">
                                <Link to="/">
                                    <button className="quiz-start"
                                        onClick={() => { }}
                                    >
                                        <h2>Back</h2>
                                    </button>
                                </Link>
                                <button className="quiz-start"
                                    onClick={() => setReady(true)}
                                >
                                    <h2>Start Quiz</h2>
                                </button>
                            </div>
                        </div>
                    </div> :
                        <Questions
                            questionsList={questions}
                            title={props.title}
                        />}
                </>}
        </>
    )
}

export default TopicPage