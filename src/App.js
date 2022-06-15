import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer.js';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddingNewGroup from './components/AddGroup.js';
import AddTransaction from './components/AddTransaction.js'
import TransactionTable from './components/TransactionTable.js';




function App() {
  return (
    <div className="App">
      
      <Button variant="contained" color="secondary">Add Group</Button>
      <TransactionTable></TransactionTable>
      <hr/>
      <AddingNewGroup></AddingNewGroup>
      <hr/>
      <AddTransaction></AddTransaction>
      <Footer></Footer>


    </div>
  );
}

export default App;
