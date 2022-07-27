import * as React from 'react';
import TextField from '@mui/material/TextField';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import useFetch from './useFetch';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
import Button from 'react-bootstrap/Button';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { useEffect, useState } from 'react';

import CallNewGroupMS from './CallNewGroupMS';
import Alert from 'react-bootstrap/Alert';


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

    // function getStyles(name, groupmembers, theme) {
    //     return {
    //       fontWeight:
    //         groupmembers.indexOf(name) === -1
    //           ? theme.typography.fontWeightRegular
    //           : theme.typography.fontWeightMedium,
    //     };
    //   }
    const [submitForm, setsubmitForm] = React.useState(false)
    const theme = useTheme();
    const [ownerids, setownerids] = React.useState([]);

    const handleChange4 = (event) => {
    const {
        target: { value },
    } = event;
    setownerids(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
    );

    };

    const allUsersIntList = userdata.data.users
    console.log(allUsersIntList)
  

    const [currency, setcurrency] = React.useState('SGD');
    const handleChange5 = (event) => {
        setcurrency(event.target.value);
    };
    const [groupname, setgroupname] = React.useState("");
    const [groupadmin, setgroupadmin] = React.useState("");
    const [tripduration, settripduration] = React.useState("");
    const handleChange1 = (event) => {
        setgroupname(event.target.value);
    };
    const handleChange2 = (event) => {
        setgroupadmin(event.target.value);
    };
    const handleChange3 = (event) => {
        settripduration(event.target.value);
    };
    
   
    const groupmembers = []
   
    for ( var id of ownerids){
        console.log(id)
        for ( var person of allUsersIntList){
            if (person["user_id"] == id){
                groupmembers.push(person["user_name"])
            }
        }

    }
    const fingroupmembers = groupmembers.join()
    const finuserids = ownerids.join()
    const groupdata = {
        group_name:groupname , group_members: fingroupmembers, owner_id:groupadmin, user_ids: finuserids, home_currency: currency, trip_duration:tripduration
    }
    const handleForm = () => {
        
        setsubmitForm(true);
      
        };
    console.log(groupmembers)
    console.log(groupdata)


    return(

    
    <>
         
        <Container fluid="sm" className='mt-5   '>
                
            <Row className = 'mx-4'>
                <TextField id="outlined-basic" label="Group Name" variant="outlined" value = {groupname} onChange={handleChange1}  />
            </Row>
            <br/>
            <Row className = 'mx-4'>
                <TextField id="outlined-basic" label="Group Admin" variant="outlined" value = {groupadmin} onChange={handleChange2} />
            </Row>
            <br/>
            <Row className = 'mx-4'>
                <TextField id="outlined-basic" label="Trip Duration" variant="outlined" placeholder ='DD/MM/YY - DD/MM/YY' value = {tripduration} onChange={handleChange3}   />
            </Row>
            <br/>
            
            
   
            <Row  >
                <div >
                    <FormControl sx={{  width: 320 }}>
                        <InputLabel id="demo-multiple-name-label">Group Members</InputLabel>
                        <Select
                        labelId="demo-multiple-name-label"
                        id="demo-multiple-name"
                        multiple
                        value={ownerids}
                        onChange={handleChange4}
                        input={<OutlinedInput label="Group Members" />}
                       
                        >
                        {allUsersIntList.map((user) => (
                            <MenuItem
                            key={user.user_name}
                            value={user.user_id}
                           
                            >
                            {user.user_name}
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                </div>
            </Row>
        
            
            <br/>
            <Row className = 'mx-4'>         
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Home Currency"
                    value = {currency}
                    onChange={handleChange5}
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
            <Row className = 'mx-4 mt-3' >
                <Button variant='primary' onClick = {handleForm}>Create Group</Button>
                {submitForm && <CallNewGroupMS groupdata ={ groupdata }/> }
            </Row>

        </Container>

        <br></br>
            <br></br>
            {submitForm && <Alert key= "success" variant= "success">Group successfully created!</Alert>}
            {/* {submitForm && <Button variant="contained" href = {`/?${groupadmin}`}>Go back to My Groups!</Button>}
             */}
    
    
    
    
    </>)
}