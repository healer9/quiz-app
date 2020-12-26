import React, { useEffect, useState } from 'react'
import DbmsQues from '../questions/DbmsQues'
import { useBeforeunload } from 'react-beforeunload';
import DbmsQuizHeader from '../quiz-header/DbmsQuizHeader'
import ScoreCard from '../components/ScoreCard'
import InfoCard from '../components/InfoCard'
import topics from '../data/topics'

const QuizDbms = () => {
    useBeforeunload((event) => event.preventDefault())
    const start = 0
    const end = DbmsQues.length
    const [quesNo, setQues] = useState(start)
    const { questionText, answerOptions } = DbmsQues[quesNo]
    const [showScore, setShowScore] = useState(false)
    const [score, setScore] = useState(0)
    const [attempt, setAttempt] = useState(0)

    const handleClick = (isCorrect) => {
        setAttempt(attempt + 1)
        const nextQuestion = quesNo + 1

        if (isCorrect === true) {
            const incrementScore = score + 1
            setScore(incrementScore)
        }

        if (nextQuestion < end) {
            setQues(nextQuestion)
        } else {
            setShowScore(true)
        }
    }

    const { alloted_time } = topics[3]
    const [timerSeconds, setTimerSeconds] = useState(59)
    const [timerMinutes, setTimerMinutes] = useState(alloted_time - 1)

    // eslint-disable-next-line
    useEffect(() => {
        if (timerMinutes >= 0 && timerSeconds > 0) {
            setTimeout(() => setTimerSeconds(timerSeconds - 1), 1000)
        } else if (timerMinutes > 0 && timerSeconds === 0) {
            setTimerSeconds(59)
            setTimerMinutes(timerMinutes - 1)
        } else if (timerMinutes === 0 && timerSeconds === 0) {
            alert('Times Up !!!')
        }
    })

    return (
        <>
            <DbmsQuizHeader />
            {((showScore) || (timerMinutes === 0 && timerSeconds === 0)) ? (
                <ScoreCard key={quesNo} value={score} total={end} />
            )
                : (
                    <div className="main-container">
                            <div className="quiz-container">
                                <button className="topic-info">
                                    <h2>Ques {quesNo + 1}. {questionText}</h2>
                                </button>
                               
                                {answerOptions.map((answerOption) => {
                                    return (
                                        <button className="option"
                                            onClick={() => handleClick(answerOption.isCorrect)}
                                            key={answerOption.answerText}
                                        >
                                            <h2>{answerOption.answerText}</h2>
                                        </button>
                                    )
                                })}
                            </div>
                            <div className="update-container">
                                <h1 className="clock">{timerMinutes} min : {timerSeconds} sec</h1>
                                <InfoCard
                                    key={quesNo}
                                    attempt={attempt}
                                    left={end - attempt}
                                    correct={score}
                                    wrong={attempt - score}
                                    time={alloted_time}
                                />
                            </div>
                    </div>
                )
            }
        </>

    )
}

export default QuizDbms