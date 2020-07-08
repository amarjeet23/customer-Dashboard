import React, { Component } from 'react'
import {Modal} from "react-bootstrap"
import Calendar from 'react-calendar';
import './Calendra.css';
import Logo from './logo.png';

class Calendra extends Component {
    state={
        open:false
    }
    show1=()=>{
        this.setState({open:true})
    }
    close=()=>{
        this.setState({open:false})
    }
    re
    render() {
        return (
            <div className="calendar" >
                <Modal show={this.state.open}>
                    {/* <Modal.Header>select date</Modal.Header> */}
                    <Modal.Body>
                        <Calendar />
                    </Modal.Body>
                    <Modal.Footer><button onClick={this.close}>Save</button></Modal.Footer>
                </Modal>
               <img src={Logo} onClick={this.show1} style={{width:'30px',height:"30px",margin:"20px"}}/>
            </div>
        )
    }
}

export default Calendra;
