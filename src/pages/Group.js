import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



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

    const groupName = "Trip XX"  // to be rerieved from MS
    const duration = "12/03/23 - 20/03/23"


      
    return(
        <>
        
          <p>{groupName}</p>
          <p>{duration}</p>
          <p>Transaction History</p>


            <TableContainer component={Paper}>
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

        </>
    );
}



