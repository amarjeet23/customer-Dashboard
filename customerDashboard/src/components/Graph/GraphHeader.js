import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Graphheader.css';


class GraphHeader extends Component {
    render() {
        return (
            <div className="graphheader">
                <div className="row">
                    <div className="col-lg-3 col-md-3">
                         <Link to="/API"> <button>API</button></Link> 
                    </div>

                    <div className="col-lg-3 col-md-3">
                        <Link to="/storage"> <button>Storage</button></Link>
                    </div>

                    <div className="col-lg-3 col-md-3">
                        <Link to="/push"> <button>Push</button></Link>
                    </div>

                    <div className="col-lg-3 col-md-3">
                        <Link to="/bandwidth"><button>Bandwidth </button></Link>
                    </div> 

                </div>
            </div>
        )
    }
}

export default GraphHeader
