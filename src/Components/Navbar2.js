import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

function MyNavbar() {
  return (
    <div>
    <Navbar bg="light" >
      <Navbar.Brand href="#">
        <img src="https://files.thesirona.com/site-images/original/253x72.png" alt="Logo" height="30" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        
   

        <Form inline className="ms-auto d-flex">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
       
        </Navbar.Collapse>
        
    </Navbar>
    <Navbar bg="light" >
    
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      
    <Nav className='mx-auto flex-wrap fs-6'>
        <Nav.Link href="#">SHOP ALL</Nav.Link>
        <Nav.Link href="#">PERIOD CARE</Nav.Link>
        <Nav.Link href="#">INTIMATE CARE</Nav.Link>
        <Nav.Link href="#">TOILET HYGIENE</Nav.Link>
        <Nav.Link href="#">HAIR REMOVAL</Nav.Link>
        <Nav.Link href="#">PERSONAL SAFETY</Nav.Link>
        <Nav.Link href="#">KITS</Nav.Link>
        <Nav.Link href="#">BLOG</Nav.Link>
      </Nav>

    
      </Navbar.Collapse>
      
  </Navbar>
  </div>
  );
}
export default MyNavbar;

