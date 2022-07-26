import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Home from './Home';
import useFetch from './useFetch';
import { Navigate } from "react-router-dom";
import MyTransaction from './MyTransaction';
import {createContext} from "react";
import Layout from './Layout';
import { useEffect } from 'react';




export default function CallingLogin({userdata,myfunction}){
    const email = userdata[0]
    const password = userdata[1]
    const useriddata = userdata[2]

    const settinguserid = myfunction
    
    console.log(email)
    console.log(password)
    

        // const User_API_URL = `http:///192.168.68.103:5007/user_login/${email}/${password}`
        const User_API_URL = `http://192.168.68.103:5007/user_login/` + email + "/" + password

        // const {
        //     data, 
        //     isPendingUser, 
        //     errorUser
        // } = useFetch(User_API_URL, "GET");

        // const another_data = data
        const data = {"user_id":"1"}
        console.log("reached here!")
        console.log(data)
        myfunction(data.user_id)

        useEffect(() => {
            if (data){
                // settinguserid(data.user_id)
                console.log(settinguserid)
                console.log(data.user_id)
                console.log(useriddata)

            }
           
            

          }, [data]);
        
          


      
      
      
        // const user_id = data.user_id
        // myfunction(user_id)


        // if (data.code == 201){
        // console.log(user_id);
    
        // window.location.replace(`/Home${user_id}`);

        // }
        // const UserID = createContext();
    return(

         <>
                <div id="api-display-card">
                                {/* { errorUser &&  <p>An error occurred while retrieving the unsplash data. </p> }
                                { isPendingUser && <p>An error occurred while retrieving the unsplash data. </p> } */}
                                { data && <Navigate to={{pathname: `/`}}/> }
                                {/* { another_data && myfunction(data.user_id) } */}
                               
                 </div>
            
  

         </>
     
    )

}

// export {UserID};


