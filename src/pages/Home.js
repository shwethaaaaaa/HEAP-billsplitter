import Button from '@mui/material/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MyGroupCards from './GroupCard';
import useFetch from './useFetch';
import { Outlet, Link } from "react-router-dom";
import MyTransaction from './MyTransaction';
import React, { useState, useContext, createContext } from "react";
import Alert from 'react-bootstrap/Alert';




// export const UserIdContext = React.createContext("en")

//need to use map function to create a card for each group
export default function Home(){

    // const queryString = window.location.search.slice(1)
    // const querylist = queryString.split("?")
    // const user_id = querylist[0]


    // const userid = user_id

    // trying the CONTEXT GLOBAL VARIABLE
    

    // <script>
    // window.$userid = user_id;
    // </script>

    // console.log("this is user_id: " + user_id)

    const Group_API_URL = 'http://localhost:5002/get_groups_by_user_id/1' 
    // + user_id

    const {
        data: MyGroupsData, 
        isPending, 
        error
    } = useFetch(Group_API_URL, "GET");


       
        

    return(
        <>

            <div id="api-display-card">
                { error &&  <p>An error occurred while retrieving the data.</p> }
                { isPending && <Alert key= "info" variant= "info">Please hold on while we getting your groups</Alert> }
                { MyGroupsData && <MyGroupCards mygroupsdata={ MyGroupsData} /> }
            </div>

            <div>

                    {/* <UserIdContext.Provider value={user_id}>
                            < MyTransaction />
                    </UserIdContext.Provider> */}
    
            </div>

    

        </>

    );
}