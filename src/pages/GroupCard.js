import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import useFetch from './useFetch';
import axios from 'axios';
import React from 'react';




export default function MyGroupCards({mygroupsdata}){
    const MyGroups =  mygroupsdata.data.groups
    console.log(MyGroups)

    for (const group of MyGroups){
        const trip_location = group.group_name
        const Unsplash_API_URL = 'https://api.unsplash.com/search/photos?client_id=Tnkm6qLI-aFFmxeB_YxL_lZfMwTNqX4W9T7JhYjqHfg&query=' + trip_location + '&orientation=landscape'
      
            axios.get(Unsplash_API_URL)
              .then(res => {
                
                console.log(res.data.results[0].urls.small)
                const small_image_url = res.data.results[0].urls.small;
                group['image_url'] = small_image_url
                console.log(group)
                
              })
            
          
        // const small_image_url = unsplashdata.results[0].urls.small
        // group['image_url'] = small_image_url
        // console.log(group)
    }

    console.log(MyGroups)
    return(
         <>
             <Container className='mt-5'>
                {MyGroups.map((option) => (
                    <Row className="ms-4" >
                        <Col className="mb-3" >
                            <Card style={{ width: '18rem' }} className='my-auto'>
                                        <Card.Img variant="top" src= {option.image_url}/>
                                        <Card.Body>
                                            <Card.Title>{option.group_name}</Card.Title>
                                            <Card.Text>Trip Duration: <b>{option.trip_duration}</b></Card.Text>
                                            <Card.Text>Group Members: <b>{option.group_members}</b></Card.Text>
                                            <Button href = {`./Group?${option.group_name}?${option.group_id}?${option.trip_duration}`} variant="primary">View Group</Button>
                                        </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                   
                   
                ))}
                <Row className="mt-3">
                <Button href = "./CreateGroup"  variant="dark">Create New Group</Button>
                </Row>
 
            </Container>

         </>
     
    )
}


