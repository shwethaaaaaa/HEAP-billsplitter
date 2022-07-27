import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import useFetch from './useFetch';



export default function GroupTransactionsTable({ grouptransactiondata }){
    const Transactions =  grouptransactiondata.data.transactions
    return(
         <>
                <br></br>
                 <Table striped bordered hover variant="dark">
                     <thead>
                     <tr>
                         <th>Transaction ID</th>
                         <th>Description</th>
                         <th>Payer</th>
                         <th>Payee</th>
                         <th>Amount</th>
                     </tr>
                     </thead>
                     <tbody>
                     {Transactions.map((option) => (
                            <tr>
                                 <td>{option.transaction_id}</td>
                                 <td>{option.description}</td>
                                 <td>{option.payer}</td>
                                 <td>{option.ower}</td>
                                 <td>{option.amount}</td>
                             </tr>
                             ))}
                     
                     
                     </tbody>
                 </Table>
         </>
     
    )
}


