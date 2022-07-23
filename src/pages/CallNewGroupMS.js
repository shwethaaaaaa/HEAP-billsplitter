import useFetch from "./useFetch"

export default function CallNewGroupMS(groupdata) {
    
    const Group_API_URL = 'http://192.168.68.103:5002/group';
    console.log(groupdata.groupdata)
    const post_input = { "group_name":groupdata.groupdata.group_name , "group_members": groupdata.groupdata.group_members,"owner_id":groupdata.groupdata.owner_id, "user_ids": groupdata.groupdata.user_ids, "home_currency": groupdata.groupdata.home_currency, "trip_duration":groupdata.groupdata.trip_duration}
    console.log(post_input)
    const {
        data2, 
        isPending2, 
        error2
    } = useFetch(Group_API_URL, "POST", JSON.stringify(post_input));


    return(
        <>
                { error2 && <p>There is some error in fetching users</p> }
                { isPending2 && <p>users Pending</p> }
                { data2 && <p>successfully added</p>  }
        </>
    );
    
  }