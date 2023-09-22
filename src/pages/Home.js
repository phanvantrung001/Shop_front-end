import React, { useState, useEffect } from "react";
import LayoutMaster from "../layouts/LayoutMaster";
import Product from "../models/Product";
import ProductItem from "../components/products/ProductItem";
function Home(props) {
  const [products, setProducts] = useState([]);
  const image = "http://127.0.0.1:8000/";

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
  const [visibleProducts, setVisibleProducts] = useState(6);
    // Hàm xử lý khi nhấn vào nút "Show more"
    const handleShowMore = () => {
        setVisibleProducts(visibleProducts + 3);
    };
  return (
    <LayoutMaster>
      <>
        <div className="hero-area pb--40 pb-sm--30">
          <div className="container">
            <div className="row custom-row">
              <div className="col-lg-6 offset-lg-3 col-md-8 mb-sm--30">
                <div
                  className="slider-wrapper owl-carousel right-side-dot"
                  id="homepage-slider"
                >
                  <div
                    className="single-slider content-v-center"
                    style={{
                      backgroundImage: "url(assets/img/slider/abcde.jpeg)",
                    }}
                  >
                    <div className="slider-content">
                      <div className="product-price mb-mdlg--20 mb-sm--10">
                        <p
                          className="regular-price"
                          data-animation="fadeInLeft"
                          data-duration=".3s"
                          data-delay=".8s"
                        >
                          $725.29
                        </p>
                        <p
                          className="sale-price"
                          data-animation="fadeInRight"
                          data-duration=".3s"
                          data-delay=".8s"
                        >
                          $500.59
                        </p>
                      </div>
                      <div
                        className="slider-btn-group"
                        data-animation="fadeInBottom"
                        data-duration=".3s"
                        data-delay=".9s"
                      >
                        <a
                          href="shop.html"
                          className="btn btn-borderd btn-slider color--white color-1 btn-style-1"
                        >
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div className="row gx-0">
                  <div className="col-md-12 col-sm-6">
                    <div className="promo-box full-width mb-mdsm--10 mb-xsm--10">
                      <a href="#">
                        <img src="assets/img/banner/bbb.jpeg" alt="promo" />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-12 col-sm-6">
                    <div className="promo-box full-width">
                      <a href="#">
                        <img src="assets/img/banner/mmm.jpeg" alt="promo" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="new-products-area section-padding section-sm-padding section-sm-padding">
          <div className="container">
            <div className="row align-items-center mb--20">
              <div className="col-md-4">
                <div className="section-title title-1 text-md-start text-center mb-sm--20">
                  <h2>New Prouducts</h2>
                </div>
              </div>
            </div>
            <div className="new-products-carousel bg-white owl-carousel js-new-products-carousel col-12 d-flex justify-content-center align-items-center">
              <div className="row">
                {products.slice(0,visibleProducts).map((product, key) => (
                  <div className="col-6 col-md-4 col-lg-4" >
                   <ProductItem key={key} product={product} />
                  </div>
                  
                ))}
                {visibleProducts < products.length && (
                <div className="col-12 text-center m-3">
                    <button className="btn btn-success load-more-product" onClick={handleShowMore}>
                        Show more
                    </button>
                </div>
            )}
                
              </div>
            </div>
           
          </div>
        </div>
      </>
    </LayoutMaster>
  );
}
export default Home;
