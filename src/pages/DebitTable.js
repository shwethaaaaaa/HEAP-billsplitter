import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import useFetch from './useFetch';



export default function DebitTable({ debitdata }){  
    const Transactions =  debitdata.data.transactions
   return(
        <>  

                <br></br>
                <br></br>
                <h2>Your Debits</h2>
                <Table striped bordered hover variant="dark">
                    <thead>
                    <tr>
                        <th>Transaction ID</th>
                        <th>GroupID</th>
                        <th>Payer</th>
                        <th>Amount</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Transactions.map((option) => (
                           <tr>
                                <td>{option.transaction_id}</td>
                                <td>{option.group_id}</td>
                                <td>{option.payer}</td>
                                <td>+{option.amount}</td>
                            </tr>
                            ))}
                    
                    
                    </tbody>
                </Table>
        </>
    
   )
}


