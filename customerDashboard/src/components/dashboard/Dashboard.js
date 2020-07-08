import React, { useContext,useEffect } from 'react'
import './Dashboard.css';
import {SetDataContext } from '../../SetDataContext';
const Dashboard =()=>{
    // const [data]=useContext(DataContext)
    const [datainfo,setdataInfo] = useContext(SetDataContext)
    
    
   
    const Style= {
        textAlign:'center'
    }
    const Style1 ={
        width:'80%',
        height:'80px',
        boredr:'1px solid black',
        textAlign:'center',
        backgroundColor:"#eee",
        position:'relative',
        top:'-15px',
        left:"10%",
        borderRadius:"50%",color:"blue"

    }
        return (
            <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <p style={Style}>API</p>
                            <br/>
                            
                            <h5 style={Style1}>{datainfo[0].apiHits}</h5> 
                        </div>
                        <div className="col-sm">
                        <p style={Style}>Storage</p>
                             <br/>
                             
                             <h5 style={Style1}>{datainfo[0].storageSize}</h5>
                        </div>
                   
                    
                        <div className="col-sm">
                        <p style={Style}>Push</p>
                             <br/>
                             
                            <h5 style={Style1}>{datainfo[0].pushHits}</h5>
                        </div>
                        <div className="col-sm">
                        <p style={Style}>Bandwidth</p>
                            <br/>
                            
                            <h5 style={Style1}>{datainfo[0].sizeBandWidth}</h5>


                        </div>
                        </div>
            </div>
        
        )
    }


export default Dashboard;
