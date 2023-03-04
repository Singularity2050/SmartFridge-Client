import * as React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./Pages/Home"





function App() {
    //Login
    //Registration
    //Main Page
    

  return (
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home/>}/>
          {/*<Route path={"/register"} element={<Register/>} />*/}
          {/*<Route path={"/profile"} element={<Profile />} />*/}
          {/*<Route path={"/home"} element={<Home />} />*/}
        </Routes>
      </BrowserRouter>
  );
}

export default App;
