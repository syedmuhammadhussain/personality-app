import React, { useState, useEffect } from 'react'
import { useSearchParams, useNavigate } from "react-router-dom"

// Question List
import QuestionList from "../data"

// Components 
import { Questions } from '../components/Questions'
import { Options } from '../components/Options'
import { Actions } from '../components/Actions'
import { Button, Col, Container, Row } from 'reactstrap'

export const PersonalityTest = () => {
    // Query Params and Navigation
    const [questionsList, setQuestionsList] = useState(QuestionList)
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()

    const initialValues = {
        question: questionsList[0],
        total: questionsList.length,
        current: 1,
        checked: false,
        isFirst: true,
        isLast: false,
        isFinish: false,
        next: true,
        prev: false,
        loading: false,
        params: null,
        result: null
    }

    // URL Answers
    const params = searchParams.get('answer')

    // Initial States
    const [state, setState] = useState(initialValues)

    const [isUpdate, setIsUpdate] = useState(null)

    // Init Function
    useEffect(() => updateQuestion(), [isUpdate, params])

    // reset
    // useEffect(() => {
    //     if (state.isFinish) setState(initialValues)
    // }, [questionsList])

    function updateQuestion() {
        if (params) {
            let paramsList = params.split(',')
            if (paramsList.length < questionsList.length) setState((prev) => ({
                ...prev,
                current: paramsList.length + 1,
                question: questionsList[paramsList.length],
                checked: questionsList[paramsList.length].options.filter((x) => x.checked).length ? true : false,
                isFirst: false,
                isLast: paramsList.length === questionsList.length - 1 ? true : false
            }))
            else {
                if (paramsList) setState((prev) => ({
                    ...prev,
                    isLast: true,
                    checked: questionsList[questionsList.length - 1].options.filter((x) => x.checked).length ? true : false,
                    current: questionsList.length
                }))
            }
        } else setState((prev) => ({
            ...prev,
            current: 1,
            question: questionsList[0],
            isFirst: true,
            checked: questionsList[0].options.filter((x) => x.checked).length ? true : false
        }))
    }

    function restart() {
        navigate({ pathname: '/' })
        window.location.reload()
        // setQuestionsList(QuestionList)
    }

    return (
        <Container>
            <Row style={{ justifyContent: 'center' }}>
                <Col xl={6} lg={8} md={8}>
                    <div style={{ padding: 20 }}>
                        {!state.isFinish && state.question &&
                            (
                                <>
                                    <Questions
                                        question={state.question.question}
                                        total={state.total}
                                        current={state.current}
                                    />
                                    <Options
                                        question={state.question}
                                        setState={setState}
                                        setQuestionsList={setQuestionsList}
                                        isLoading={state.loading}
                                    />
                                    <br />
                                    <br />
                                    <Actions
                                        setState={setState}
                                        state={state}
                                        update={setIsUpdate}
                                        questions={questionsList}
                                    />
                                </>
                            )
                        }
                        {state.isFinish && <div className='text-center'>
                            <h5>Your Result</h5>
                            <h2>You are more of a {state.result}</h2>
                            <br />
                            <br />
                            <p>Are you willing to re-attempt?</p>
                            <Button color='info' onClick={restart}>Re-Start</Button>
                        </div>}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
