import React, { useEffect, useState } from "react";
import Product from "../../models/Product";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { NumericFormat } from "react-number-format";

function YourOrder(props) {
  const [products, setProducts] = useState([]);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    Product.all()
      .then((res) => {
        setProducts(res);
        console.log(res[0].name);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleRemove = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    dispatch({
      type: "SET_CART",
      payload: newCart,
    });
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  return (
    <div className="col-lg-4">
      <h5 className="section-title position-relative text-uppercase mb-3">
        <span className="bg-secondary pr-3">Order Total</span>
      </h5>
      <div className="bg-light p-30 mb-5">
        <div className="border-bottom">
          <h6 className="mb-3">Products</h6>

          {cart.map((cartItem, index) => {
            const product = products.find((p) => p.id === cartItem.product.id);
            if (product) {
              return (
                <div key={index} className="d-flex justify-content-between">
                  <p>{product.name}</p>
                  <p>
                    {" "}
                    <NumericFormat
                      value={product.price}
                      displayType="text"
                      thousandSeparator={true}
                      suffix=" VNĐ"
                    />
                  </p>
                  <p>{cartItem.quantity}</p>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
        <div className="border-bottom pt-3 pb-2">
          <div className="d-flex justify-content-between mb-3">
            <h6>Subtotal</h6>
            <h6>5.000 VND</h6>
          </div>
          <div className="d-flex justify-content-between">
            <h6 className="font-weight-medium">Shipping</h6>
            <h6 className="font-weight-medium">15.000 VND</h6>
          </div>
        </div>
        <div className="pt-2">
          <div className="d-flex justify-content-between mt-2">
            <h5>Total</h5>
            <h5>
              {" "}
              <NumericFormat
                value={totalPrice + 20000}
                displayType="text"
                thousandSeparator={true}
                suffix=" VNĐ"
              />
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YourOrder;
