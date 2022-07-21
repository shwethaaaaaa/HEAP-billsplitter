import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import { Button } from 'bootstrap';
// import Button from '@mui/material/Button';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import useFetch from './useFetch';
import CountryImage from './CountryImage';
import GroupTransactionsTable from './TransactionsbyGroup';
import { Outlet, Link } from "react-router-dom";
import { data } from 'autoprefixer';




export default function TransactionTable() {
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
      
      // function createData(name, calories, fat, carbs, protein) {
      //   return { name, calories, fat, carbs, protein };
      // }
      
    //   const rows = [
    //     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    //     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    //     createData('Eclair', 262, 16.0, 24, 6.0),
    //     createData('Cupcake', 305, 3.7, 67, 4.3),
    //     createData('Gingerbread', 356, 16.0, 49, 3.9),
    //   ];

    const rows = []; // to be called form transaction MS
    
    const queryString = window.location.search.slice(1)
    const querylist = queryString.split("?")
    const trip_location = querylist[0]
    const group_id = querylist[1]

    const groupName = "Trip to "  + trip_location// to be rerieved from Group MS

    // change the below later - retrieve via URL!!
    const duration = "12/03/23 - 20/03/23" // to be rerieved from group MS

    const Unsplash_API_URL = 'https://api.unsplash.com/search/photos?client_id=Tnkm6qLI-aFFmxeB_YxL_lZfMwTNqX4W9T7JhYjqHfg&query=' + trip_location + '&orientation=landscape'
    const Transaction_API_URL = 'http://localhost:5003/transaction/' + group_id// hardcoded to group 4 now!
    console.log(Transaction_API_URL )

    
    // + 
    // query +
    //  "/";

    const {
        data :unsplashdata, 
        isPending3, 
        error3
    } = useFetch(Unsplash_API_URL, "GET");

    const {
      data : grouptransactiondata, 
      isPending4, 
      error4
  } = useFetch(Transaction_API_URL, "GET");

  console.log(grouptransactiondata)
      
 
    // const dataList = data.results[0]

    return(
        <>
          <div id="api-display-card">
                { error3 &&  <p>An error occurred while retrieving the unsplash data. </p> }
                { isPending3 && <p>An error occurred while retrieving the unsplash data. </p> }
                { unsplashdata && <CountryImage unsplashdata={unsplashdata} /> }
          </div>

          <Container className='mt-5 mb-3'>
            <h2>{groupName}</h2>
            <h3>{duration}</h3>
            <br/>
            <strong >Transaction History</strong>
          </Container>

          <div id="api-display-card">
                { error4 &&  <p>An error occurred while retrieving the transactions data. </p> }
                { isPending4 && <p>An error occurred while retrieving the transactions data. </p> }
                { grouptransactiondata && <GroupTransactionsTable grouptransactiondata= { grouptransactiondata } /> }
          </div>


          <div className="mb-2">
            <Button href = "/AddTransaction" variant="primary" size="lg">
              Add Transaction
            </Button>

            <Button href = "/GroupFinalTransaction" className = "m-4" variant="danger" size="lg">
              Exit Group
            </Button>
          </div>


            
            

        </>
    );
}



