import React, {useState,useContext,useEffect,useReducer } from 'react'
// import './Upper.css';
import 'react-dates/initialize'
import {DataContext} from '../../DataContext';
import {SetDataContext} from '../../SetDataContext';
import axios from 'axios';
import {DateRangeInput} from '@datepicker-react/styled'
import {Modal} from "react-bootstrap";
import AllApi from '../AllApi/AllApi'
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


const Apiusage=()=>{
    const [selectdata,setSelectdata] = useState({ });
    // const [datainfo,setdataInfo]=useState({ })
    const [app,setApp] = useState([])
    const {value2,value3} = useContext(DataContext);
    const [usageselect,setUsageselect] = value2;
    const [datainfo,setdataInfo] = useContext(SetDataContext);
    const [data,setData] = useState(' ')
    const [serviceid,setserviceId] = useState('')
    const [date,setDate] = useState(new Date())
    const [state, dispatch] = useReducer(reducer, initialState)
    const [tabledata,setTabledata] = useState([])
    const [displaydata,setDisplaydata] = useState([])
    const [open,setopen] = useState(false)
    const [graphdata,setGraphdata] = value3;
    const [a,setA] = useState('')
    

    const Dateset =(e) =>{
        setDate(e)
        console.log(e)
    }
    const formHandler =(e)=>{
        setdataInfo((data))
        setGraphdata((a))
        setDisplaydata(tabledata);
        console.log("displaydata",displaydata)
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
        axios.get(`https://20cde4c0.ngrok.io/apiuses/getApiResourceCount?startDate=2015-01-01&endDate=2020-01-01&servieId=8`)
        .then(res =>{
            console.log("response ",res.data)
            setData (res.data)
            setA((res.data))
        //    setGraphdata(res.data)
          
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
            <div>
            <div className ="container">
                <div className ="row selectionlist">
                    <div className="col-lg-2 col-md-2">
            {/* <div className="selectionlist"> */}
                {/* <ul> */}
                    {/* <li> */}
                     <select onChange={selectHandler} >
                     <option>Select Customer</option>
    
                        {usageselect.map(result=>{
                            
                            return <option
                            value ={JSON.stringify(result.label)}
                            key={result.index}>
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
            <AllApi/>
            </div>
         
            </div>
            
        );
}
export default Apiusage;
