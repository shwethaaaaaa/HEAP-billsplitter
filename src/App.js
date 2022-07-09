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
import EndTrip from "./pages/EndTrip.js";
import Home from "./pages/Home";
import Group from "./pages/Group";
import Profile from "./pages/Profile";






function App() {
  return (
    <div className="App">
      <style>{'body { background-color: #f6e8eb; }'}</style>
          {/* <Navbar></Navbar>
          <Button variant="contained" color="secondary">Add Group</Button>
          <TransactionTable></TransactionTable>
          <hr/>
          <AddingNewGroup></AddingNewGroup>
          <hr/>
          <AddTransaction></AddTransaction>
          
        
        
          */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="EndTrip" element={<EndTrip />} />
                <Route path="Profile" element={<Profile />} />
                <Route path="CreateGroup" element={<CreateGroup />} />
                <Route path="CreateTransaction" element={<CreateTransaction />} />
                <Route path="Group" element={<Group />} /> 

                {/* <Route path="*" element={<NoPage />} /> */}
            </Route>
            
          </Routes>
        </BrowserRouter>
      


    </div>
    
  );
}

export default App;
