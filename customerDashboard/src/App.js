import React from 'react';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Upper from "./components/upper/Upper";
import { BrowserRouter} from 'react-router-dom';
import MainRouter from './components/MainRouter/MainRouter';
import Dataprovider from './DataContext' ;
import SetDataProvider from './SetDataContext' ;
const App=()=>{
  return (
    <div>
      <Dataprovider>
      <SetDataProvider>
      <BrowserRouter>

      <div className="upper">
        <div className="container"><Upper/></div>
      </div>
      <div className="dashboard">
        <div className="cnt-main">
          <div className="container">
        <Dashboard />
       
            <div className="container">
           
                <MainRouter/>
              
           </div>
           </div>
           </div>
      </div>
      </BrowserRouter>
      </SetDataProvider>
      </Dataprovider>
    </div>
  );
}
export default App;

