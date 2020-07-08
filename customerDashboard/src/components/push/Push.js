import React, { useState,useContext } from 'react'
import {Bar} from 'react-chartjs-2';
import './Push.css';
import {SetDataContext} from '../../SetDataContext';

const Push=()=>  {
  const [data,setData] = useContext(SetDataContext);
    const [graphData,setGraphData]=useState({
        labels: ['Today', 'Yesterday', 
           'last week', 'last month ','last year'],
  datasets: [
    {
      label: 'API hit ',
      backgroundColor: '#B388FF',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 1,
      data: [data.API, data.push, data.bandwidth, data.storage]
    }
  ]

    })
    
        return (
            <div className="Api">
                <p>Push....</p>
                <Bar
          data={graphData}
          options={{
            title:{
              display:true,
              text:'Average Application per month',
              fontSize:10,
              
            },
            legend:{
              display:true,
              position:'top',
              
             
            }
          }}
        />
            </div>
        )
    }


export default Push
