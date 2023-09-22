// import React, { useEffect, useState } from "react";
// import LayoutMaster from "../layouts/LayoutMaster";
// import Product from "../models/Product";
// import { Link, useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { SET_CART } from "../redux/action";
// import { NumericFormat } from "react-number-format";

// function Detail(props) {
//   const cart = useSelector((state) => state.cart);
//   const dispatch = useDispatch();
//   const image = "http://127.0.0.1:8000/";

//   const { id } = useParams();
//   const [count, setCount] = useState(1);
//   const [product, setProduct] = useState({
//     name: "",
//     price: "",
//     description: "",
//     image: "",
//   });
//   const handleAddToCart = () => {
//     let item = {
//       product_id: id,
//       quantity: count,
//       product: product,
//     };
//     let update = false;
//     for (let index = 0; index < cart.length; index++) {
//       const element = cart[index];
//       if (element.product_id == id) {
//         update = true;
//         cart[index].quantity = cart[index].quantity + count;
//       }
//     }
//     if (update) {
//       var newCart = [...cart];
//     } else {
//       var newCart = [...cart, item];
//     }
//     localStorage.setItem("cart", JSON.stringify(newCart));
//     dispatch({ type: SET_CART, payload: newCart });
//   };

//   useEffect(() => {
//     Product.find(id)
//       .then((data) => {
//         // console.log(data);
//         setProduct(data);
//       })
//       .catch((err) => {
//         throw err;
//       });
//   }, [id]);
//   return (
//     <LayoutMaster>
//       <>
//       <section className="single-product bg--white pt--80 pb--80 pt-sm--60 pb-sm--60">
//         <div className="row">
//           <div className="col-lg-6">
//             {/* Tab Content Start */}
//             <div
//               className="tab-content product-thumb-large"
//               id="myTabContent-3"
//             >
//               <div className="tab-pane fade show active" id="product-large-one">
//                 <div className="single-product__img easyzoom">
//                   <img
//                     src="assets/img/products/furniture-13.jpg"
//                     alt="product"
//                   />
//                   <a
//                     className="popup-btn"
//                     href="assets/img/products/furniture-13.jpg"
//                   >
//                     <i className="fa fa-search-plus" />
//                     Large Image
//                   </a>
//                 </div>
//               </div>
//               <div className="tab-pane fade" id="product-large-two">
//                 <div className="single-product__img easyzoom">
//                   <img
//                     src={image + product.img}
//                     alt="product"
//                   />
//                   <a
//                     className="popup-btn"
//                     src={image + product.img}
//                   >
//                     <i className="fa fa-search-plus" />
//                     Large Image
//                   </a>
//                 </div>
//               </div>
//               <div className="tab-pane fade" id="product-large-three">
//                 <div className="single-product__img easyzoom">
//                   <img
//                     src={image + product.img}
//                     alt="product"
//                   />
//                   <a
//                     className="popup-btn"
//                     src={image + product.img}
//                   >
//                     <i className="fa fa-search-plus" />
//                     Large Image
//                   </a>
//                 </div>
//               </div>
//               <div className="tab-pane fade" id="product-large-four">
//                 <div className="single-product__img easyzoom">
//                   <img
//                    src={image + product.img}
//                     alt="product"
//                   />
//                   <a
//                     className="popup-btn"
//                     href="assets/img/products/furniture-16.jpg"
//                   >
//                     <i className="fa fa-search-plus" />
//                     Large Image
//                   </a>
//                 </div>
//               </div>
//             </div>
//             {/* Tab Content End */}
//             {/* Product Thumbnail Carousel Start */}
//             <div className="product-thumbnail">
//               <div
//                 className="thumb-menu product-thumb-menu"
//                 id="thumbmenu-horizontal"
//               >
                
               
               
                
//               </div>
//             </div>
//             {/* Product Thumbnail Carousel End */}
//           </div>
//           <div className="col-lg-6">
//             {/* Single Product Content Start */}
//             <div className="single-product__content">
//               <div className="single-product__top">
//                 <h2 className="single-product__name">Aliquam lobortis</h2>
//                 <div className="ratings-wrap">
//                   <div className="ratings">
//                     <i className="fa fa-star rated" />
//                     <i className="fa fa-star rated" />
//                     <i className="fa fa-star rated" />
//                     <i className="fa fa-star" />
//                     <i className="fa fa-star" />
//                   </div>
//                   <span>(2 Customer Reviews)</span>
//                 </div>
//                 <div className="single-product__price">
//                   <span className="regular-price">
//                     <NumericFormat
//                     value={product.price}
//                     allowLeadingZeros
//                     thousandSeparator="."
//                     decimalSeparator=","
//                     displayType="text"
//                   />{" "}
//                   VND</span>
                  
//                 </div>
//               </div>
//               <div className="single-product__middle">
//               <p
//                   className="mb-4"
//                   dangerouslySetInnerHTML={{ __html: product.description }}
//                 ></p>

//                 <p className="product-availability">
//                   <i className="fa fa-check-circle" />
//                   200 In Stock
//                 </p>
//                 <div className="product-action-wrapper">
//                   <a href="#" className="btn add-to-cart btn-style-1 color-1">
//                     Buy Now
//                   </a>
//                 </div>
//                 <div className="single-product__btn">
//                   <a
//                     href="wishlist.html"
//                     data-bs-toggle="tooltip"
//                     data-bs-placement="top"
//                     title="Add to Wishlist"
//                   >
//                     <i className="fa fa-heart-o" /> Add to Wishlist
//                   </a>
//                   <a
//                     href="compare.html"
//                     data-bs-toggle="tooltip"
//                     data-bs-placement="top"
//                     title="Add to Compare"
//                   >
//                     <i className="fa fa-refresh" /> Add to Compare
//                   </a>
//                 </div>
//               </div>
//               <div className="single-product__meta">
//                 <p>
//                   <strong>Categories:</strong>
//                   <a href="shop.html">Accessories,</a>
//                   <a href="shop.html">Electronics</a>
//                 </p>
//                 <p>
//                   <strong>Tags:</strong>
//                   <a href="shop.html">cloths,</a>
//                   <a href="shop.html">Fashion</a>
//                 </p>
//               </div>
//               <div className="social-buttons">
//                 <a
//                   href="https://facebook.com"
//                   target="_blank"
//                   rel="noopener"
//                   className="facebook social-button"
//                 >
//                   <i className="fa fa-facebook" />
//                   <span>Like</span>
//                 </a>
//                 <a
//                   href="https://twitter.com"
//                   target="_blank"
//                   rel="noopener"
//                   className="twitter social-button"
//                 >
//                   <i className="fa fa-twitter" />
//                   <span>Tweet</span>
//                 </a>
//                 <a href="plus.google.com" className="gplus social-button">
//                   <i className="fa fa-google-plus" />
//                 </a>
//               </div>
//               <div className="social-share">
//                 <strong>Share This Product</strong>
//                 <ul className="social">
//                   <li className="social__item">
//                     <a
//                       href="https://facebook.com"
//                       target="_blank"
//                       rel="noopener"
//                       className="social__link"
//                     >
//                       <i className="fa fa-facebook social__icon" />
//                     </a>
//                   </li>
//                   <li className="social__item">
//                     <a
//                       href="https://twitter.com"
//                       target="_blank"
//                       rel="noopener"
//                       className="social__link"
//                     >
//                       <i className="fa fa-twitter social__icon" />
//                     </a>
//                   </li>
//                   <li className="social__item">
//                     <a href="plus.google.com" className="social__link">
//                       <i className="fa fa-google-plus social__icon" />
//                     </a>
//                   </li>
//                   <li className="social__item">
//                     <a
//                       href="https://pinterest.com"
//                       target="_blank"
//                       rel="noopener"
//                       className="social__link"
//                     >
//                       <i className="fa fa-pinterest social__icon" />
//                     </a>
//                   </li>
//                   <li className="social__item">
//                     <a
//                       href="https://pinterest.com"
//                       target="_blank"
//                       rel="noopener"
//                       className="social__link"
//                     >
//                       <i className="fa fa-linkedin social__icon" />
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             {/* Single Product Content End */}
//           </div>
//         </div>
//       </section>
//       </>
//     </LayoutMaster>
//   )
// };
// export default Detail;