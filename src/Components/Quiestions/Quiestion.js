import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuestion from '../SingleQuestion/SingleQuestion';

const Quiestion = () => {
    const questions = useLoaderData()
    console.log(questions)
    const [question, setquestion] = useState([]);

    const eyeHandler = (ques) => {
        console.log(ques)
    }
    return (
        <div>
            {
                questions.data.questions.map(ques => <SingleQuestion
                    key={ques.id}
                    ques={ques}
                ></SingleQuestion>)
            }
        </div>
    );
};

export default Quiestion;