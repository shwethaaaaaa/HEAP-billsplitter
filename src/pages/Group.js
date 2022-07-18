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
import Button from '@mui/material/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Outlet, Link } from "react-router-dom";


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

    const groupName = "Trip XX"  // to be rerieved from Group MS
    const duration = "12/03/23 - 20/03/23" // to be rerieved from group MS


      
    return(
        <>
          <Container className='mt-5 mb-3'>
            <h2>{groupName}</h2>
            <h3>{duration}</h3>
            <br/>
            <strong >Transaction History</strong>
          </Container>


            <TableContainer  component={Paper}>
                <Table className ='mr-3' sx={{  }} aria-label="customized table">
                    <TableHead>
                    <TableRow >
                        <StyledTableCell align='center'>Payer</StyledTableCell>
                        <StyledTableCell align='center'>Ower</StyledTableCell>
                        <StyledTableCell align='center'>Exchange Rate</StyledTableCell>
                        <StyledTableCell align='center'>Amount</StyledTableCell>
                        <StyledTableCell align='center'>Description</StyledTableCell>
                      
                    </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                          <StyledTableRow key={row.name}>
                          <StyledTableCell component="th" scope="row">
                              {row.name}
                          </StyledTableCell>
                          <StyledTableCell align="right">{row.calories}</StyledTableCell>
                          <StyledTableCell align="right">{row.fat}</StyledTableCell>
                          <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                          <StyledTableCell align="right">{row.protein}</StyledTableCell>
                          </StyledTableRow>
                      ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Row className='mt-5'>
              <Col>
                <Link to="/CreateTransaction"><Button variant="contained">Add Transaction</Button></Link>
              </Col>
              <Col>
              <Link to=""><Button variant="contained">End Trip</Button></Link>
              </Col>

            </Row>

        </>
    );
}



