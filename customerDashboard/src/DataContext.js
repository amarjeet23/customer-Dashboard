import React,{useState,createContext,useEffect} from 'react';
import axios from 'axios';
export const DataContext = createContext();
const Dataprovider = (props)=>{
    const [info,setInfo]=useState([])
    const [usageselect,setUsageselect]  = useState([])
    const [graphdata,setGraphdata] = useState([
        // api_count: 0,
        // service_id: 0,
        // resource: 0
    
    
    ]
    
    )

useEffect(()=>{
    axios.get('https://20cde4c0.ngrok.io/apiuses/getCustomerList')
    .then(result =>{
        
        setInfo(result.data);
        
    })
    .catch(err =>{
        console.log(err)
    })
},[]);

useEffect(()=>{
    axios.get('https://20cde4c0.ngrok.io/apiuses/getAllApiType')
    .then(result =>{
        
       console.log("dropdown",result)
       setUsageselect(result.data);
       console.log(usageselect)
        
    })
    .catch(err =>{
        console.log(err)
    })
},[]);
return(
    <DataContext.Provider value={{value1:[info,setInfo],value2:[usageselect,setUsageselect],value3:[graphdata,setGraphdata]}}>
        {props.children}
    </DataContext.Provider>
)

}
export default Dataprovider;
