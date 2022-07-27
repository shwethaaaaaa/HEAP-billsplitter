import useFetch from "./useFetch"
import { Navigate } from "react-router-dom";
import AddTransaction from "./CreateTransactionForm";

export default function CreateTransaction(alldata) {

    console.log(alldata)
    
    const payerdata =alldata.alldata[0]
    const owerdata = alldata.alldata[1]
    const transactiondata = alldata.alldata[2]

    console.log(payerdata)
    console.log(owerdata)
    console.log(transactiondata)

    const groupid = transactiondata.transactiondata.group_id
    const Transaction_API_URL = 'http://localhost:5003/transaction/'+ String(groupid);

    console.log(transactiondata.transactiondata)
    console.log(Transaction_API_URL)

    const post_input = { "payer_id":transactiondata.transactiondata.payer_id , "ower_id":transactiondata.transactiondata.ower_id ,"amount":transactiondata.transactiondata.amount, "payer":payerdata.data.user_name, "ower":owerdata.data.user_name , "Exchange_rate":transactiondata.transactiondata.Exchange_rate, "description":transactiondata.transactiondata.description , "group_id": transactiondata.transactiondata.group_id
     }


    console.log(post_input)
    
    const {
        data2, 
        isPending2, 
        error2
    } = useFetch(Transaction_API_URL, "POST", JSON.stringify(post_input));


    return(
        <>
                { error2 && <p>There is some error in adding transaction</p> }
                { isPending2 && <p>transaction Pending</p> }
                { data2 && <p>Sucessfully added!</p>}
        </>
    );
    
  }