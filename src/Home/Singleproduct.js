import React, { useEffect, useRef, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import "../Style/Singleproduct.scss";
import { ToastContainer,toast } from "react-toastify";
import { addtocart,getTotals } from "../redux/action";
const Singleproduct = () => {
  const [sliderIndex, setSliderIndex] = useState(1);
  const [width, setWidth] = useState(0);
  const [start, setStart] = useState(0);
  const [change, setChange] = useState(9);
  const { id } = useParams();
  console.log("Id in single", id);
  const { products } = useSelector((state) => state.data);
  var allproduct = products.filter((item) => (item.id == id ? true : false))[0];
  console.log("Single Product : ", allproduct);
  const navigate = useNavigate();
  const dispatch = useDispatch();


const addProduct=(product)=>{
  dispatch(addtocart(product));
  dispatch(getTotals())
};

  const plus = (n) => {
    setSliderIndex((prev) => prev + n);
    slideShow(sliderIndex + n);
  };

  const slideRef = useRef();
  const dragStart = (e) => {
    setStart(e.clientX);
  };

  const dragEnd = () => {
    if (change > 0) {
      slideRef.current.scrollLeft += width;
    } else {
      slideRef.current.scrollLeft -= width;
    }
  };

  const dragOver = (e) => {
    let touch = e.clientX;
    setChange(start - touch);
  };
  const slideShow = (n) => {
    if (n > allproduct.images.length) {
      setSliderIndex(1);
    }

    if (n < 1) {
      setSliderIndex(allproduct.images.length);
    }
  };

  const ShowingsingleProduct = () => {
    return (
      <>
        <div className="singleproductdetails">
          <div className="productimage">
            <div className="sildingimages">
              {allproduct.images.map((image, index) => (
                <div
                  key={index}
                  className="mySlides"
                  style={{
                    display: index + 1 === sliderIndex ? "block" : "none",
                  }}
                >
                  <img src={image} />
                </div>
              ))}
              <a href="#" className="prev" onClick={() => plus(-1)}>
                &#10094;
              </a>
              <a href="#" className="next" onClick={() => plus(1)}>
                &#10095;
              </a>
            </div>
            <div
              className="slider"
              draggable={true}
              ref={slideRef}
              onDragStart={dragStart}
              onDragOver={dragOver}
              onDragEnd={dragEnd}
            >
              {allproduct.images.map((image, index) => (
                <div
                  key={index}
                  className={`slider-box ${
                    index + 1 === sliderIndex && "active"
                  }`}
                  onClick={() => setSliderIndex(index + 1)}
                >
                  <img src={image} />
                </div>
              ))}
            </div>
          </div>
          <div className="details ">
            <strong>{allproduct.title}</strong>
            <p className="category">
              {allproduct.brand}-{allproduct.category}
            </p>
            <p className="price">
              $
              {Math.round(
                allproduct.price -
                  (allproduct.price * allproduct.discountPercentage) / 100
              )}{" "}
              <del>{allproduct.price}</del>
            </p>
            <p className="description">{allproduct.description}</p>
            <div className="offer">
              <i className="fa fas-solid fa-tag" />
              {allproduct.discountPercentage}% Discount
            </div>
            <div className="cartbuttons">
              <button
                className="btn btn-outline-dark px-4 py-2 add-cart"
                onClick={() => {
                  addProduct(allproduct);
                  console.log("all data products",allproduct)
                }}
              >
                Add to Cart
              </button>
              <button className="m-5 btn btn-dark px-4 py-2" onClick={()=>{
                navigate("/shoppingcartpage")

              }}>Go to cart</button>
          
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="container py-5">
      <div>
        <button
          className="btn btn-outline-dark gobackbutton"
          onClick={() => navigate("/productpage")}
        >
          Go back
        </button>
      </div>
      <div className="row py-3">
        <ShowingsingleProduct />
      </div>
    </div>
  );
};

export default Singleproduct;
