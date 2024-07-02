import React, { useState, useEffect } from 'react';
import { fetchQuiz, submitResults } from '../api';

function Quiz() {
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({});

    useEffect(() => {
        const loadQuiz = async () => {
            try {
                const response = await fetchQuiz();
                setQuestions(response.data);
            } catch (error) {
                console.error('Error fetching quiz', error);
            }
        };

        loadQuiz();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await submitResults(answers);
            console.log(response.data);
            // Handle results (e.g., redirect to results page)
        } catch (error) {
            console.error('Error submitting results', error);
        }
    };

    const handleAnswerChange = (questionId, answer) => {
        setAnswers({ ...answers, [questionId]: answer });
    };

    return (
        <div>
            <h2>Quiz</h2>
            <form onSubmit={handleSubmit}>
                {questions.map((question) => (
                    <div key={question.id}>
                        <p>{question.text}</p>
                        {question.options.map((option) => (
                            <label key={option}>
                                <input
                                    type="radio"
                                    name={`question-${question.id}`}
                                    value={option}
                                    onChange={() => handleAnswerChange(question.id, option)}
                                />
                                {option}
                            </label>
                        ))}
                    </div>
                ))}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Quiz;
