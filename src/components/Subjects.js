import React from 'react'
import SubjectCard from './SubjectCard'
import topics from '../data/topics'
import { Link } from 'react-router-dom'

function Subjects() {
    return (
        <div className="subject-container">
            {topics.map((topic) => {
                return (
                    <div className="subject-div" key={topic.title}>
                        <Link to={topic.path}>
                            <SubjectCard
                                key={topic.title}
                                title={topic.title}
                            />
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default Subjects