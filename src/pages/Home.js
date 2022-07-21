import Button from '@mui/material/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MyGroupCards from './GroupCard';
import useFetch from './useFetch';
import { Outlet, Link } from "react-router-dom";


//need to use map function to create a card for each group
export default function Home(){
    const Group_API_URL = 'http://localhost:5002/get_groups_by_user_id/7' 

    const {
        data: MyGroupsData, 
        isPending, 
        error
    } = useFetch(Group_API_URL, "GET");
    

    return(
        <>

            <div id="api-display-card">
                { error &&  <p>An error occurred while retrieving the data. </p> }
                { isPending && <p>An error occurred while retrieving the data. </p> }
                { MyGroupsData && <MyGroupCards mygroupsdata={ MyGroupsData} /> }
            </div>
           

        </>

    );
}