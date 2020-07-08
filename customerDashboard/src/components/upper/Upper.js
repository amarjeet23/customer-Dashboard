import React, {useState,useContext,useEffect,useReducer } from 'react'
// import Calendra from '../calendar/Calendra';
 import './Upper.css';
 import 'react-dates/initialize'
import {DataContext} from '../../DataContext';
import {SetDataContext} from '../../SetDataContext';
import axios from 'axios';
import {DateRangeInput} from '@datepicker-react/styled'
import moment from 'moment';
import {Modal} from "react-bootstrap";

const initialState = {
    startDate: null,
    endDate: null,
    focusedInput: null,
  }
  
  function reducer(state, action) {
    switch (action.type) {
      case 'focusChange':
        return {...state, focusedInput: action.payload}
      case 'dateChange':
        return action.payload
      default:
        throw new Error()
    }
  }


const Upper=()=>{
    const [selectdata,setSelectdata] = useState({ });
    // const [datainfo,setdataInfo]=useState({ })
    const [app,setApp] = useState([])
    const {value1} = useContext(DataContext)
    const [info,setInfo] = value1;
    const [datainfo,setdataInfo] = useContext(SetDataContext);
    const [data,setData] = useState(' ')
    const [serviceid,setserviceId] = useState('')
    const [date,setDate] = useState(new Date())
    const [state, dispatch] = useReducer(reducer, initialState)
    
    const [open,setopen] = useState(false)


  
    //   const Submit=()=>{
        
    //     console.log(state.startDate)
    //     console.log(state.endDate)
    //     console.log(typeof(JSON.stringify(state.endDate)))
    //   }
 

   
    const Dateset =(e) =>{
        setDate(e)
        console.log(e)
    }
    const formHandler =(e)=>{
        setdataInfo((data))
        console.log("submitted")
    }
    const selectHandler =(e)=>{
        setSelectdata(JSON.parse(e.target.value))
      
    }
    const selectappHandler =(e)=>{
        // setserviceId(JSON.parse(e.target.value))
        console.log("service id")
        console.log(JSON.parse(e.target.value))
        setserviceId((e.target.value))

    }
    useEffect(()=>{
        axios.get(`https://20cde4c0.ngrok.io/apiuses/getAppDetails?&region=${selectdata}`)
        .then(result =>{
            console.log("from dropdown",result);
            setApp(result.data);
            
            
        })
        .catch(err =>{
            console.log(err)
        })
    },[selectdata]);
    useEffect(()=>{
        // 
        axios.get(`https://20cde4c0.ngrok.io/apiuses/getTotalApiUsageByAppIdAndDateRange?startDate=${moment(state.startDate).format('YYYY-MM-DD')}&endDate=${moment(state.endDate).format('YYYY-MM-DD')}&serviceId=${serviceid}`)
        .then(res =>{
            console.log("response ",res)
            setData (res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    },[state.endDate])


    const submitStyle={
        margin: '0px 5px',padding: '10px 20px',
        background: '#349ce4',color: '#fff',
        border: 'none',borderRadius: '5px',lineHeight: 'normal',minWidth: '145px'
        }
        return(
            <div className ="container">
                <div className ="row selectionlist">
                    <div className="col-lg-2 col-md-2">
            {/* <div className="selectionlist"> */}
                {/* <ul> */}
                    {/* <li> */}
                     <select onChange={selectHandler} >
                     <option>Select Customer</option>
                        {info.map(result=>{
                            
                            return <option
                            value ={JSON.stringify(result.value)}
                            key={result.value}>
                            {result.label}</option>
                        })}
                    </select>
                    {/* </li> */}
                    </div>
                     {/* <li id="selectapp"> */}
                     <div className="col-lg-4 col-md-4">
                    <select onChange={selectappHandler} className="selectapp"> 
                        <option value="select App">select App</option>
                        {app.map(result=>{
                            
                            return <option
                            value ={JSON.stringify(result.id)}
                            key={result.id}>
                            {result.name}</option>
                        })}
                        </select>
                        </div>
                        {/* </li> */}

                
                {/* <li> */}
                <div className="col-lg-2 col-md-2">
                    <button className="cbutton"onClick={()=>setopen(!open)}>SelectDate</button>
                    <Modal show={open}>
                        <Modal.Header>select date Range</Modal.Header>
                        <Modal.Body>
                        <DateRangeInput
                            onDatesChange={data => dispatch({type: 'dateChange', payload: data})}
                            onFocusChange={focusedInput => dispatch({type: 'focusChange', payload: focusedInput})}
                            startDate={state.startDate} // Date or null
                            endDate={state.endDate} // Date or null
                            focusedInput={state.focusedInput} // START_DATE, END_DATE or null
                            displayFormat={"dd/MM/yyyy"}
                    />
                        </Modal.Body>
                        <Modal.Footer>
                            <button onClick={()=>setopen(!open)}>close</button>
                        </Modal.Footer>
                    </Modal>
                    </div>
               
                {/* </li> */}
                 
                {/* <li> */}
                <div className="col-lg-2 col-md-2 upperbutton">
                    <button onClick = {formHandler} style={submitStyle} >Submit</button>
                    </div>
                    {/* </li> */}
                {/* </ul> */}
                {/* </div> */}
            </div>
            </div>
            
        );
}
export default Upper;
