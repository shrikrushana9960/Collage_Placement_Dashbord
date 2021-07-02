
import React from "react";

// reactstrap components
import { Container, Nav, NavItem, NavLink } from "reactstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <Nav>
          <NavItem>
            <NavLink href="http://www.alardinstitutes.com/About-Us">crack developer</NavLink>
          </NavItem>
        </Nav>
        <div className="copyright">
          © {new Date().getFullYear()} made with{" "}
          <i className="tim-icons icon-heart-2" /> by{" "}
          <a href="http://www.alardinstitutes.com/About-Us" target="_blank">
            Alard Collage of enginnering
          </a>{" "}
          
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
