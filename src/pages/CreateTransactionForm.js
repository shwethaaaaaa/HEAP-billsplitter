
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import CreateTransactionIntermediate from "./CreateTransactionIntermediate";

import { useEffect, useState } from 'react';

import CreateTransaction from './CreateTransaction';

  export default function AddTransaction() {
   

    const [submitForm, setsubmitForm] = React.useState(false)

    const [paidby, setpaidby] = React.useState("");
    const [paidfor, setpaidfor] = React.useState("");
    const [amount, setamount] = React.useState("");
    const [comments, setcomments] = React.useState("");
    const [exchangerate, setexchangerate] = React.useState("");

    const handleChange1 = (event) => {
        setpaidby(event.target.value);
    };
    const handleChange2 = (event) => {
        setpaidfor(event.target.value);
    };
    const handleChange3 = (event) => {
        setamount(event.target.value);
    };
    const handleChange4 = (event) => {
        setcomments(event.target.value);
    };
    const handleChange5 = (event) => {
        setexchangerate(event.target.value);
    };
  
    const handlesubmit = (event) => {
        setsubmitForm(true);
    };

    const queryString1 = window.location.search.slice(1)
    const querylist = queryString1.split("?")
    const groupid = querylist[0]

    const payer = ""
    const ower =""

    const transactiondata = {

        payer_id:paidby , ower_id:paidfor,amount:amount , description:comments , Exchange_rate:exchangerate, group_id:groupid
    }

  
    return (
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div style= {{ margin:'auto'}}>
            <Container className='mt-5; ' >
                <Row>
                    <TextField id="outlined-basic" label="Paid By" variant="outlined" value={paidby} onChange={handleChange1}/>
                </Row>
                <Row>
                    <TextField id="outlined-basic" label="Paid On Behalf Of" variant="outlined" value={paidfor} onChange={handleChange2}/>
                </Row>
                <Row>
                    <TextField id="outlined-basic" label="Amount" variant="outlined" value={amount} onChange={handleChange3}/>
                </Row>
                <Row>
                    <TextField id="outlined-basic" label="Comments" variant="outlined" value={comments} onChange={handleChange4}/>
                </Row>
                <Row>
                <TextField id="outlined-basic" label="Exchange Rate" variant="outlined" value={exchangerate} onChange={handleChange5}/>
                </Row>
               
            </Container>
            <Button variant="primary" onClick = {handlesubmit}>Add Transaction&nbsp;&nbsp;</Button> 

            {submitForm && <CreateTransactionIntermediate transactiondata ={ transactiondata }/> }
          
        </div>
      </Box>
    );
  }
  