import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function TextLinkExample() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">
          <img src="../assets/logo.jpg" height="50px" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>PT. Knitto Tekstil Indonesia</Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TextLinkExample;
