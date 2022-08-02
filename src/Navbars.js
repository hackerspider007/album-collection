import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

//This is Basic Styles Of NavBar 

function Navbars() {
    const style = {
        textDecoration: 'none',
        color: 'mistyrose',
        margin: '20px'
    }
    return (

        <Navbar bg="dark" variant="light">
            <Container>
                <Navbar.Brand ><Link to="/" style={style}>Home</Link></Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link><Link to="/album" style={style}>Album</Link></Nav.Link>
                    <Nav.Link><Link to="/newalbum" style={style}> +Add Album</Link></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Navbars;


