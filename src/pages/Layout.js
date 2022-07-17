import { Outlet, Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';

const Layout = () => {
  return (
    <>
      <nav>
        
      
        <Navbar.Brand >BillSplitter&nbsp;</Navbar.Brand>
            
    
        <Link to="/">Home&nbsp;&nbsp;</Link>
        
        <Link to="/">My Transactions&nbsp;&nbsp;</Link>
        
        <Link to="/Profile">My Groups&nbsp;</Link>
        
      </nav>

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