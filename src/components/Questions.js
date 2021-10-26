import React, { useEffect, useState } from 'react'
import { useBeforeunload } from 'react-beforeunload';
import ScoreCard from '../components/ScoreCard'
import InfoCard from '../components/InfoCard'

const Questions = (props) => {
    useBeforeunload((event) => event.preventDefault())
    const questionsList = props.questionsList
    const start = 0
    const end = questionsList.length
    const [quesNo, setQues] = useState(start)
    const { questionText, answerOptions } = questionsList[quesNo]
    const [showScore, setShowScore] = useState(false)

    // store user answer
    const [userAnswer] = useState(Array(end).fill(null))
    const [optionsArray] = useState(Array(end).fill(null))

    const storeUserChoice = (isCorrect, optionNumber) => {
        userAnswer[quesNo] = isCorrect
        optionsArray[quesNo] = optionNumber
    }

    // handle user choice active
    useEffect(() => {
        const options = document.getElementsByClassName('option')

        for (let i = 0; i < options.length; i++) {
            options[i].className = 'option'
        }

        if (options.length && optionsArray[quesNo] !== null) {
            options[optionsArray[quesNo]].classList.add("option-active")
        }
    })

    const changeQuestion = (questionNumber) => {
        setQues(questionNumber)
    }

    const prevQuestion = () => {
        if (quesNo === start) {
            return
        }
        setQues(quesNo - 1)
    }

    const nextQuestion = () => {
        if (quesNo === end - 1) {
            return
        }
        setQues(quesNo + 1)
    }

    const alloted_time = end
    const [timerSeconds, setTimerSeconds] = useState(59)
    const [timerMinutes, setTimerMinutes] = useState(alloted_time - 1)

    useEffect(() => {
        if (timerMinutes >= 0 && timerSeconds > 0) {
            setTimeout(() => setTimerSeconds(timerSeconds - 1), 1000)
        } else if (timerMinutes > 0 && timerSeconds === 0) {
            setTimerSeconds(59)
            setTimerMinutes(timerMinutes - 1)
        } else if (timerMinutes === 0 && timerSeconds === 0) {
            setShowScore(true)
        }
    }, [timerMinutes, timerSeconds])

    return (
        <>
            {((showScore) || (timerMinutes === 0 && timerSeconds === 0)) ? (
                <ScoreCard userAnswer={userAnswer} />
            )
                : (
                    <>
                        <div className="main-container">
                            <div className="quiz-container">
                                <button className="topic-info ques">
                                    <h2>Ques {quesNo + 1 + ')'} {questionText}</h2>
                                </button>

                                {answerOptions.map((answerOption, index) => {
                                    return (
                                        <button className="option"
                                            onClick={() => storeUserChoice(answerOption.isCorrect, index)}
                                            key={questionText + answerOption.answerText}
                                        >
                                            <h2>{index + 1 + ')'} {answerOption.answerText}</h2>
                                        </button>
                                    )
                                })}
                            </div>
                            <div className="update-container">
                                <h1 className="clock">{timerMinutes} min : {timerSeconds} sec</h1>
                                <InfoCard
                                    key={quesNo}
                                    topic={props.title}
                                    quesLength={userAnswer}
                                    changeQues={changeQuestion}
                                />
                                {quesNo === end - 1 && <button onClick={() => setShowScore(true)}
                                    className="submit">
                                    Submit
                                </button>}
                            </div>
                        </div>
                        <div className="nav-btn">
                            <button onClick={prevQuestion}
                                className={quesNo === start ? 'disabled' : 'btn'}>
                                &#8656;	Prev
                            </button>
                            <button onClick={nextQuestion}
                                className={quesNo === end - 1 ? 'disabled' : 'btn'}>
                                Next &#8658;
                            </button>
                        </div>
                    </>
                )
            }
        </>
    )
}

export default Questions