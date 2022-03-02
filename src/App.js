import Sidebar from "./components/SideBar";
import Content from "./components/Content";
import BottomBar from "./components/BottomBar";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <div className="wrapper">
          <Sidebar></Sidebar>
          <Content></Content>
        </div>
        <BottomBar></BottomBar>
      </Router>
    </>
  );
}

export default App;
