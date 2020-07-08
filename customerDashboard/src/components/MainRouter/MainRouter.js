import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import API from "../API/API";
import Storage from '../storage/Storage';
import GraphHeader from '../Graph/GraphHeader';
import Push from '../push/Push';
import Bandwidth from '../bandwidth/Bandwidth';
import AllApi from '../AllApi/AllApi'
class MainRouter extends Component {
    render() {
        return (
            <div className="mainrouter">
                <GraphHeader/>
                <Switch>
                    <Route exact path="/" component={API}/>
                    <Route exact path="/API" component={API}/>
                    <Route exact path="/storage" component={Storage}/>
                    <Route exact path="/push" component={Push}/>
                    <Route exact path="/bandwidth" component={Bandwidth}/>
                    <Route exact path="/Allapi" component={AllApi}/>
                </Switch>
            </div>
        )
    }
}

export default MainRouter;
