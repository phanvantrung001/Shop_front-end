import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LayoutMaster from "../layouts/LayoutMaster";
import { SET_CART } from "../redux/action";
import { Link, useNavigate, useParams } from "react-router-dom";
import { NumericFormat } from "react-number-format";
import Customer from "../models/Customer";

function Carts(props) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [cartTotal, setCartTotal] = useState(0);
  const [isRemoving, setIsRemoving] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const image = "http://127.0.0.1:8000/";

  useEffect(() => {
    let total = 0;
    cart.forEach((cartItem) => {
      total += cartItem.product.price * cartItem.quantity;
    });
    setCartTotal(total);
  }, [cart]);

  const handleQuantityChange = (e) => {
    const id = e.target.id;
    const qty = e.target.value;
    const newCart = [...cart];
    newCart.map((cartItem) => {
      if (cartItem.product_id == id) {
        cartItem.quantity = qty;
        localStorage.setItem("cart", JSON.stringify(newCart));
          dispatch({
            type: SET_CART,
            payload: newCart,
          });
      }})
  };
  const handleRemove = (index) => {
    const confirmDelete = window.confirm("Bạn có chắc muốn xóa sản phẩm này?");

    if (confirmDelete) {
      const newCart = [...cart];
      newCart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(newCart));
      dispatch({
        type: SET_CART,
        payload: newCart,
      });
      setIsRemoving(true);
      alert("Sản phẩm đã được xóa thành công!");
    }
  };
  const handleCheckout = () => {
    let customer = Customer.getCookie("customer");
    customer = customer ? JSON.parse(customer) : "";

    if (!customer) {
      alert("Bạn cần đăng nhập để thanh toán đơn hàng của bạn !");
      navigate("/login");
    } else {
      localStorage.setItem("cart", JSON.stringify(cart));
      dispatch({ type: SET_CART, payload: cart });
      navigate("/checkout");
    }
  };

  return (
    <LayoutMaster>
      <>
        <div className="main-content-wrapper">
          <div className="cart-area pt--40 pb--80 pt-sm--30 pb-sm--60">
            <div className="container">
              <div className="cart-wrapper bg--white mb--80 mb-sm--60">
                <div className="row">
                  <div className="col-12">
                    {/* Cart Area Start */}
                    <form action="#" className="form form--cart">
                      <div className="cart-table table-content table-responsive">
                        <table className="table mb--30">
                          <thead>
                            <tr>
                              <th>remove</th>
                              <th>Images</th>
                              <th>Product</th>
                              <th>Unit Price</th>
                              <th>Quantity</th>
                              <th>Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            {cart.map((CartItem, index) => (
                              <tr key={index}>
                                <td>
                                  <button
                                    onClick={() => handleRemove(index)}
                                    className="btn btn-sm btn-danger"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      fill="currentColor"
                                      class="bi bi-trash"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                      <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                    </svg>
                                  </button>
                                </td>
                                <td>
                                  <a href="single-product.html">
                                    <img
                                      src={image + CartItem.product.img}
                                      alt="product"
                                    />
                                  </a>
                                </td>
                                <td className="wide-column">
                                  <h3>
                                    <a href="single-product.html">
                                      {CartItem.product.name}
                                    </a>
                                  </h3>
                                </td>
                                <td className="cart-product-price">
                                  <NumericFormat
                                    value={CartItem.product.price}
                                    allowLeadingZeros
                                    thousandSeparator="."
                                    decimalSeparator=","
                                    displayType="text"
                                  />{" "}
                                  VND
                                </td>
                                <td>
                                  <div className="quantity">
                                    <input
                                      type="number"
                                      className="quantity-input"
                                      name="qty"
                                      id={ CartItem.product_id }
                                      defaultValue={CartItem.quantity}
                                      onChange={handleQuantityChange}
                                    />
                                  </div>
                                </td>
                                <td className="cart-product-price">
                                  <NumericFormat
                                    value={
                                      CartItem.quantity * CartItem.product.price
                                    }
                                    allowLeadingZeros
                                    thousandSeparator="."
                                    decimalSeparator=","
                                    displayType="text"
                                  />
                                  VND
                                </td>
                              </tr>
                            ))}
                            ;
                          </tbody>
                        </table>
                      </div>
                      <div className="row pb--30">
                        <div className="col-12">
                          <div className="apply-coupon-wrapper">
                            <div className="form__group d-flex justify-content-between flex-sm-row flex-column">
                              <input
                                type="text"
                                name="coupon"
                                id="coupon"
                                className="form__input"
                                placeholder="Coupon Code"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-12 text-md-end">
                          <div className="cart-btn-group"></div>
                        </div>
                      </div>
                    </form>
                    {/* Cart Area End */}
                  </div>
                </div>
              </div>
              <div className="cart-page-total-wrapper">
                <div className="row justify-content-end">
                  <div className="col-xl-6 col-lg-8 col-md-10">
                    <div className="cart-page-total bg--white">
                      <h2>Cart Totals</h2>
                      <div className="cart-calculator-table table-content table-responsive">
                        <table className="table">
                          <tbody>
                            <tr className="cart-subtotal">
                              <th>Subtotal</th>
                              <td>
                                <span className="price-ammount">
                                <NumericFormat
                                    value={
                                      cartTotal
                                    }
                                    allowLeadingZeros
                                    thousandSeparator="."
                                    decimalSeparator=","
                                    displayType="text"
                                  />
                                  VND
                                </span>
                              </td>
                            </tr>
                            <tr className="shipping">
                              <th>Subtotal</th>
                              <td>
                                Flat Rate:{" "}
                                <span className="price-ammount">5000</span>
                                <a href="#" className="expand-calculator">
                                  Calculate Shipping
                                </a>
                                <form
                                  action="#"
                                  id="shipping-calculator"
                                  className="form shipping-form hide-in-default"
                                >
                                  <input
                                    type="text"
                                    name="shipping_state"
                                    id="shipping_state"
                                    className="form__input form__input--2"
                                    placeholder="State / Country"
                                  />
                                  <input
                                    type="text"
                                    name="shipping_zip"
                                    id="shipping_zip"
                                    className="form__input form__input--2"
                                    placeholder="Postcode / Zip"
                                  />
                                  <button
                                    type="submit"
                                    className="btn btn-5 btn-style-1 color-1"
                                  >
                                    Update Totals
                                  </button>
                                </form>
                              </td>
                            </tr>
                            <tr className="cart-total">
                              <th>TOTAL</th>
                              <td>
                                <span className="price-ammount">
                                <NumericFormat
                                    value={
                                      cartTotal + 5000
                                    }
                                    allowLeadingZeros
                                    thousandSeparator="."
                                    decimalSeparator=","
                                    displayType="text"
                                  />
                                  VND
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <button
                        onClick={handleCheckout}
                        href=""
                        className="btn btn-block btn-primary font-weight-bold my-3 py-3"
                      >
                        Proceed To Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </LayoutMaster>
  );
}

export default Carts;
