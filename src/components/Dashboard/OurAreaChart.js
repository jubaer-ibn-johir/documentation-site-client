import React from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const OurAreaChart = () => {
    const data = [
        {
            "items": "",
            "Number": 0
        },
        {
            "items": "Users",
            "Number": 15
        },
        {
            "items": "Documentations",
            "Number": 3
        },
        {
            "items": "Blogs",
            "Number": 8
        },
        {
            "items": "Reviews",
            "Number": 6
        },
        {
            "items": "Courses",
            "Number": 0
        },
        {
            "items": "Tutorials",
            "Number": 3
        }
    ];
    return (
        <div className='flex items-center justify-center'>
            <ResponsiveContainer width={"100%"} height={500}>
                <AreaChart
                    data={data}
                    margin={{
                        top: 50,
                        right: 30,
                        left: 10,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="items" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="Number" stackId="1" stroke="#3ac55e" fill="#3ac55e" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default OurAreaChart;