import React, { Component } from 'react';
import Authentication from './Authentication/Authentication';

export class Header extends Component {
    state={
        show:false
    }
    toggle=()=>{
        const doesShow=this.state.show;
        this.setState({show:!doesShow})
    }
    render() {
        return (
            <div>
            <div className="navbar navbar-expand-sm ">
                  <p className="navbar-brand">Customer Info</p>
                
                {
                 this.state.show===true?<Authentication close={this.close}/> :null
                }
               
            </div>
              <button  style={{backgroundColor:"#eee"}}onClick={this.toggle} className="headerbutton">Register</button>
              </div>
        )
    }
}

export default Header
