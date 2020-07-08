import React,{useState,createContext} from 'react';
export const SetDataContext = createContext();

const SetDataProvider =(props) =>{
    const [datainfo,setdataInfo] = useState([{
        date: " ",
        sizeBandWidth:0,
        service_id:0,
        storageSize:0,
        apiHits: 0,
        pushHits:0

    }])
    // const changeData=(e)=>{
    //     setData(e);
    // }
    return(
        <SetDataContext.Provider value ={[datainfo,setdataInfo]  } >
            {props.children}
        </SetDataContext.Provider>
    )
}
export default SetDataProvider;