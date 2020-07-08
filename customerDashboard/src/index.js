import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/rsuite/lib/styles/index.less';
// import '../node_modules/bootstrap-daterangepicker/daterangepicker.css'

// import '../node_modules/react-date-range/dist/styles.css'; 
// import '../node_modules/react-date-range/dist/theme/default.css';

ReactDOM.render(<Main/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
