import React from 'react'
import topics from '../data/topics'
import TopicPage from '../components/TopicPage'
import Header from '../components/Header'

const Os = () => {
    const { id, title, no_of_questions, alloted_time, quiz_path } = topics[2]

    return (
        <>
            <Header />
            <TopicPage
                key={id}
                title={title}
                path={quiz_path}
                no_of_questions={no_of_questions}
                alloted_time={alloted_time}
            />
        </>
    )
}

export default Os