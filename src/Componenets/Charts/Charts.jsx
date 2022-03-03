import React from 'react'
import  "./Charts.css";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
export default function Charts() {
    const data = [
        {
          name: '2012',
          "Active User": 2000,
      
        },
        {
          name: '2013',
          "Active User": 3000,
        
        },
        {
          name: '2014',
          "Active User": 1000,
    
        },
        {
          name: '2015',
          "Active User": 2780,
        
        },
        {
          name: '2016',
          "Active User": 4890,
         
        },
        {
          name: '2017',
          "Active User": 7390,
         
        },
        {
          name: '2018',
    "Active User": 3490,
        
        },
        {
            name: '2019',
      "Active User": 8490,
          
          },
          {
            name: '2020',
      "Active User": 1490,
          
          },
          {
            name: '2021',
      "Active User": 2490,
          
          },

      ];
      
   
      
  return (
   <div className='chart' >
      <h3 className='chartTitle'>Sales Analytics</h3>
      <ResponsiveContainer width="100%" aspect={4/1} >
          <LineChart data={data} >
              <XAxis dataKey="name" stroke="black" style={{backgroundColor:"blue"}} ></XAxis>
              <Line type="monotone" dataKey="Active User" stroke="black" style={{backgroundColor:"blue"}} ></Line>
              <Tooltip style={{backgroundColor:"blue"}} />
              <CartesianGrid style={{backgroundColor:"blue"}}/>

          </LineChart>
      </ResponsiveContainer>
   </div>
  )
}
