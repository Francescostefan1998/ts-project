import {
    Navbar,
    Nav,
    Button,
    NavDropdown,
    Form,
    FormControl,
  } from 'react-bootstrap'
  import { Link } from "react-router-dom"
  
  const MyNavbar = () => (
    <Navbar bg="dark" variant="dark" expand="lg">
          <Link to={"/"}>Home</Link>
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          
        </Nav>
        <Form className="inline">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
  
  export default MyNavbar
  