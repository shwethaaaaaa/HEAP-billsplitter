// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import AddingNewGroup from './components/AddGroup.js';
// import AddTransaction from './components/AddTransaction.js'
// import TransactionTable from './components/TransactionTable.js';
// import Navbar from './components/Navbar.js';
import Layout from "./pages/Layout.js";
import CreateGroup from "./pages/CreateGroup";
import CreateTransaction from "./pages/CreateTransaction";
import Home from "./pages/Home";
import Group from "./pages/Group";
import Profile from "./pages/Profile";
import MyTransaction from "./pages/MyTransaction.js";
import GroupFinalTransaction from "./pages/GroupFinalTransaction.js";








function App() {
  return (
    <div className="App">
      <style>{'body { background-color: #f6e8eb; }'}</style>
    
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="Profile" element={<Profile />} />
                <Route path="CreateGroup" element={<CreateGroup />} />
                <Route path="CreateTransaction" element={<CreateTransaction />} />
                <Route path="Group" element={<Group />} /> 
                <Route path = "MyTransaction" element = {<MyTransaction />} />
                <Route path = "GroupFinalTransaction" element = {<GroupFinalTransaction />} />
            </Route>
            
          </Routes>
        </BrowserRouter>
      


    </div>
    
  );
}

export default App;
