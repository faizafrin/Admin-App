import React from "react";
//import BaseApp from "./Base/base";
import './App.css';
import LogInPage from "./pages/LogInPage";
import Register from "./pages/RegisterPage";
import ForgotPassword from "./pages/forgot-password";
import Dashboard from "./childrens/Dashboard";
import Button from "./Components/button";
import Cards from "./Components/card";
import TablesReact from "./Table/table";
import { Route, Routes } from "react-router";
import ErrorPage from "./pages/ErrorPage";
import BlankPage from "./pages/BlankPage";
import Colors from "./utility/colors";
import Borders from "./utility/borders";
import Animation from "./utility/Animation";
import Others from "./utility/other";

function App() {
  return (
    <div className="App">
      
       <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/components/buttons" element={<Button/>}/>
        <Route path="/components/cards" element={<Cards/>}/>
        <Route path="/pages/register" element={<Register/>}/>
        <Route path="/pages/login" element={<LogInPage/>}/>
        <Route path="/pages/forgot" element={<ForgotPassword/>}/>
        <Route path="/pages/error" element={<ErrorPage/>}/>
        <Route path="/pages/blank" element={<BlankPage/>}/>
        <Route path="/others/tables" element={<TablesReact/>}/>
        <Route path="/colors" element={<Colors/>}/>
        <Route path="/borders" element={<Borders/>}/>
        <Route path="/animation" element={<Animation/>}/>
        <Route path="/others" element={<Others/>}/>
          
       </Routes>
     </div>
  );
}

export default App;