import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuestion from '../SingleQuestion/SingleQuestion';

const Quiestion = () => {
    const questions=useLoaderData()
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