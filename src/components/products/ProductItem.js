import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { NumericFormat } from "react-number-format";
import { SET_CART } from "../../redux/action";
import Swal from "sweetalert2";

function ProductItem({ product }) {
  const dispatch = useDispatch();
  const image = "http://127.0.0.1:8000/";

  // Add the following line to get the 'cart' variable from the Redux store
  const cart = useSelector((state) => state.cart);

  const handleAddToCart = () => {
    const product_cart = cart.find((item) => item.product_id === product.id);

    if (product_cart) {
      product_cart.quantity++;
      const updatedCart = [...cart];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      dispatch({ type: SET_CART, payload: updatedCart });
      Swal.fire({
        icon: "success",
        title: "Đã thêm vào giỏ hàng!",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      let item = {
        product_id: product.id,
        quantity: 1,
        product: product,
      };

      // Tạo một bản sao mới của giỏ hàng để thêm sản phẩm mới
      const updatedCart = [...cart, item];

      //lưu vào local
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      // Cập nhật giỏ hàng với sản phẩm mới
      dispatch({ type: SET_CART, payload: updatedCart });
    }
  };
  return (
    <>
      <div className="product-box horizontal bg--white color-1 right-line bottom-line">
        <div className="product-box__img">
          <img
            src={image + product.img}
            alt="product"
            className="primary-image"
          />
          <img
            src={image + product.img}
            alt="product"
            className="secondary-image"
          />
        </div>
        <div className="product-box__content">
          <h3 className="product-box__title">
            {product.name}
          </h3>
          <div className="ratings">
            <i className="fa fa-star rated" />
            <i className="fa fa-star rated" />
            <i className="fa fa-star rated" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
          </div>
  
          <div className="product-box__price">
            <span className="sale-price">
              <NumericFormat
                style={{ color: "red" }}
                value={product.price}
                displayType="text"
                thousandSeparator={true}
                suffix=" VNĐ"
              />
            </span>
          </div>
        </div>
        <div className="product-box__action action-1">
          
            <button
              onClick={handleAddToCart}
              className="btn btn-outline-dark btn-square"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
              </svg>
            </button>
          
        </div>
      </div>
    </>
  );
}

export default ProductItem;
