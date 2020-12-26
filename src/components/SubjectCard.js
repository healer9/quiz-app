import React, { useState } from 'react'

function SubjectCard(props) {
    const [isMouseOver, setMouseOver] = useState(false)

    function handleMouseOver() {
        setMouseOver(true)
    }

    function handleMouseOut() {
        setMouseOver(false)
    }

    return (
        <div className="subject"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            style={{
                backgroundColor: isMouseOver && "#0f4c75",
                color: isMouseOver && "#fff"
            }}>
            <h1 className="title">{props.title}</h1>
        </div>
    )
}

export default SubjectCard