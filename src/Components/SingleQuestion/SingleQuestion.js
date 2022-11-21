import React, { useState } from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'

import './Singlequestion.css'
import swal from 'sweetalert';
const SingleQuestion = ({ ques }) => {
    const { id, question, correctAnswer, options } = ques;
    
    const answerSubmission = (e) => {
        if (e.target.id === ques.correctAnswer) {
            console.log('correct')
            swal("Answer right!", "You clicked the button!", "success");
        }
        else {
            console.log('this answer was wrong')
            swal("Sorry This Answer False", "You clicked the button!", "error");
        }
    }
    return (
        <div >
            <div className='question-main'>
                <h4>{question}</h4>
                <EyeIcon className='icons'></EyeIcon>
                <div className='option-more'>
                <div className='question-option'>
                        <input onChange={answerSubmission} type="radio" name="questions" id={options[0]} />
                        <label htmlFor={options[0]}>{ options[0]}</label>
                </div>
                <div className='question-option'>
                         <input onChange={answerSubmission} type="radio" name="questions" id={options[1]} />
                        <label htmlFor={options[1]}>{ options[1]}</label>
                </div>
                <div className='question-option'>
                         <input onChange={answerSubmission} type="radio" name="questions" id={options[2]} />
                        <label htmlFor={options[2]}>{ options[2]}</label>
                </div>
                <div className='question-option'>
                        <input onChange={answerSubmission} type="radio" name="questions" id={options[3]} />
                        <label htmlFor={options[3]}>{ options[3]}</label>
                </div>
                </div>

            </div>
        </div>
    );
};
{/* <p>{ options[1]}</p> */}
export default SingleQuestion;