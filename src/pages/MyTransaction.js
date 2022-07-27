import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import useFetch from './useFetch';
import DebitTable from './DebitTable';
import CreditTable from './CreditTable';
import {UserID} from "./CallingLogin";
import React, { useState, useContext, createContext } from "react"
import { UserIdContext } from './Home';
import Alert from 'react-bootstrap/Alert';





export default function MyTransaction({useriddata}){

    // const queryString = window.location.search.slice(1)
    // const querylist = queryString.split("?")
    // const actual_user_id = querylist[0]

    // console.log(actual_user_id)

    // console.log(UserIdContext)
    // const actual_user_id = useContext(UserIdContext)

    // const new_user_id = actual_user_id

    // console.log()

    // const queryString = window.location.search.slice(1)
    // const querylist = queryString.split("?")
    // const user_id = querylist[0]
    // const user_id = window.$userid
    // console.log("this is" + user_id )
    // console.log('hi')

//     <Name.Consumer>
//     {(fname) => {
//       return <h1>My Name is {fname}</h1>;
//     }}
//   </Name.Consumer>

    // const [query, setQuery] = useState('');
    // const queryString = window.location.search.slice(1)
    // const querylist = queryString.split("?")
    // const useriddata = querylist[0]
    console.log(useriddata)

    // for DEBIT TABLE (Hardcoded now to user_id 1 = Jane for now!!)
    const Debit_API_URL = 'http://192.168.68.103:5003/transaction_to_paid/1'
    const Credit_API_URL = 'http://192.168.68.103:5003/transaction_to_be_owed/1'
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
                { isPendingDebit &&  <Alert key= "info" variant= "info">Please hold on while we getting your debits!</Alert> }
                { DebitData && <DebitTable debitdata={ DebitData } /> }
            </div>

            <div id="api-display-card">
                { errorCredit &&  <p>An error occurred while retrieving the credit table data. </p> }
                { isPendingCredit && <Alert key= "info" variant= "info">Please hold on while we getting your credits!</Alert>}
                { CreditData && <CreditTable creditdata={ CreditData } /> }
            </div>
  </>


    )

}