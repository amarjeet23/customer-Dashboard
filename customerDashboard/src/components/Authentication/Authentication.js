import React, { Component } from 'react'
import {Modal} from "react-bootstrap";

class Authentication extends Component {
    state={
        open:true
    }
    close=()=>{
        this.setState({open:false})
    }
    render() {
        // const styleX = {
        //     width:'10px'
        // }
        return (
            <div>
                <Modal show={this.state.open}>
               <Modal.Header>Admin Login
                   <button onClick={this.close} style={{width:"6px"}}>x</button></Modal.Header> 
               <Modal.Body>
                  <form>
                      <div className="form-group">
                          <label>email</label>
                          <input type="email" className="form-control" value="Admin"/>
                      </div>
                      <div className="form-group">
                          <label>password</label>
                          <input type="password" className="form-control" value="Admin"/>
                      </div>
                  </form>
               </Modal.Body>
               <Modal.Footer><button onClick={this.close}>Login</button>
                        {/* <button onClick={this.close}>signup</button> */}
               </Modal.Footer>
               </Modal>
            </div>
        )
    }
}

export default Authentication
