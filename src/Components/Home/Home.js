import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizes from '../Quizes/Quizes';
import './Home.css'
const Home = () => {
    const quizes = useLoaderData();
    // console.log(quizes)
    return (
        <div className='home-container'>
            <div className='quizes-main-container'>
                {
                quizes.data.map(quiz => <Quizes
                    key={quiz.id}
                    quiz={quiz}
                ></Quizes>)
            }
            </div>
            <div className='cart-container'>
                <h2>Yeeh! Chose one and get correct Answer</h2>
                <small>There Question answer be right today you can get the question Faith!</small>
            </div>
        </div>
    );
};

export default Home;