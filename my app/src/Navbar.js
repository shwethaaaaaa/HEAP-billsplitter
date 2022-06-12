import Navbar from 'react-bootstrap/Navbar'

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
export default function Navbarr() {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                <Navbar.Brand href="#home">
                        <img
                        alt=""
                        src="/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        />{' '}
                    Bill Splitter
                </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        
                        <Nav.Link href="#link">My Groups</Nav.Link>
                        <Nav.Link href="#link">My Transactions</Nav.Link>
                        <Nav.Link href="#link">My Profile</Nav.Link>
                        <Nav.Link href="#link" style={{marginLeft:'700px', marginRight:'0px'}}>Login</Nav.Link>
                        
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
         </>
                
    );
  }
  



  