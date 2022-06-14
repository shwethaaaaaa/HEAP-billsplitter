import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer.js';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddingNewGroup from './components/Group.js';
import AddTransaction from './components/Transaction.js'


function App() {
  return (
    <div className="App">
      <Button variant="contained" color="secondary">Add Group</Button>
      <hr/>
      <AddingNewGroup></AddingNewGroup>
      <hr/>
      <AddTransaction></AddTransaction>


    </div>
  );
}

export default App;
