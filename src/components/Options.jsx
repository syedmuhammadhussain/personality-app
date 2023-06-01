import React from 'react'
import { Button, Badge } from 'reactstrap'

export const Options = ({ question, setState, setQuestionsList, isLoading }) => {

    // Return Alphabates based on optoions like A,B,C,D
    function AlphaBateReturnOnQuestionId(id) {
        switch (true) {
            case id == 0:
                return 'A'
            case id == 1:
                return 'B'
            case id == 2:
                return 'C'
            case id == 3:
                return 'D'
            default:
                return 'A'
        }
    }

    // Select Option Event Handler
    function selectOptionEventHandler(option) {
        let questions = question
        let updateList = questions.options.filter(x => {
            let arr = []
            if (x.id === option.id) x.checked = true
            else x.checked = false
            return arr.push(x)
        })
        questions.options = updateList
        setQuestionsList((prev) => ([...prev]))
        setState((prev) => ({ ...prev, checked: true, params: option.id }))
    }

    return (
        <div className={`d-grid gap-2 ${isLoading ? 'loading-overlay' : ''}`}>
            {question.options.map((option, index) => {
                return <Button key={index} type="button" size="lg" color={`${option.checked ? 'warning' : 'light'} text-start text-dark`} outline={!option.checked} block
                    style={{ fontSize: 14, borderColor: !option.checked ? '#ddd' : '#ffc107' }}
                    onClick={() => selectOptionEventHandler(option)}>
                    <Badge color={'light'} className={'text-dark'}>{AlphaBateReturnOnQuestionId(option.id)}</Badge>
                    {" "}{option.text}
                </Button>
            })}
        </div>
    )
}
