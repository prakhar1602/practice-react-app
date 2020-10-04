import React from 'react';
import logo from './logo.svg';
import './App.css';

//adding data table component
//import { TableComponent } from "./Components/TableComponent/TableComponent";

import  Nobel  from "./Components/TableComponent/Nobel";

// import Federico from './Components/Federico/Federico'

//import ClassComponent from './Components/ClassComponent/ClassComponent' //importing the new defined component 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React !!!
        </a> */}

        {/* <Federico /> */}
        {/* <TableComponent/> */}
        {/* <ClassComponent />   */}

        <Nobel/>

      </header>
    </div>
  );
}

export default App;
