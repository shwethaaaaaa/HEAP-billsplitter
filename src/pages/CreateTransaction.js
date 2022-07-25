import useFetch from "./useFetch"

export default function CreateTransaction(alldata) {

    console.log(alldata)
    
    const payerdata =alldata.alldata[0]
    const owerdata = alldata.alldata[1]
    const transactiondata = alldata.alldata[2]

    console.log(payerdata)
    console.log(owerdata)
    console.log(transactiondata)

    const groupid = transactiondata.transactiondata.group_id
    const Transaction_API_URL = 'http://192.168.18.28:5003/transaction/'+ String(groupid);

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
                { data2 && <p>successfully added</p>  }
        </>
    );
    
  }