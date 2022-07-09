import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

  export default function AddTransaction() {
    const currencies = [
        {
          value: 'USD',
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
    const [currency, setCurrency] = React.useState('EUR');
  
    const handleChange = (event) => {
      setCurrency(event.target.value);
    };
  
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
                    <TextField id="outlined-basic" label="Paid By" variant="outlined" />
                </Row>
                <Row>
                    <TextField id="outlined-basic" label="Paid On Behalf Of" variant="outlined" />
                </Row>
                <Row>
                    <TextField id="outlined-basic" label="Amount" variant="outlined" />
                </Row>
                <Row>
                    <TextField id="outlined-basic" label="Comments" variant="outlined" />
                </Row>
                <Row>
                    <TextField
                id="outlined-select-currency"
                select
                label="Select"
                value={currency}
                onChange={handleChange}
                helperText="Please select your currency"
            >
                        {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                        ))}
                    </TextField>
                </Row>
               
            </Container>
            <Button variant="primary">Add Transaction&nbsp;&nbsp;</Button>
            
          
         
        
          
          
          
          
        </div>
      </Box>
    );
  }
  