import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import useFetch from './useFetch';
import DebitTable from './DebitTable';
import CreditTable from './CreditTable';





export default function MyTransaction(){

    // const [query, setQuery] = useState('');

    // for DEBIT TABLE (Hardcoded now to user_id 1 = Jane for now!!)
    const Debit_API_URL = 'http://localhost:5003/transaction_to_paid/1' 
    const Credit_API_URL = 'http://localhost:5003/transaction_to_be_owed/1'
    // + 
    // query +
    //  "/";

    const {
        data: DebitData, 
        isPendingDebit, 
        errorDebit
    } = useFetch(Debit_API_URL, "GET");

    const {
        data: CreditData, 
        isPendingCredit, 
        errorCredit
    } = useFetch(Credit_API_URL, "GET");
    
    return (
        <>
            <div id="api-display-card">
                { errorDebit &&  <p>An error occurred while retrieving the data. </p> }
                { isPendingDebit && <p>An error occurred while retrieving the data. </p> }
                { DebitData && <DebitTable debitdata={ DebitData } /> }
            </div>

            <div id="api-display-card">
                { errorCredit &&  <p>An error occurred while retrieving the data. </p> }
                { isPendingCredit && <p>An error occurred while retrieving the data. </p> }
                { CreditData && <CreditTable creditdata={ CreditData } /> }
            </div>
  </>


    )

}