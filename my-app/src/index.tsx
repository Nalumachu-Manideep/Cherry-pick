import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App2 from './App2';
import reportWebVitals from './reportWebVitals';
import HomePage from './pages/HomePage'
import StateManagement from './Components/organisms/StateManagement';
import { UseMemo } from './Components/molecules/AdvancedHooks/UseMemo';
import { UseCallback } from './Components/molecules/AdvancedHooks/UseCallBack';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';


const Header=()=>{
  return(
    <nav>
      <ul>
        <li><Link to="/">HomePage</Link></li> 
        <li><Link to="/statemanagement">StateManagement Assignment</Link></li> 
        <li><Link to="/usememo">UseMemo</Link></li> 
        <li><Link to="/usecallback">UseCallback</Link></li> 
        <li><Link to="/app">Event and Form Management</Link></li> 
        <li><Link to="/App2">App2</Link></li> 
      </ul>
    </nav>
  )
}
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/statemanagement" element={<StateManagement/>}/>
        <Route path="/usememo" element={<UseMemo/>}/>
        <Route path="/usecallback" element={<UseCallback/>}/>
        <Route path="/app" element={<App/>}/>
        <Route path="/app2" element={<App2/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
