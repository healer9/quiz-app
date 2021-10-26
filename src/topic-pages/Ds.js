import React from 'react'
import topics from '../data/topics'
import TopicPage from '../components/TopicPage'
import Header from '../components/Header'

const Ds = () => {
    const { title, path } = topics[0]

    return (
        <>
            <Header />
            <TopicPage
                title={title}
                path={path}
            />
        </>
    )
}

export default Ds