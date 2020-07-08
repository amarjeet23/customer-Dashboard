import React, {useState,useContext}  from "react";
import Chart from "react-apexcharts";
import './API.css'
import {SetDataContext } from '../../SetDataContext';


const API=()=> {
  const [datainfo,setdataInfo] = useContext(SetDataContext)
  const [Apidata,setApidata] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: ['ApiHits','storageSize', 'pushHits', 'sizeBandWidth']
      }
    },
    series: [
      {
        name: "series-1",
        data: [datainfo[0].apiHits, datainfo[0].storageSize, datainfo[0].pushHits,datainfo[0].sizeBandWidth]
      }
    ]
  

  })

    
      
  

 
    return (
      <div className="Api">
        <div className="row">
          <div className="mixed-chart">
          <Chart
              options={Apidata.options}
              series={Apidata.series}
              type="bar"
              width="600"
              height="400"
            />
          </div>
        </div>
      </div>
    );
  
}
export default API;