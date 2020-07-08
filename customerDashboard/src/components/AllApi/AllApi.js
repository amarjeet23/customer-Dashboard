import React, { useState,useContext,useEffect } from "react";
import Chart from "react-apexcharts";
import './AllApi.css';
import {DataContext} from '../../DataContext'

 const AllApi=()=>{
   const {value3} = useContext(DataContext)
  const [graphdata,setGraphdata] =value3
  const [arr,setarr] = useState([]);
  const [gdata,setGdata] =useState([
    {
      options: {
        chart: {id: "basic-bar"},
        xaxis: { categories:[JSON.stringify(graphdata)]}
        
      },
      series: [
        {
          name: "series-1",
          data: [10,20,50,20,30]
        }
      ]
      
  }
    ]
    
  )

  // useEffect(()=>{
  //   graphdata.map((result)=>{
  //     console.log("aaaaaa",result)
  //     setGdata([...gdata,{categories.push(result.resource)}])
  //     // arr.push(JSON.parse(result.resource))

  //   })

  // },[])   

  

  
    return (
      <div className="donut">
        <div className="row">
          <div className="mixed-chart">
          <Chart className="donut"
              options={gdata[0].options}
              series={gdata[0].series}
              type="bar"
              width="700"
              margin="7"
          />
          </div>
          {/* {graphdata.map(result =>{
            return <ul key={result.api_count}>
              <li>{result.resource} <br/></li>
              </ul>
          })} */}
        </div>
      </div>
    );
  }

export default AllApi;