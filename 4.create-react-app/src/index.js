import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

/**@MyComponents 🍰 */
import CraTest from './components/1.cra-test/CraTest';
import { Box1, Box2, Box3, Box4 } from './components/2.css/Box';

ReactDOM.render(
  <React.StrictMode>
    {/* <CraTest /> */}
    <Box1 />
    <Box2 />
    <Box3 />
    <Box4 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
