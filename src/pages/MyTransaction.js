import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';


export default function MyTransaction(){
    return (
        <>
        <br></br>
        <h2>Your Debits</h2>
        <Table striped bordered hover variant="dark">
        <thead>
        <tr>
            <th>Transaction ID</th>
            <th>Group</th>
            <th>Payer</th>
            <th>Amount</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>1</td>
            <td>Trip to Swiss :D</td>
            <td>Mark</td>
            <td>+10</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Trip to Swiss :D</td>
            <td>Jacob</td>
            <td>+20</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Aussie Vacay!</td>
            <td>Shwetha</td>
            <td>+30</td>
        </tr>
        </tbody>
    </Table>

    <br></br>
        <h2>Your Credits</h2>
        <Table striped bordered hover variant="dark">
        <thead>
        <tr>
            <th>Transaction ID</th>
            <th>Group</th>
            <th>Recipient</th>
            <th>Amount</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>1</td>
            <td>Trip to KL</td>
            <td>Otto</td>
            <td>-10</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Trip to Bali</td>
            <td>Thornton</td>
            <td>-20</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Trip to Germany</td>
            <td>Sanofer</td>
            <td>-30</td>
        </tr>
        </tbody>
    </Table>
  </>


    )

}