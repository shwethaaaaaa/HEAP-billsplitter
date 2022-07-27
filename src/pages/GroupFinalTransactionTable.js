import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import useFetch from './useFetch';



export default function GroupFinalTransactionTable({ finaltransactionsdata }){
    const GroupName =  finaltransactionsdata.data.final_data.group_name
    const GroupID = finaltransactionsdata.data.final_data.group_id
    const FinalTransactions =  finaltransactionsdata.data.final_data.payment_settlement // list of lists
    console.log(FinalTransactions)
    return(
         <>
                <br></br>
                <br></br>
                <h2>Group {GroupName}'s Final Transactions</h2>
                <div className='mx-3 mt-3'>
                    <Table striped bordered hover variant="dark">
                        <thead>
                        <tr>
                            <th>Payer</th>
                            <th>Recipient</th>
                            <th>Amount</th>
                        </tr>
                        </thead>
                        <tbody>
                        {FinalTransactions.map((option) => (
                                <tr>
                                    <td>{option[1]}</td>
                                    <td>{option[0]}</td>
                                    <td>{option[2]}</td>
                                </tr>
                                ))}
                        
                        
                        </tbody>
                    </Table>
                 </div>
         </>
     
    )
}


