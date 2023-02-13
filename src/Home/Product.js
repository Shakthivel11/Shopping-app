import React, { useDebugValue, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadproductStart } from "../redux/action";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "../Style/Product.scss";
const Productpage = () => {
  const { products } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  console.log("Details", products);

  useEffect(() => {
    console.log("In useEffect");
    dispatch(loadproductStart());
  }, []);

  const navigate = useNavigate();
  return (
    <>
      <div className="something">
        <Container className="p-5">
          <Row>
            {products &&
              products.map((products, key) => (
                <Card style={{ width: "25rem" }} className="m-2 p-2" key={key}>
                  <Card.Img
                    src={products.thumbnail}
                    style={{ width: "23rem", height: "18rem" }}
                  />
                  <Card.Body>
                    <Card.Title>{products.title}</Card.Title>
                    <Card.Text>{products.description}</Card.Text>
                    <Card.Text>Price: ${products.price}</Card.Text>
                    <Card.Text>
                      Discount: {products.discountPercentage}
                    </Card.Text>
                    <Card.Text>
                      Rating:
                      <span className="fa fa-star checked m-1"></span>
                      <span className="fa fa-star checked m-1"></span>
                      <span className="fa fa-star checked m-1"></span>
                      <span className="fa fa-star checked m-1"></span>
                      <span className="fa fa-star m-1"></span>
                      {products.rating}
                    </Card.Text>
                    <Card.Text>Stock: {products.stock}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    {" "}
                    <Button variant="light" className="m-2 p-2 btn-outline-dark" onClick={()=>{
                      navigate("/addtocart")
                    }}>
                      Add to wishlist
                    </Button>
                    <Button variant="dark" className="m-2 p-2" onClick={()=>{

                      navigate(("/products/"+products.id))
                      
                    }}>
                      Buy now
                    </Button>
                  </Card.Footer>
                </Card>
              ))}
          </Row>
        </Container>
        
      </div>
    </>
  );
};

export default Productpage;
