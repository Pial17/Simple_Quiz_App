import React, { useState } from 'react';
import './Quiz.css';
import QuestionList from './QuestionList';

const Quiz = () => {
    
    const questions = [
        {
            question: "What language is needed for React",
            options: ['css','java script','python','c/c++'],
            answer: 'java script'
        },
        {
            question : "what is even number?",
            options : [1,3,5,8], 
            answer : 8
        },
        {
            question: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "Rome"],
            answer: "Paris"
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Earth", "Venus", "Mars", "Jupiter"],
            answer: "Mars"
        },
        {
            question: "What is 2 + 3?",
            options: [4, 5, 6, 7],
            answer: 5
        },
        {
            question: "Which animal is known as the King of the Jungle?",
            options: ["Tiger", "Lion", "Elephant", "Cheetah"],
            answer: "Lion"
        },
        {
            question: "What is the freezing point of water in Celsius?",
            options: [100, 0, -10, 32],
            answer: 0
        },
        {
            question: "Which programming language is primarily used for web development?",
            options: ["Python", "HTML", "Java", "C++"],
            answer: "HTML"
        },
        {
            question: "Who painted the Mona Lisa?",
            options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
            answer: "Leonardo da Vinci"
        },
        {
            question: "What is the square root of 16?",
            options: [2, 4, 6, 8],
            answer: 4
        },
        {
            question: "Which gas do plants absorb during photosynthesis?",
            options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
            answer: "Carbon Dioxide"
        },
        {
            question: "What is the largest ocean on Earth?",
            options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
            answer: "Pacific Ocean"
        }
        
    ]
    const [questionIndex, setQuestionIndex] = useState(0);
    const [collectOption, setCollectOption] = useState(null);
    const handleOption = (option)=>{
        setCollectOption(option);
    
    }
    return (
        <div className='App'>
            <div>
                <QuestionList question={questions[questionIndex].question}
                options={questions[questionIndex].options} handleOption={handleOption} collectOption={collectOption} />
                <button>Next Question</button>
            </div>     
        </div>
    );
};

export default Quiz;