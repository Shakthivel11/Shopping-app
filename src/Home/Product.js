import React, {useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadproductStart } from "../redux/action";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Filter from "./Filter";
import "../Style/Product.scss";
const Productpage = () => {
  const { products } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  console.log("Details", products);

  useEffect(() => {
    console.log("In useEffect");
    dispatch(loadproductStart());
  },[]);

  const navigate = useNavigate();
  var [displayList, setDisplayList] = useState(products);

  var category = [
    "All",
    ...Array.from(new Set(products.map((item) => item.category))),
  ];
  var [brand, setBrand] = useState([
    "All",
    ...Array.from(new Set(products.map((item) => item.brand))),
  ]);
  const [filterObj, setFilterObj] = useState({ Category: "", Brand: "" });
   console.log("fileterObj outside return :",filterObj)

  return (
    <>
    <div>
    <Container
        fluid
        className="filter-section mb-4 d-flex align-items-center justify-content-center"
      >
        <Row>
          <Col lg={3} xs={6} md={6} sm={6} className="column-contents">
            <h5 className="filter-heading">Select By Category:</h5>
          </Col>
          <Col lg={3} xs={6} md={6} sm={6} className="column-contents">
            <Filter
              filterList="Category"
              nameList={category}
              filter={filterObj}
              setFilter={setFilterObj}
              setBrand={setBrand}
              setDisplayList={setDisplayList}
            ></Filter>
          </Col>
          <Col lg={3} xs={6} md={6} sm={6} className="column-contents">
            <h5 className="filter-heading">Select By Brand:</h5>
          </Col>
          <Col lg={3} xs={6} md={6} sm={6} className="column-contents">
            <Filter
              filterList="Brand"
              nameList={[...brand]}
              filter={filterObj}
              setFilter={setFilterObj}
              setDisplayList={setDisplayList}
              setBrand={setBrand}
            ></Filter>
          </Col>
        </Row>
        
      </Container>
    </div>
      <div className="something">
        <Container className="p-5">
          <Row>
            {
              displayList.map((products, key) => (
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
