import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Offcanvas from 'react-bootstrap/Offcanvas';

function Header() {
  return (
    <>
        <Navbar  className="bg-body-tertiary mb-3 toppage2" expand="lg" >
          <Container fluid>
            <Navbar.Brand href="#" style={{marginLeft:'5%',fontWeight:'bold',color:'brown',fontSize:'xx-large'}}>Collers</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav"
            >

                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1"  style={{color:'brown',fontWeight:'bold'}}>Products</Nav.Link>
                  <Nav.Link href="#action2" style={{color:'brown',fontWeight:'bold'}}>Solutions</Nav.Link>
                  <Nav.Link href="#action3" style={{color:'brown',fontWeight:'bold'}}>Pricing</Nav.Link>
                  <Nav.Link href="#action4" style={{color:'brown',fontWeight:'bold'}}>Resources</Nav.Link>
                  <Nav.Link href="#action5" style={{color:'brown',fontWeight:'bold'}}>Log In</Nav.Link>
                  
                </Nav>
                <Form className="d-flex" style={{marginRight:'3%'}}>
                  <Button variant="outline-success" style={{color:'brown',borderColor:'brown',fontWeight:'bold'}}>Sign up now</Button>
                </Form>

            </Navbar.Collapse>
          </Container>
        </Navbar>
    </>
  );
}

export default Header;