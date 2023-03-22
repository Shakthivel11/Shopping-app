import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import "../Style/Product.scss";
import { useSelector } from "react-redux";

function NavbarComp() {
  const { cart, carttotalquantity } = useSelector((state) => state.data);
  const navigate = useNavigate();
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Products</Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Nav className="ms-auto">
              {cart.length === 0 ? (
                <Nav.Link
                  as={Link}
                  to="/login"
                  style={{ textDecoration: "none" }}
                >
                  <i className="fa fa-shopping-cart me-1"></i>
                  <span className="text">Cart({carttotalquantity})</span>
                </Nav.Link>
              ) : (
                <Nav.Link
                  as={Link}
                  to="/shoppingcartpage"
  
                >
                  <i className="fa fa-shopping-cart"></i>
                  <span className="text">Cart({carttotalquantity})</span>
                </Nav.Link>
              )}
            </Nav>
            <Navbar.Text>
              <Button
                variant="secondary"
                onClick={() => {
                  navigate("/");
                }}
              >
                Logout
              </Button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComp;
