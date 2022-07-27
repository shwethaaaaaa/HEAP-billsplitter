import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




export default function MyGroupCards({mygroupsdata}){
    const MyGroups =  mygroupsdata.data.groups
    console.log(MyGroups)
    return(
         <>
             <Container className='mt-5'>
                {MyGroups.map((option) => (
                   
                    <Row className="ms-4" >
                        <Col className="mb-3" >
                            <Card style={{ width: '18rem' }} className='my-auto'>
                                        <Card.Img variant="top" src={require('./friendss.jpg')}/>
                                        <Card.Body>
                                            <Card.Title>{option.group_name}</Card.Title>
                                            <Card.Text>Trip Duration: {option.trip_duration}</Card.Text>
                                            <Card.Text>Group Members: {option.group_members}</Card.Text>
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


