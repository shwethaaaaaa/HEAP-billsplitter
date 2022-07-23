import * as React from 'react';
// import Box from '@mui/material/Box';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import useFetch from './useFetch';

import MenuItem from '@mui/material/MenuItem';

import  { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CreateGroupForm from './CreateGroupForm';





export default function AddingNewGroup(){
            
    

          
        
        
            const allUsers = ['Mary', 'poppy']  // need to call user MS
            const User_API_URL = 'http://192.168.68.103:5007/get_all_users';
            const {
                data  :userdata, 
                isPending, 
                error    
            } = useFetch(User_API_URL, "GET");

            console.log(userdata)
           
            // const userids = []
            // const groupmembers = "randomname"
            // const [userids, setuserids] = useState("");
            // const [grpname, setgrpname] = useState("");
            // const [ownerid, setownerid] = useState("");
          
            // const [tripduration, settripduration] = useState("");
          
            
          


            
              
            
            

            // "group_name": "yoyo", 
            // "group_members": "Mary, Ron, Krish",
            // "owner_id":2,
            // "user_ids": "2,4,7",
            // "home_currency": "SG"
        
           

         
    return(
        <>  
            <div >
               
                { error && <p>There is some error in fetching users</p> }
                { isPending && <p>users Pending</p> }
                { userdata && <CreateGroupForm userdata={ userdata } /> }
            </div>

           
        </>

    );
}

