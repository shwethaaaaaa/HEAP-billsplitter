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




export default function CallingLogin({userdata}){
    const email = userdata[0]
    const password = userdata[1]

    console.log(email)
    console.log(password)
    

        const User_API_URL = `http://localhost:5007/user_login/${email}/${password}`

        const {
            data, 
            isPendingUser, 
            errorUser
        } = useFetch(User_API_URL, "GET");

        const another_data = data
        console.log("reached here!")
        console.log(data)


       

        // if (data.code == 201){
        // const user_id = data.user_id
        // console.log(user_id);
    
        // window.location.replace(`/Home${user_id}`);

        // }
        // const UserID = createContext();
    return(

         <>
                <div id="api-display-card">
                                { errorUser &&  <p>An error occurred while retrieving the unsplash data. </p> }
                                { isPendingUser && <p>An error occurred while retrieving the unsplash data. </p> }
                                { data && <Navigate to={{pathname: `/?${data.user_id}`}}/> }
                                { another_data && <Layout useriddata = {data.user_id} /> }
                               
                 </div>
            
  

         </>
     
    )

}

// export {UserID};


