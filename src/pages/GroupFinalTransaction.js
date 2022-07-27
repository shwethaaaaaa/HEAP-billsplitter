import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import useFetch from './useFetch';
import GroupFinalTransactionTable from './GroupFinalTransactionTable';
import Image from 'react-bootstrap/Image';
import Alert from 'react-bootstrap/Alert';


export default function GroupFinalTransaction(){
    const queryString1 = window.location.search.slice(1)
    const querylist = queryString1.split("?")
    const group_ID = querylist[0]
    // const CalculateBill_API_URL = 'http://192.168.68.103:5004/calculate_bill/' + group_ID
    const CalculateBill_API_URL = 'http://localhost:5004/calculate_bill/' + group_ID

    const {
        data: FinalTransactionsData, 
        isPendingcb, 
        errorcb
    } = useFetch(CalculateBill_API_URL, "GET");

    return (
        <>

            <div id="api-display-card">
                            { errorcb &&  <p>An error occurred while retrieving the final transactions data data. </p> }
                            { isPendingcb && <p>Pending!</p> }
                            { !FinalTransactionsData &&  <Container><Alert key= "info" variant= "info" className='mt-5 mx-3'>Please hold on while we are calculating your bill</Alert>
                            </Container>
                           }
                            { FinalTransactionsData && <GroupFinalTransactionTable finaltransactionsdata={ FinalTransactionsData} /> }
            </div>


        </>

    )

}