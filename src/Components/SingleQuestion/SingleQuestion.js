import React from 'react';
import './Singlequestion.css'
const SingleQuestion = ({ ques }) => {
    console.log(ques)
    const { id, question, correctAnswer,options } = ques;
    return (
        <div >
            <div className='question-main'>
                <h4>{question}</h4>
                <div className='option-more'>
                <div className='question-option'>
                    <p>{ options[0]}</p>
                </div>
                <div className='question-option'>
                    <p>{ options[1]}</p>
                </div>
                <div className='question-option'>
                    <p>{ options[2]}</p>
                </div>
                <div className='question-option'>
                    <p>{ options[3]}</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default SingleQuestion;