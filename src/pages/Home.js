import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Outlet, Link } from "react-router-dom";


//need to use map function to create a card for each group
export default function Home(){
    const groups = []; // for all groups the person is part of
    return(
        <>
            <Container className='mt-5'>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Trip Name 1</Card.Title>
                            <Card.Text>
                                21st June 2022 - 21st July 2022
                            </Card.Text>
                            <Link to="/Group"><Button variant="primary">View Group</Button></Link>
                            <Button variant="primary">End Trip</Button>
                        </Card.Body>
                        </Card>
                        
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Trip Name</Card.Title>
                            <Card.Text>
                                21st June 2022 - 21st July 2022
                            </Card.Text>
                            <Button variant="primary">End Trip</Button>
                        </Card.Body>
                        </Card>
                        
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Trip Name</Card.Title>
                            <Card.Text>
                                21st June 2022 - 21st July 2022
                            </Card.Text>
                            <Button variant="primary">End Trip</Button>
                        </Card.Body>
                        </Card>
                        
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Trip Name</Card.Title>
                            <Card.Text>
                                21st June 2022 - 21st July 2022
                            </Card.Text>
                            <Button variant="primary">End Trip</Button>
                        </Card.Body>
                        </Card>
                        
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Trip Name</Card.Title>
                            <Card.Text>
                                21st June 2022 - 21st July 2022
                            </Card.Text>
                            <Button variant="primary">End Trip</Button>
                        </Card.Body>
                        </Card>
                        
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Trip Name</Card.Title>
                            <Card.Text>
                                21st June 2022 - 21st July 2022
                            </Card.Text>
                            <Button variant="primary">End Trip</Button>
                        </Card.Body>
                        </Card>
                        
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Trip Name</Card.Title>
                            <Card.Text>
                                21st June 2022 - 21st July 2022
                            </Card.Text>
                            <Button variant="primary">End Trip</Button>
                        </Card.Body>
                        </Card>
                        
                    </Col>
                </Row>
            </Container>
        </>

    );
}