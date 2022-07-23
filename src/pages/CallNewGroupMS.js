import useFetch from "./useFetch"

export default function CallNewGroupMS(groupdata) {
    
    const Group_API_URL = 'http://192.168.68.103:5002/group';
    console.log(groupdata)
    const post_input = { group_name:groupdata.groupname , group_members: groupdata.groupmembers, owner_id:groupdata.groupadmin, user_ids: groupdata.ownerids, home_currency: groupdata.currency, trip_duration:groupdata.tripduration}

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