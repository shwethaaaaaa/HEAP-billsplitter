import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';


export default function GroupFinalTransaction(){
    return (
        <>
            <br></br>
            <br></br>
            <h2>Final (Trip to Swiss :D) Transactions</h2>
            <Table striped bordered hover variant="dark">
            <thead>
            <tr>
                <th>Payer</th>
                <th>Recipient </th>
                <th>Amount</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Jacob</td>
                <td>Otto</td>
                <td>20</td>
            </tr>
            <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>10</td>
            </tr>
            </tbody>
        </Table>
      </>

    )

}