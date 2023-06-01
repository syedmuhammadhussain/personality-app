import React from 'react'

export const Questions = ({ question, total, current }) => {
    return (
        <>
            <p>Question {current}/{total}</p>
            <h2>{question}</h2>
            <br />
            <br />
        </>
    )
}
