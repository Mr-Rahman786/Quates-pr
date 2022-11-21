import React from 'react';
import './Statics.css'
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statics = () => {
    const data = [
  {
    name: 'React',
    total:'8'
  },
  {
    name: 'JavaScript',
    total:'9'
  },
  {
    name: 'CSS',
    total:'8'
  },
  {
    name: 'Git',
    total:'11'
  },
    ]
    return (
        <div className='linecharts'>
            <div>
                <h1>There is line charts about the question!!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ab culpa illo voluptates esse ex velit aut? Iure, ut necessitatibus!</p>
            </div>
            <div>
                 <BarChart
                className='barcharts'
          width={400}
          height={300}
          data={data}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="name" fill="#8884d8" />
          <Bar dataKey="total" fill="#82ca9d" />
        </BarChart>
            </div>
        </div>
    );
};

export default Statics;