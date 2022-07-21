import * as React from 'react';
import TextField from '@mui/material/TextField';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import useFetch from './useFetch';

import MenuItem from '@mui/material/MenuItem';

import  { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



export default function CreateGroupForm({userdata}){
    const currencies = [
        {
        value: 'SGD',
        label: '$',
        },
        {
        value: 'EUR',
        label: '€',
        },
        {
        value: 'BTC',
        label: '฿',
        },
        {
        value: 'JPY',
        label: '¥',
        },
    ];

    // const [currency, setCurrency] = React.useState('SGD');
    // const handleChange2 = (event) => {
    //     setCurrency(event.target.value);
    // };
    return(

    
    <>
    
        <Container fluid="sm" className='mt-5   '>
                
            <Row className = 'mx-4'>
                <TextField id="outlined-basic" label="Group Name" variant="outlined"  />
            </Row>
            <br/>
            <Row className = 'mx-4'>
                <TextField id="outlined-basic" label="Group Admin" variant="outlined"  />
            </Row>
            <br/>
            <Row className = 'mx-4'>
                <TextField id="outlined-basic" label="Trip Duration" variant="outlined" placeholder ='DD/MM/YY - DD/MM/YY'    />
            </Row>
            <br/>
            
            <Row className = 'mx-4'>
                <TextField
                        id="outlined-select-currency"
                        select
                        label="Group Members"
                        
                        multiple
                        helperText=""
                        
                    >
                        {userdata.map((option) => (
                        <MenuItem key={option.user_id} value={option.user_ids}>
                            {option.user_name}
                        </MenuItem>
                        ))}
                    </TextField>
            </Row>
            <br/>
        
            <Row className = 'mx-4'>
            
                <input type='file' variant='outlined' label="Group Image"></input>
            </Row>
            <br/>
            <Row className = 'mx-4'>         
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Home Currency"
                
                    // onChange={handleChange2}
                    helperText=""
                    
                >
                    {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                    ))}
                </TextField>
            </Row>
            <br/>
            <Row className = 'mx-4'>
                <Button variant="contained" >Create Group</Button>
            </Row>
            
        
        </Container>
            
    
    
    
    
    </>)
}