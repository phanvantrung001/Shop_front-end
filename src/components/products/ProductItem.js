import React from "react";
import { Link } from "react-router-dom";

function ProductItem({ product }) {

  // const dispatch = useDispatch();
  const image = "http://127.0.0.1:8000/";

  // const handleAddToCart = () => {
  //   // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
  //   //phải là mãng để có thể sử dụng find()
  //   const product_cart = cart.find((item) => item.product_id === product.id);

  //   if (product_cart) {
  //     // tồn tại => +1
  //     product_cart.quantity++;

  //     // Tạo một bản sao mới của giỏ hàng để cập nhật thông tin sản phẩm
  //     const updatedCart = [...cart];

  //     //lưu vào local
  //     localStorage.setItem("cart", JSON.stringify(updatedCart));
  //     // Cập nhật lại thông tin sản phẩm trong giỏ hàng
  //     dispatch({ type: SET_CART, payload: updatedCart });
  //   } else {
  //     // Nếu sản phẩm chưa có trong giỏ hàng, thêm mới
  //     let item = {
  //       product_id: product.id,
  //       quantity: 1,
  //       product: product,
  //     };

  //     // Tạo một bản sao mới của giỏ hàng để thêm sản phẩm mới
  //     const updatedCart = [...cart, item];

  //     //lưu vào local
  //     localStorage.setItem("cart", JSON.stringify(updatedCart));
  //     // Cập nhật giỏ hàng với sản phẩm mới
  //     dispatch({ type: SET_CART, payload: updatedCart });

  //   }
  // };
  return (
    <>
      <div className="product-box horizontal bg--white color-1 right-line bottom-line col-4">
                  <div className="product-box__img">
                    <img
                      src={image + product.img} 
                      alt="product"
                      className="primary-image"
                    />
                    <img
                      src="assets/img/products/electronics-3-250x278.jpg"
                      alt="product"
                      className="secondary-image"
                    />
                  </div>
                  <div className="product-box__content">
                    <h3 className="product-box__title">
                      <a href="single-product.html">Integer eget augue</a>
                    </h3>
                    <div className="ratings">
                      <i className="fa fa-star rated" />
                      <i className="fa fa-star rated" />
                      <i className="fa fa-star rated" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                    <div className="product-box__price">
                      <span className="sale-price">$100.00</span>
                    </div>
                  </div>
                  <div className="product-box__action action-1">
                    <a
                      href="cart.html"
                      className="add-to-cart"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Add to cart"
                    >
                      <i className="fa fa-shopping-bag" />
                    </a>
                  </div>
                </div>
    </>
  );
}

export default ProductItem;
