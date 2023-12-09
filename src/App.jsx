import React from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Main from "./Components/Main";

// import Navbar from './Components/Navbar';
// import Recommand from './Components/Recommand';

function App() {
  return (
    <div className="maincontent">
      {/* <div className="sidebar">
        <Sidebar />
      </div> */}

      <div className="main">
        <Main />
      </div>

      {/* <Navbar /> */}
      {/* <Recommand /> */}
    </div>
  );
}

export default App;
