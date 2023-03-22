import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

import { Link, useNavigate } from "react-router-dom";
import { addtocart, clearCart, decrementcartquality, deletetocart, getTotals } from "../redux/action";
import "../Style/Shoppingcart.scss"
const ShoppingCartPage = () => {
  const { cart, carttotalamount } = useSelector(
    (state) => state.data
  );
  console.log("In cart:", cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleRemoveFromCart = (product) => {
    dispatch(deletetocart(product));
    dispatch(getTotals());
  };

  const handleDecreaseCart = (product) => {
    dispatch(decrementcartquality(product));
    dispatch(getTotals());
    toast.error("Item deleted from cart",{autoClose:500});
  };

  const handleIncreaseQuantity = (product) => {
    dispatch(addtocart(product));
    dispatch(getTotals());
    toast.success("Item added to cart",{autoClose:500});
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    dispatch(getTotals());
  };

  return (
    
    <>
          <div className="cartcontainer" style={{cursor:"pointer"}}>
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <div className="emptycart">
            <p>Your cart is currently empty </p>
            <div className="startshopping">
              <Link to="/productpage">
              
                <span><span style={{fontSize:"30px"}}>&#x2190; </span>Start Shopping</span>
              </Link>
            </div>
          </div>
        ) : (
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
                        {cart.map((item) => {
                          return (
                            <tr>
                              <td width="15%">
                                <img
                                  src={item.thumbnail}
                                  height="100px"
                                  width="100px"
                                  alt="no image"
                                />
                              </td>
                              <td>
                                <h5 className="producttitles">{item.title}</h5>
                              </td>
                              <td className="product-titles">
                                {item.price}
                              </td>
                              <td width="15%">
                                <div className="input-group productquantity">
                                  <button
                                    onClick={() => handleDecreaseCart(item)}
                                  >
                                    -
                                  </button>
                                  <div className="count form-control text-center">
                                    {item.quantity}
                                  </div>
                                  <button
                                    onClick={() => handleIncreaseQuantity(item)}
                                  >
                                    +
                                  </button>
                                </div>
                              </td>
                              <td className="product-titles">
                                ${item.quantity * item.price}
                              </td>
                              <td width="10%">
                                <button
                                  className="btn btn-secondary"
                                  style={{ color: "black" }}
                                  onClick={() => handleRemoveFromCart(item)}
                                >
                                  x
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="cart-summary">
              <button
                className="btn btn-secondary clearcart"
                onClick={() => handleClearCart()}
              >
                Clear Cart
              </button>
              <div className="col-md-8"></div>
              <div className="col-md-4 float-end" style={{ width: "250px" }}>
                <div className="card card-body mt-3">
                  <h4>
                    Sub Total:&nbsp;
                    <span>${carttotalamount}</span>
                  </h4>
                  <center>
                    <button
                      className="btn btn-secondary checkout"
                      onClick={() => navigate("/checkoutpage")}
                    >
                      Check Out
                    </button>
                  </center>
                  <hr />
                  <Link to="/productpage" style={{textDecoration:"none"}}>
                  
                                 
                <span><span style={{fontSize:"30px"}}>&#x2190; </span>Continue Shopping</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
        <ToastContainer />
      </div>
    </>
  );
};

export default ShoppingCartPage;
