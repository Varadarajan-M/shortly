import React from 'react';
import { Navbar, Container, Nav, Button, NavDropdown } from 'react-bootstrap';
function NavBar() {
	return (
		<Navbar expand='lg'>
			<Container className='p-3' fluid>
				<Navbar.Brand>Shortly</Navbar.Brand>
				<Navbar.Toggle aria-controls='navbar' />
				<Navbar.Collapse id='navbar'>
					<Nav id='navbar' className='ms-lg-4'>
						<Nav.Link>Features</Nav.Link>
						<Nav.Link>Pricing</Nav.Link>
						<Nav.Link>Resources</Nav.Link>
					</Nav>
					<NavDropdown.Divider className='navigation-divider' />
					<Nav className='action-buttons'>
						<Nav.Link>
							<Button className='auth-btns login'>Login</Button>
						</Nav.Link>

						<Nav.Link>
							<Button className='auth-btns signup'>
								Sign Up
							</Button>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBar;
