import React,{useState} from 'react'
import Header from './components/Header';
import './App.css';
// import Sidebar from './components/Sidebar/Sidebar';
import App from './App';
// import AllApi from './components/AllApi/AllApi';
// import Upper from './components/upper/Upper'
import Dataprovider from './DataContext' ;
import SetDataProvider from './SetDataContext' ;
import Apiusage from './components/Apiusage/Apiusage'


 const Main =()=>{
     const [dashShow,setdashShow] =useState(true)
     const [ApiShow,setApiShow] =useState(false)
    // state ={
    //     dashShow:true,
    //     ApiShow:false
    // }
    const showDash = ()=>{
        setdashShow(true)
        setApiShow(false)
    }
    const showApi = ()=>{
        setdashShow(false)
        setApiShow(true)
    }
    
    return (
        <div>
              <Dataprovider>
                <SetDataProvider>
            
            <div className="header">
                <div className="container"><Header/></div>
            </div>

            <div className="sidebar">
            

            <button  className="sidebutton" onClick={()=>showDash()}>Dashboard</button> <br/>
            <button  className="sidebutton" onClick={()=>showApi()}>APi Usage</button>
                   
             </div> 
             {
                 (dashShow===true)?  <App/>:null
             }
             <div className="container">

             {  
                 (ApiShow===true)?  <div className="showupper"><Apiusage/> </div>:null
                 
             }
             </div>


            
             
             </SetDataProvider>
            </Dataprovider>
           
        </div>
    )
}

export default Main;