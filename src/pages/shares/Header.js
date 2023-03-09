import React, { useContext } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user)
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand ><Link to='/'>Your Room</Link> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            user

                            {user ? <Link onClick={logOut}> <BiLogOut /> Signout</Link>
                                :
                                <>
                                    <Link className='me-2' to='/login'>Login</Link>
                                    <Link to='/signup'>Sign up</Link>
                                </>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;