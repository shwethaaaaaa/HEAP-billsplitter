import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'

const Layout = ({useriddata}) => {

  console.log(useriddata)
  
  return (
    <>
      {
          <Navbar bg="dark" variant="dark">
          <Container>
          <Image
              src={require('./heapicon.jpg')}
              width="50"
              height="50"
              style = {{borderRadius:"30px", marginRight: "20px"}}
              className="d-inline-block align-top"
              alt="BillSplitter Logo"></Image>
            <Navbar.Brand href="#home">SplitSmart</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">My Groups</Nav.Link>
              <Nav.Link href={`MyTransaction?${useriddata}`}>My Transactions</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
       
      }
      
      
    

      <Outlet />
    </>
  )
};

export default Layout;





// <Navbar.Brand href="#home" >
//                 <img
//                 src="/components/BillSplitter_logo.jpg" 
//                 width="30"
//                 height="30"
//                 className="d-inline-block align-top"
//                 alt="billsplitter logo"
//                 />
//         </Navbar.Brand>

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';




// function BasicExample() {
//   return (
//     <Navbar expand="lg">
//       <Container>
     
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">My Transactions</Nav.Link>
//             <Nav.Link href="#link">My Profile</Nav.Link>


            
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default BasicExample;