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
import Layout from "./pages/Layout";
import CreateGroup from "./pages/CreateGroup";
import CreateTransaction from "./pages/CreateTransaction";
import Home from "./pages/Home";
import Group from "./pages/Group";
import Profile from "./pages/Profile";
import MyTransaction from "./pages/MyTransaction";
import GroupFinalTransaction from "./pages/GroupFinalTransaction";
import CreateTransactionForm from "./pages/CreateTransactionForm";
import CreateTransactionIntermediate from "./pages/CreateTransactionIntermediate.js";
import CreateGroupForm from './pages/CreateGroupForm';
import UserLogin from './pages/Userlogin';
import UserSignup from './pages/Usersignup';








function App() {
  //create usestate for id
  const [userid, setuserid] = React.useState("")
  return (
    <div className="App">
      <style>{'body { background-color: #f6e8eb;'}</style>
     
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout useriddata={userid}/>}>
                <Route index element={<Home useriddata={userid}/>} />
                <Route path="Profile" element={<Profile />} />
                <Route path="CreateGroup" element={<CreateGroup />} />
                <Route path="CreateTransaction" element={<CreateTransaction />} />
                <Route path="CreateTransactionForm" element={<CreateTransactionForm />} />
                <Route path="CreateTransactionIntermediate" element={<CreateTransactionIntermediate />} />
                <Route path="Group" element={<Group />} /> 
                <Route path = "MyTransaction" element = {<MyTransaction useriddata={userid} />} />
                <Route path = "GroupFinalTransaction" element = {<GroupFinalTransaction />} />
                <Route path = "UserLogin" element = {<UserLogin myfunction = {setuserid} useriddata={userid} />}></Route>
                <Route path = "UserSignup" element = {<UserSignup />}></Route>
            </Route>
            
          </Routes>
        </BrowserRouter>
      


    </div>
    
  );
}

export default App;
