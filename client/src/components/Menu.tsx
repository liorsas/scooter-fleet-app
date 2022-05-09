import React from 'react'
import {  Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link, Outlet} from 'react-router-dom'




function Menu() {
  return (
    <div className='main-menu' >
 <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Scooters Management Fleet</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/menu">Scooters</Nav.Link>
      <Nav.Link as={Link} to="/menu/park">Parking Spots</Nav.Link>
        <Nav.Link as={Link} to="/menu/users">Users</Nav.Link>
         <Nav.Link as={Link} to="/menu/fail">Failures History</Nav.Link>
      
    </Nav>
    </Container>
  </Navbar>

  <Outlet/>


    </div>
  )
}

export default Menu