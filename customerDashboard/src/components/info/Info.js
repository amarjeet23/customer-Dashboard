import React,{useState,useContext} from 'react'
import './Info.css';
import {DataContext} from '../../DataContext';
const Info=(props)=> {
        const [info,setInfo]=useContext(DataContext);
        console.log(props);
        return (
            
                <div className="selectcust">
                 <select>
                         <option>
                             {info.length} 
                         </option>
                 </select>
                </div>
                
            
        )
    }


export default Info;




//   componentDidMount(){
//     axios.get('http://dummy.restapiexample.com/api/v1/employees')
//     .then(res=>{
//         console.log(res.data.data)
    
//         this.setState({custumer:res.data.data})
     
//     })
//     .catch(err =>{
//         console.log(err)
//     })
// }

//   Submit=(id)=>{
//     let {API,storage,push,bandwidth} = this.state;
//     console.log(API)
//     console.log("id="+id)
    
//     this.setState({API:storage,storage:push,push:bandwidth,bandwidth:API})
  
//   }
  
//     const {custumer} = this.state;
