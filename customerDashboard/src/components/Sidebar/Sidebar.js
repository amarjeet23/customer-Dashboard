import React,{useState} from 'react';
import './Sidebar.css'
// import {Link} from 'react-router-dom';
import App from "../../App";
import  AllApi from '../AllApi/AllApi';

const Sidebar=()=>{
    const [show,SetShow] = useState(false)
    const ShowApi=()=>{

    }
    return (
        <div > 
        <div className="Sidebutton">
                <button>DashBoard</button>
                <button onClick={ShowApi}>API Usage</button>
                {
                    
                (show===true) ? <div className = "showallapi"> <AllApi/> </div>:null
             
                }
        </div>
        </div>
    )
}

export default Sidebar;