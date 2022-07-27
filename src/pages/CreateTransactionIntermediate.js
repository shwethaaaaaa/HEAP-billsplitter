import useFetch from "./useFetch"

import CreateTransaction from './CreateTransaction';
import { ContentCutOutlined } from "@mui/icons-material";

export default function CreateTransactionIntermediate(transactiondata) {

    // console.log(transactiondata)

    const payerid = transactiondata.transactiondata.payer_id
    const owerid = transactiondata.transactiondata.ower_id

    console.log(payerid)
    console.log(owerid)

    const Payer_API_URL = 'http://localhost:5007/get_user_by_user_id/' + String(payerid);
    const Ower_API_URL = 'http://localhost:5007/get_user_by_user_id/' + String(owerid);

    console.log(Payer_API_URL)

    const {
        data , 
        isPending1, 
        error1    
    } = useFetch(Payer_API_URL, "GET");


    console.log(Ower_API_URL)
    const {
        data: owerdata, 
        isPending2, 
        error2   
    } = useFetch(Ower_API_URL, "GET");

    return(

        <>

        { error1 && error2 && <p>There is some error in adding transaction</p> }
        { isPending1 && isPending2 && <p>transaction Pending</p> }
        {data && owerdata && <CreateTransaction alldata ={ [data,owerdata,transactiondata] }/> }

        </>
    )

}
