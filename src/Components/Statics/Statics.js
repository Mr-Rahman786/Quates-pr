import React from 'react';
import './Statics.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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
            <LineChart className='line'
                width={1000}
                height={400}
                data={data}

            >
                <CartesianGrid strokeDasharray="3 3" />
                 <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
                <Line type="monotone" dataKey="name" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="total" stroke="#82ca9d" />
            </LineChart>
        </div>
    );
};

export default Statics;