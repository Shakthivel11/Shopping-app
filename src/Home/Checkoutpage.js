import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../redux/action";

var initialState = {
  firstname: "",
  lastname: "",
  phone: "",
  email: "",
  address: "",
  city: "",
  state: "",
  zipCode: "",
};

const contactRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = yup.object().shape({
  firstname: yup
    .string()
    .max(30, "Firstname should not exceed 30 characters")
    .required("Please enter firstname"),
  lastname: yup
    .string()
    .max(30, "Lastname should not exceed 30 characters")
    .required("Please enter lastname"),
  phone: yup
    .string()
    .matches(contactRegExp, "Phone number is not valid")
    .min(10, "too short")
    .max(10, "too long")
    .required("Please Enter the phone number"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Please Enter email address"),
  address: yup
    .string()
    .required("Please enter address")
    .max(100, "Address should not exceed 100 characters"),
  city: yup.string().required("Please enter city"),
  state: yup.string().required("Please enter state"),
  zipCode: yup.string().required("Please enter zipcode"),
});
function Checkoutpage() {
  const { cart, carttotalamount, orders } = useSelector((state) => state.data);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  return (
    <div>
      <Formik
        initialValues={initialState}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("values:", typeof values);
          dispatch(
            createOrder({
              ...values,
              cart: cart,
              carttotalamount: carttotalamount,
              status: "order placed successfully",
              orderPlacedOn: new Date(),
            })
          );

          carttotalamount === 0
            ? toast.error(
                "Sorry Order cant be placed because no items in cart",
                { autoClose: 1000 }
              )
            : toast.success("Order Placed Successfully", { autoClose: 1000 });
        }}
      >
        <div className="py-4">
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-lg-7">
                <div className="card">
                  <div className="card-header">
                    <h4 style={{ cursor: "pointer" }}>Basic Information</h4>
                  </div>
                  <Form>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group mb-3">
                            <p>
                              <b></b>
                              <Field
                                type="text"
                                name="firstname"
                                className="form-control input-field"
                                placeholder="FirstName"
                                style={{ borderColor: "violet" }}
                              />
                              <br />
                              <span>
                                <ErrorMessage
                                  name="firstname"
                                  className="errmessage"
                                >
                                  {(msg) => (
                                    <div style={{ color: "red" }}>{msg}</div>
                                  )}
                                </ErrorMessage>
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group mb-3">
                            <Field
                              type="text"
                              name="lastname"
                              className="form-control input-field"
                              placeholder="LastName"
                              style={{ borderColor: "violet" }}
                            />
                            <br />
                            <span>
                              <ErrorMessage
                                name="lastname"
                                className="errmessage"
                              >
                                {(msg) => (
                                  <div style={{ color: "red" }}>{msg}</div>
                                )}
                              </ErrorMessage>
                            </span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group mb-3">
                            <Field
                              type="text"
                              name="phone"
                              className="form-control input-field"
                              placeholder="Phone Number"
                              style={{ borderColor: "violet" }}
                            />
                            <br />
                            <span>
                              <ErrorMessage name="phone" className="errmessage">
                                {(msg) => (
                                  <div style={{ color: "red" }}>{msg}</div>
                                )}
                              </ErrorMessage>
                            </span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group mb-3">
                            <Field
                              type="email"
                              name="email"
                              className="form-control input-field"
                              placeholder="Email"
                              style={{ borderColor: "violet" }}
                            />
                            <br />
                            <span>
                              <ErrorMessage name="email" className="errmessage">
                                {(msg) => (
                                  <div style={{ color: "red" }}>{msg}</div>
                                )}
                              </ErrorMessage>
                            </span>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group mb-3">
                            <Field
                              as="textarea"
                              type="text"
                              name="address"
                              className="form-control input-field"
                              rows="3"
                              placeholder="Full Address"
                              style={{ borderColor: "violet" }}
                            />
                            <br />
                            <span>
                              <ErrorMessage
                                name="address"
                                className="errmessage"
                              >
                                {(msg) => (
                                  <div style={{ color: "red" }}>{msg}</div>
                                )}
                              </ErrorMessage>
                            </span>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group mb-3">
                            <Field
                              type="text"
                              name="city"
                              className="form-control input-field"
                              placeholder="City"
                              style={{ borderColor: "violet" }}
                            />
                            <br />
                            <span>
                              <ErrorMessage name="city" className="errmessage">
                                {(msg) => (
                                  <div style={{ color: "red" }}>{msg}</div>
                                )}
                              </ErrorMessage>
                            </span>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group mb-3">
                            <Field
                              type="text"
                              name="state"
                              className="form-control input-field"
                              placeholder="State"
                              style={{ borderColor: "violet" }}
                            />
                            <br />
                            <span>
                              <ErrorMessage name="state" className="errmessage">
                                {(msg) => (
                                  <div style={{ color: "red" }}>{msg}</div>
                                )}
                              </ErrorMessage>
                            </span>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group mb-3">
                            <p>
                              <Field
                                type="text"
                                name="zipCode"
                                className="form-control input-field"
                                placeholder="ZipCode"
                                style={{ borderColor: "violet" }}
                              />
                              <br />
                              <span>
                                <ErrorMessage
                                  name="zipCode"
                                  className="errmessage"
                                >
                                  {(msg) => (
                                    <div style={{ color: "red" }}>{msg}</div>
                                  )}
                                </ErrorMessage>
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group text-end">
                            <center>
                              {" "}
                              <button type="submit" className="btn btn-warning">
                                Place Order
                              </button>
                            </center>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Form>
                </div>
              </div>
              <div className="col-md-5 col-lg-5 product-detail">
                <table className="table lg table-bordered">
                  <thead>
                    <tr>
                      <th width="50%">Product</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item) => {
                      return (
                        <tr>
                          <td>{item.title}</td>
                          <td>${item.price}</td>
                          <td>{item.quantity}</td>
                          <td>${item.quantity * item.price}</td>
                        </tr>
                      );
                    })}
                    <tr>
                      <td colSpan="2" className="text-end fw-bold">
                        Grand Total
                      </td>
                      <td colSpan="2" className="text-end fw-bold">
                        ${carttotalamount}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div>
                  <button
                    className="btn btn-secondary mt-5"
                    onClick={() => navigate("/productpage")}
                  >
                    Go Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Formik>
      <ToastContainer />
    </div>
  );
}

export default Checkoutpage;
