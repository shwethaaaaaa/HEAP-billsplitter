import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import useFetch from './useFetch';
import DebitTable from './DebitTable';
import CreditTable from './CreditTable';





export default function MyTransaction({useriddata}){

    // const [query, setQuery] = useState('');
    // const queryString = window.location.search.slice(1)
    // const querylist = queryString.split("?")
    // const useriddata = querylist[0]
    console.log(useriddata)

    // for DEBIT TABLE (Hardcoded now to user_id 1 = Jane for now!!)
    // const Debit_API_URL = 'http://192.168.68.103:5003/transaction_to_paid/' + String(useriddata)
    // const Credit_API_URL = 'http://192.168.68.103:5003/transaction_to_be_owed/' + String(useriddata)
    const Debit_API_URL = 'http://localhost:5003/transaction_to_paid/' + String(useriddata)
    const Credit_API_URL = 'http://localhost:5003/transaction_to_be_owed/' + String(useriddata)
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

    console.log(DebitData)
    console.log(CreditData)
    
    return (
        <>
            <div id="api-display-card">
                { errorDebit &&  <p>An error occurred while retrieving the debit table data. </p> }
                { isPendingDebit && <p>An error occurred while retrieving the debit table data. </p> }
                { DebitData && <DebitTable debitdata={ DebitData } /> }
            </div>

            <div id="api-display-card">
                { errorCredit &&  <p>An error occurred while retrieving the credit table data. </p> }
                { isPendingCredit && <p>An error occurred while retrieving the credit table data. </p> }
                { CreditData && <CreditTable creditdata={ CreditData } /> }
            </div>
  </>


    )

}