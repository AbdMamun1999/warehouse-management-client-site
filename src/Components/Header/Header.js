import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
  const [user] = useAuthState(auth)
  const navigate = useNavigate()

  const handleSignOut = () => {
    signOut(auth)
    navigate('/')
  }
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Organic Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Nav>
              {
                user && <>
                  <Nav.Link eventKey={1} as={Link} to="/manageItem">Manage Item</Nav.Link>
                  <Nav.Link eventKey={2} as={Link} to="/addItem">
                    Add Item
                  </Nav.Link>
                  <Nav.Link eventKey={2} as={Link} to="/myItem">
                   My Item
                  </Nav.Link>
                </>
              }
              {
                user ?
                  <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Sign Out</button>
                  :
                  <Nav.Link eventKey={3} as={Link} to={'/login'}>
                    Login
                  </Nav.Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;