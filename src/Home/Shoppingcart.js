

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

import { Link, useNavigate } from "react-router-dom";
// import {
//   deleteFromCart,
//   decrementCartQuantity,
//   addToCart,
//   clearCart,
//   getTotals,
// } from "../../../redux/actions/actions";
// import "./CartPage.scss";
const CartPage = () => {
//   const { cart, cartTotalAmount, products } = useSelector(
//     (state) => state.productdata
//   );
  // console.log("in cart:", cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getTotals());
  // }, [cart, dispatch]);

//   const handleRemoveFromCart = (product) => {
//     dispatch(deleteFromCart(product));
//     dispatch(getTotals());
//   };

//   const handleDecreaseCart = (product) => {
//     dispatch(decrementCartQuantity(product));
//     dispatch(getTotals());
//     toast.error("item deleted from cart",{autoClose:500});
//   };

//   const handleIncreaseQuantity = (product) => {
//     dispatch(addToCart(product));
//     dispatch(getTotals());
//     toast.success("item added to cart",{autoClose:500});
//   };

//   const handleClearCart = () => {
//     dispatch(clearCart());
//     dispatch(getTotals());
//   };

  return (
    <>
      <div className="cart-container" style={{cursor:"pointer"}}>
        <h2>Shopping Cart &#128512;</h2>
        {/* { ( */}
          <div className="cart-empty">
            <p>Your cart is currently empty </p>
            <div className="start-shopping">
              <Link to="/products">
                {/* <i class="bi bi-arrow-left"></i> */}
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-arrow-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                  />
                </svg> */}
                <span>Start Shopping</span>
              </Link>
            </div>
          </div>
    
          <div style={{ cursor: "pointer" }}>
            <div className="container py-4">
              <div className="row">
                <div className="col-md-12">
                  <div className="table-responsive">
                    <table className="table ">
                      <thead>
                        <tr>
                          <th>Image</th>
                          <th>Product</th>
                          <th className="text-center">Price</th>
                          <th className="text-center">Quantity</th>
                          <th className="text-center">Total</th>
                          <th>Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                       
                          return (
                            <tr>
                              <td width="15%">
                                <img
                                //   src={item.images}
                                  height="100px"
                                  width="100px"
                                />
                              </td>
                              <td>
                                <h5 className="product-titles">
                                    {/* {item.title} */}
                                    </h5>
                              </td>
                              <td width="15%" className="product-titles">
                                {/* {item.price} */}
                              </td>
                              <td width="15%">
                                <div className="input-group cart-product-quantity">
                                  <button
                                    // onClick={() => handleDecreaseCart(item)}
                                  >
                                    -
                                  </button>
                                  <div className="count form-control text-center">
                                    {/* {item.quantity} */}
                                  </div>
                                  <button
                                    // onClick={() => handleIncreaseQuantity(item)}
                                  >
                                    +
                                  </button>
                                </div>
                              </td>
                              <td className="15% product-titles">
                                {/* ${item.quantity * item.price} */}
                              </td>
                              <td width="10%">
                                <button
                                  className="btn btn-secondary"
                                  style={{ color: "black" }}
                                //   onClick={() => handleRemoveFromCart(item)}
                                >
                                  x
                                </button>
                              </td>
                            </tr>
                          );
                       
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="cart-summary">
              <button
                className="btn btn-secondary clear-cart"
                // onClick={() => handleClearCart()}
              >
                Clear Cart
              </button>
              <div className="col-md-8"></div>
              <div className="col-md-4 float-end" style={{ width: "250px" }}>
                <div className="card card-body mt-3">
                  <h4>
                    Sub Total:&nbsp;
                    {/* <span>${cartTotalAmount}</span> */}
                  </h4>
                  <center>
                    <button
                      className="btn btn-secondary check-out"
                      onClick={() => navigate("/checkout1")}
                    >
                      Check Out
                    </button>
                  </center>
                  <hr />
                  <Link to="/products" style={{textDecoration:"none"}}>
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-arrow-left"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                      />
                    </svg> */}
                    <span>Continue Shopping</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        {/* )} */}
        <ToastContainer />
      </div>
    </>
  );
};

export default CartPage;
