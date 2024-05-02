import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function DFooter() {
  const year = new Date().getFullYear();

  return (
    <div id="footer">
      <footer>
        <Container fluid="md">
          <Row>
            <Col>
              <p>
                The Internet Computer's largest digital marketplace for crypto
                collectibles and non-fungible tokens (NFTs). Buy, sell, and
                discover exclusive digital items.
              </p>
            </Col>
            <Col>
              <p>Copyright ⓒ {year}</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}
const Footer = () => {
  return (
    //bg-dark text-light py-4
    <footer className=" app-root-1 ">
      <hr/>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>About Us</h3>
            <p>Your premier marketplace for crypto collectibles and NFTs on the Internet Computer.</p>
          </div>

          <div className="col-md-4">
            <h3>Quick Links</h3>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/marketplace">Marketplace</a></li>
              <li><a href="/discover">Discover</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className="col-md-4">
            <h3>Contact Us</h3>
            <p>Email: info@example.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        <p>&copy; 2024 AvaxGod. All rights reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;
