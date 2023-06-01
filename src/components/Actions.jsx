import React from 'react'
import { useSearchParams, useNavigate } from "react-router-dom"

import { Button } from 'reactstrap'

export const Actions = ({ state: { checked, isFirst, params, isLast }, setState, update, questions }) => {

    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    // URL Answers
    const queryParams = searchParams.get('answer');

    // Update Query Params in URL
    const updateQueryParam = (value) => {
        if (value !== undefined && value !== null) {
            if (queryParams) navigate({ pathname: '/', search: `?answer=${[queryParams + ',' + value]}` });
            else navigate({ pathname: '/', search: `?answer=${[value]}` });

            update((prev) => !prev)
        } else {
            if (queryParams && queryParams.split(",").length === 1) {
                navigate({ pathname: '/' })
            } else {
                const str = queryParams.split(",")
                const arr = str.pop()
                const updatedValue = str.join(",")
                navigate({ pathname: '/', search: `?answer=${[updatedValue]}` })
            }

            update((prev) => !prev)
        }

    };

    async function nextQuestion() {
        setState((prev) => ({ ...prev, loading: false, checked: false, next: true, isFirst: false }))
        updateQueryParam(params)
    }

    async function prevQuestion() {
        setState((prev) => ({ ...prev }))
        updateQueryParam()
    }

    function finish() {
        const answers = questions.map((question) => {
            const checkedOptions = question.options.filter((option) => option.checked)
            return checkedOptions.map((option) => option.answer)
        })

        let introver = 0
        let extrovert = 0

        answers.forEach((question) => {
            question.forEach((answer) => {
                answer.forEach((value) => {
                    if (value === 1) {
                        introver++
                    } else if (value === 2) {
                        extrovert++
                    }
                })
            })
        })

        if (introver > extrovert) return setState((prev) => ({ ...prev, isFinish: true, result: 'Introvert' }))
        else return setState((prev) => ({ ...prev, isFinish: true, result: 'Extrovert' }))
    }

    return (
        <>
            {!isLast && isFirst && <Button size='xl' color='primary' block disabled={!checked} onClick={nextQuestion}>
                Next Question {'>'}</Button>}
            {!isLast && !isFirst && <div style={{ display: 'flex' }}>
                <Button size='xl' color='primary me-1' block onClick={prevQuestion}>
                    Prev Question {'<'}</Button>
                <Button size='xl' color='primary ms-1' block disabled={!checked} onClick={nextQuestion}>
                    Next Question {'>'}</Button>
            </div>}
            {isLast && <div style={{ display: 'flex' }}>
                <Button size='xl' color='primary me-1' block onClick={prevQuestion}>
                    Prev Question {'<'}</Button>
                <Button size='xl' color='success ms-1' block disabled={!checked} onClick={finish}>Finish</Button>
            </div>}
        </>
    )
}
