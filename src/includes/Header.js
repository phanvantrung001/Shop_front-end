import React from "react";

function Header(props) {
  return (
    <>
      <header className="header header-1">
        <div className="header-top header-1--top">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 text-lg-start text-center">
                <ul className="contact-info contact-info--1">
                  <li className="contact-info__list">
                    <i className="fa fa-envelope-open" />
                    <a href="mailto:phanvantrung190207@gmail.com">
                      Phanvantrung190207@gmail.com
                    </a>
                  </li>
                  <li className="contact-info__list">
                    <i className="fa fa-phone" />
                    <a href="#">+88 123 456 7899</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 text-end">
                <div className="header-top__nav header-top__nav--1 d-flex justify-content-lg-end justify-content-center">
                  <div className="user-info header-top__nav--item">
                    <div className="dropdown header-top__dropdown">
                      <a
                        className="dropdown-toggle"
                        id="userID"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        My Account
                      </a>
                      <div className="dropdown-menu" aria-labelledby="userID">
                        <a className="dropdown-item" href="#">
                          My Account
                        </a>
                        <a className="dropdown-item" href="#">
                          Checkout
                        </a>
                        <a className="dropdown-item" href="#">
                          Sign In
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="currency-selector header-top__nav--item">
                    <div className="dropdown header-top__dropdown">
                      <a
                        className="dropdown-toggle"
                        id="currencyID"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span>Currency: </span>
                        USD
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="currencyID"
                      >
                        <a className="dropdown-item" href="#">
                          USD
                        </a>
                        <a className="dropdown-item" href="#">
                          EURO
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="language-selector header-top__nav--item">
                    <div className="dropdown header-top__dropdown">
                      <a
                        className="dropdown-toggle"
                        id="languageID"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span>Language: </span>
                        <img src="assets/img/header/1.jpg" alt="English" />{" "}
                        ENGLISH
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="languageID"
                      >
                        <a className="dropdown-item" href="#">
                          <img src="assets/img/header/1.jpg" alt="English" />{" "}
                          English
                        </a>
                        <a className="dropdown-item" href="#">
                          <img src="assets/img/header/2.jpg" alt="Français" />{" "}
                          Français
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Header Top Nav End */}
              </div>
            </div>
          </div>
        </div>
        <div className="header-middle header-1--middle brand-bg d-flex align-items-center">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-3 tex-xl-left text-center">
                <a href="index.html" className="logo-box">
                  <svg
                    width="244"
                    height="44"
                    viewBox="0 0 244 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class=""
                  >
                    <path
                      d="M.246 35.645V8.863H4.91l9.667 22.08h-2.069l9.63-22.08h4.627v26.782h-5.191l-.038-18.093 1.354.339-7.485 17.755h-3.8L3.97 17.89l1.43-.338v18.092H.245Zm47.831.339c-3.786 0-6.658-.965-8.614-2.896-1.93-1.931-2.896-4.765-2.896-8.501V8.863h5.717V24.85c0 2.131.49 3.761 1.467 4.89.978 1.128 2.42 1.693 4.326 1.693 1.83 0 3.235-.565 4.213-1.693.978-1.129 1.467-2.759 1.467-4.89V8.863h5.83v15.724c0 3.711-.99 6.545-2.971 8.5-1.981 1.932-4.828 2.897-8.539 2.897Zm33.481 0c-2.683 0-5.003-.564-6.959-1.693-1.956-1.128-3.473-2.72-4.551-4.777-1.053-2.056-1.58-4.489-1.58-7.297 0-2.784.527-5.204 1.58-7.26 1.078-2.056 2.596-3.636 4.552-4.74 1.956-1.128 4.275-1.692 6.958-1.692 2.684 0 4.99.564 6.922 1.692 1.956 1.104 3.46 2.684 4.513 4.74 1.054 2.056 1.58 4.476 1.58 7.26 0 2.808-.526 5.24-1.58 7.297-1.053 2.056-2.557 3.649-4.513 4.777-1.931 1.129-4.238 1.693-6.922 1.693Zm0-4.551c2.207 0 3.95-.778 5.229-2.333 1.304-1.58 1.956-3.874 1.956-6.883 0-3.01-.652-5.279-1.956-6.809-1.279-1.554-3.022-2.332-5.229-2.332-2.232 0-3.987.778-5.266 2.332-1.279 1.53-1.918 3.8-1.918 6.809 0 3.034.64 5.329 1.918 6.883 1.28 1.555 3.034 2.333 5.266 2.333Zm-2.633 6.77h5.229v5.003h-5.229v-5.003Zm.226-31.634h-4.288l5.04-5.906h3.198l5.04 5.906h-4.288L81.52 3.334l-2.37 3.235Zm24.522 29.076V8.863h5.868v26.782h-5.868Zm30.923 0V8.863h4.664l9.667 22.08h-2.068l9.629-22.08h4.627v26.782h-5.191l-.038-18.093 1.354.339-7.485 17.755h-3.799L138.32 17.89l1.429-.338v18.092h-5.153Zm47.831.339c-3.786 0-6.658-.965-8.614-2.896-1.931-1.931-2.896-4.765-2.896-8.501V8.863h5.717V24.85c0 2.131.489 3.761 1.467 4.89.978 1.128 2.42 1.693 4.326 1.693 1.831 0 3.235-.565 4.213-1.693.978-1.129 1.467-2.759 1.467-4.89V8.863h5.831v15.724c0 3.711-.991 6.545-2.972 8.5-1.981 1.932-4.827 2.897-8.539 2.897Zm33.481 0c-2.683 0-5.002-.564-6.958-1.693-1.956-1.128-3.474-2.72-4.552-4.777-1.053-2.056-1.58-4.489-1.58-7.297 0-2.784.527-5.204 1.58-7.26 1.078-2.056 2.596-3.636 4.552-4.74 1.956-1.128 4.275-1.692 6.958-1.692 2.684 0 4.991.564 6.922 1.692 1.956 1.104 3.46 2.684 4.514 4.74 1.053 2.056 1.579 4.476 1.579 7.26 0 2.808-.526 5.24-1.579 7.297-1.054 2.056-2.558 3.649-4.514 4.777-1.931 1.129-4.238 1.693-6.922 1.693Zm0-4.551c2.207 0 3.95-.778 5.229-2.333 1.304-1.58 1.956-3.874 1.956-6.883 0-3.01-.652-5.279-1.956-6.809-1.279-1.554-3.022-2.332-5.229-2.332-2.231 0-3.987.778-5.266 2.332-1.279 1.53-1.918 3.8-1.918 6.809 0 3.034.639 5.329 1.918 6.883 1.279 1.555 3.035 2.333 5.266 2.333Zm-2.633 6.77h5.229v5.003h-5.229v-5.003Zm.226-31.634h-4.288l5.04-5.906h3.198l5.04 5.906h-4.288l-2.332-3.235-2.37 3.235Zm24.522 29.076V8.863h5.868v26.782h-5.868Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </div>
              <div className="col-xl-5 col-lg-7 d-none d-lg-block">
                <nav className="main-navigation">
                  <ul className="mainmenu">
                    <li className="mainmenu__item active menu-item-has-children">
                      <a href="index.html" className="mainmenu__link">
                        Home
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="index.html">Home 1</a>
                        </li>
                      </ul>
                    </li>
                    <li className="mainmenu__item menu-item-has-children">
                      <a href="shop.html" className="mainmenu__link">
                        Shop
                      </a>
                      <ul className="sub-menu">
                        <li className="menu-item-has-children">
                          <a href="shop.html">Shop Gird</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="shop.html">Shop Left Sidebar</a>
                            </li>
                            <li>
                              <a href="shop-right-sidebar.html">
                                Shop Right Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="shop-fullwidth.html">Shop Full Width</a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-4-column.html">
                                Shop 4 Column
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="shop-list.html">Shop List</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="shop-list-left-sidebar.html">
                                Shop List Left Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="shop-list-right-sidebar.html">
                                Shop List Right Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="shop-list.html">Shop List Full Width</a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="single-product.html">Single Product</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="single-product.html">Tab Style 1</a>
                            </li>
                            <li>
                              <a href="single-product-tab-style-2.html">
                                Tab Style 2
                              </a>
                            </li>
                            <li>
                              <a href="single-product-tab-style-3.html">
                                Tab Style 3
                              </a>
                            </li>
                            <li>
                              <a href="single-product-gallery-left.html">
                                Gallery Left
                              </a>
                            </li>
                            <li>
                              <a href="single-product-gallery-right.html">
                                Gallery Right
                              </a>
                            </li>
                            <li>
                              <a href="single-product-slider-box.html">
                                Slider Box
                              </a>
                            </li>
                            <li>
                              <a href="single-product-slider-full-width.html">
                                Slider Full Width
                              </a>
                            </li>
                            <li>
                              <a href="single-product-sticky-left.html">
                                Sticky Left
                              </a>
                            </li>
                            <li>
                              <a href="single-product-sticky-right.html">
                                Sticky Right
                              </a>
                            </li>
                            <li>
                              <a href="single-product-group.html">
                                Group Product
                              </a>
                            </li>
                            <li>
                              <a href="single-product-variable.html">
                                Variable Product
                              </a>
                            </li>
                            <li>
                              <a href="single-product-affiliate.html">
                                Affiliate Product
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mainmenu__item">
                      <a href="portfolio.html" className="mainmenu__link">
                        Portfolio
                      </a>
                    </li>
                    <li className="mainmenu__item">
                      <a href="blog.html" className="mainmenu__link">
                        Blog
                      </a>
                    </li>
                    <li className="mainmenu__item menu-item-has-children">
                      <a href="#" className="mainmenu__link">
                        Features
                      </a>
                      <ul className="megamenu three-column">
                        <li>
                          <a href="#">Pages</a>
                          <ul>
                            <li>
                              <a href="about-us.html">About Us</a>
                            </li>
                            <li>
                              <a href="about-us-2.html">About Us 2</a>
                            </li>
                            <li>
                              <a href="contact.html">Contact</a>
                            </li>
                            <li>
                              <a href="contact-2.html">Contact 2</a>
                            </li>
                            <li>
                              <a href="services.html">Services</a>
                            </li>
                            <li>
                              <a href="services-2.html">Services 2</a>
                            </li>
                            <li>
                              <a href="faq.html">Faq</a>
                            </li>
                            <li>
                              <a href="404.html">404</a>
                            </li>
                            <li>
                              <a href="login-register.html">
                                Login &amp; Registration
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Blog</a>
                          <ul>
                            <li>
                              <a href="blog.html">Blog Left Sidebar</a>
                            </li>
                            <li>
                              <a href="blog-right-sidebar.html">
                                Blog Right Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="blog-3-column.html">Blog 3 Column</a>
                            </li>
                            <li>
                              <a href="blog-4-column.html">Blog 4 Column</a>
                            </li>
                            <li>
                              <a href="single-blog-image.html">Image Format</a>
                            </li>
                            <li>
                              <a href="single-blog-gallery.html">
                                Gallery Format
                              </a>
                            </li>
                            <li>
                              <a href="single-blog-audio.html">Audio Format</a>
                            </li>
                            <li>
                              <a href="single-blog-video.html">Video Format</a>
                            </li>
                            <li>
                              <a href="single-blog-right-sidebar.html">
                                Right Sidebar
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Shop</a>
                          <ul>
                            <li>
                              <a href="cart.html">Cart</a>
                            </li>
                            <li>
                              <a href="checkout.html">Checkout</a>
                            </li>
                            <li>
                              <a href="wishlist.html">Wishlist</a>
                            </li>
                            <li>
                              <a href="compare.html">Compare</a>
                            </li>
                            <li>
                              <a href="my-account.html">My Account</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="row">
              <div className="col-12 d-flex d-lg-none">
                <div className="mobile-menu" />
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom header-1--bottom">
          <div className="container">
            <div className="row custom-row align-items-end">
              <div className="col-lg-3">
                <div className="category-nav">
                  <h2
                    className="category-nav__title bg-primary"
                    id="js-cat-nav-title"
                  >
                    <i className="fa fa-bars" /> <span>Categories</span>
                  </h2>
                  <ul className="category-nav__menu" id="js-cat-nav">
                    <li className="category-nav__menu__item has-children">
                      <a href="shop.html">
                        <i className="fa fa-coffee" /> Fashion
                      </a>
                      <div className="category-nav__submenu">
                        <div className="category-nav__submenu--inner">
                          <ul>
                            <li>
                              <a href="shop.html">Health &amp; Beauties</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="category-nav__menu__item has-children">
                      <a href="shop.html">
                        <i className="fa fa-lightbulb-o" /> Electronics
                      </a>
                      <div className="category-nav__submenu mega-menu three-column">
                        <div className="category-nav__submenu--inner">
                          <h3 className="category-nav__submenu__title">
                            Television
                          </h3>
                          <ul>
                            <li>
                              <a href="shop.html">LED TV</a>
                            </li>
                            <li>
                              <a href="shop.html">LCD TV</a>
                            </li>
                            <li>
                              <a href="shop.html">Curved TV</a>
                            </li>
                            <li>
                              <a href="shop.html">Plasma TV</a>
                            </li>
                          </ul>
                        </div>
                        <div className="category-nav__submenu--inner">
                          <h3 className="category-nav__submenu__title">
                            Refrigerator
                          </h3>
                          <ul>
                            <li>
                              <a href="shop.html">LG</a>
                            </li>
                            <li>
                              <a href="shop.html">Samsung</a>
                            </li>
                            <li>
                              <a href="shop.html">Toshiba</a>
                            </li>
                            <li>
                              <a href="shop.html">Panasonic</a>
                            </li>
                          </ul>
                        </div>
                        <div className="category-nav__submenu--inner">
                          <h3 className="category-nav__submenu__title">
                            Air Conditioners
                          </h3>
                          <ul>
                            <li>
                              <a href="shop.html">Samsung</a>
                            </li>
                            <li>
                              <a href="shop.html">Panasonic</a>
                            </li>
                            <li>
                              <a href="shop.html">Sanaky</a>
                            </li>
                            <li>
                              <a href="shop.html">Toshiba</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="category-nav__menu__item">
                      <a href="shop.html">
                        <i className="fa fa-tree" /> Baby
                      </a>
                    </li>
                    <li className="category-nav__menu__item has-children">
                      <a href="shop.html">
                        <i className="fa fa-mobile" /> Mobile
                      </a>
                      <div className="category-nav__submenu">
                        <div className="category-nav__submenu--inner">
                          <ul>
                            <li>
                              <a href="shop.html">Apple</a>
                            </li>
                            <li>
                              <a href="shop.html">Samsung</a>
                            </li>
                            <li>
                              <a href="shop.html">Nokia</a>
                            </li>
                            <li>
                              <a href="shop.html">Walton</a>
                            </li>
                            <li>
                              <a href="shop.html">Sony</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="category-nav__menu__item">
                      <a href="shop.html">
                        <i className="fa fa-shield" /> Furniture
                      </a>
                      <div className="category-nav__submenu">
                        <div className="category-nav__submenu--inner">
                          <ul>
                            <li>
                              <a href="shop.html">Apple</a>
                            </li>
                            <li>
                              <a href="shop.html">Samsung</a>
                            </li>
                            <li>
                              <a href="shop.html">LG</a>
                            </li>
                            <li>
                              <a href="shop.html">Sony</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="category-nav__menu__item">
                      <a href="shop.html">
                        <i className="fa fa-plane" /> Sport
                      </a>
                    </li>
                    <li className="category-nav__menu__item">
                      <a href="shop.html">
                        <i className="fa fa-gift" /> Gift, Parties
                      </a>
                    </li>
                    <li className="category-nav__menu__item">
                      <a href="shop.html">
                        <i className="fa fa-cog" /> Accessories
                      </a>
                    </li>
                    <li className="category-nav__menu__item hidden-lg-menu-item">
                      <a href="shop.html">
                        <i className="fa fa-tv" /> Toshiba
                      </a>
                    </li>
                    <li className="category-nav__menu__item hidden-lg-menu-item">
                      <a href="shop.html">
                        <i className="fa fa-tv" /> Samsung
                      </a>
                    </li>
                    <li className="category-nav__menu__item hidden-menu-item">
                      <a href="shop.html">
                        <i className="fa fa-cube" /> Jewlery &amp; watches
                      </a>
                    </li>
                    <li className="category-nav__menu__item">
                      <a href="shop.html" className="js-expand-hidden-menu">
                        {" "}
                        More Categories
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Category Nav End */}
                <div className="category-mobile-menu" />
              </div>
              <div className="col-lg-8 col-md-10">
                <div className="corporate corporate--1">
                  <div className="corporate__single">
                    <div className="corporate__icon">
                      <i className="fa fa-refresh" />
                    </div>
                    <div className="corporate__content">
                      <h3 className="corporate__title">Free Return</h3>
                      <p className="corporate__text">
                        30 days money back guarantee!
                      </p>
                    </div>
                  </div>
                  <div className="corporate__single">
                    <div className="corporate__icon">
                      <i className="fa fa-paper-plane-o" />
                    </div>
                    <div className="corporate__content">
                      <h3 className="corporate__title">FREE SHIPPING</h3>
                      <p className="corporate__text">
                        Free shipping on all order
                      </p>
                    </div>
                  </div>
                  <div className="corporate__single">
                    <div className="corporate__icon">
                      <i className="fa fa-support" />
                    </div>
                    <div className="corporate__content">
                      <h3 className="corporate__title">SUPPORT 24/7</h3>
                      <p className="corporate__text">We support online 24hrs</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-1 col-md-2 align-self-start">
                {/* Header Cart Start */}
                <div className="mini-cart mini-cart--1">
                  <a className="mini-cart__dropdown-toggle" id="cartDropdown">
                    <i className="fa fa-shopping-bag mini-cart__icon" />
                    <sub className="mini-cart__count">0</sub>
                  </a>
                  <div className="mini-cart__dropdown-menu">
                    <div className="mini-cart__content">
                      <div className="mini-cart__item">
                        <div className="mini-cart__item--single">
                          <div className="mini-cart__item--image">
                            <img
                              src="assets/img/products/electronics-4-150x167.jpg"
                              alt="product"
                            />
                          </div>
                          <div className="mini-cart__item--content">
                            <h4>
                              <a href="single-product.html">
                                Odio tortor consequat
                              </a>{" "}
                            </h4>
                            <p>Qty: 1</p>
                            <p>$100.00</p>
                          </div>
                          <a className="mini-cart__item--remove" href="">
                            <i className="fa fa-times" />
                          </a>
                        </div>
                        <div className="mini-cart__item--single">
                          <div className="mini-cart__item--image">
                            <img
                              src="assets/img/products/furniture-6-150x167.jpg"
                              alt="product"
                            />
                          </div>
                          <div className="mini-cart__item--content">
                            <h4>
                              <a href="single-product.html">
                                Integer eget augue
                              </a>{" "}
                            </h4>
                            <p>Qty: 1</p>
                            <p>$100.00</p>
                          </div>
                          <a className="mini-cart__item--remove" href="">
                            <i className="fa fa-times" />
                          </a>
                        </div>
                      </div>
                      <div className="mini-cart__total">
                        <h4>
                          <span className="mini-cart__total--title">
                            Subtotal
                          </span>
                          <span className="mini-cart__total--ammount">
                            $0.00
                          </span>
                        </h4>
                      </div>
                      <div className="mini-cart__btn">
                        <a
                          href="cart.html"
                          className="btn btn-small btn-icon btn-style-1 color-1"
                        >
                          View Cart <i className="fa fa-angle-right" />
                        </a>
                        <a
                          href="checkout.html"
                          className="btn btn-small btn-icon btn-style-1 color-1"
                        >
                          Checkout <i className="fa fa-angle-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Header Cart End */}
              </div>
            </div>
          </div>
        </div>
        <div className="fixed-header">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                {/* Sticky Logo Start */}
                <a className="sticky-logo" href="index.html">
                  <img src="assets/img/logo/logo-white.png" alt="logo" />
                </a>
                {/* Sticky Logo End */}
              </div>
              <div className="col-lg-9">
                {/* Sticky Mainmenu Start */}
                <nav className="sticky-navigation">
                  <ul className="mainmenu sticky-menu">
                    <li className="mainmenu__item active menu-item-has-children sticky-has-child">
                      <a href="index.html" className="mainmenu__link">
                        Home
                      </a>
                      <ul className="sub-menu hidden-sub">
                        <li>
                          <a href="index.html">Home 1</a>
                        </li>
                        <li>
                          <a href="index-2.html">Home 2</a>
                        </li>
                        <li>
                          <a href="index-3.html">Home 3</a>
                        </li>
                        <li>
                          <a href="index-4.html">Home 4</a>
                        </li>
                        <li>
                          <a href="index-5.html">Home 5</a>
                        </li>
                        <li>
                          <a href="index-6.html">Home 6</a>
                        </li>
                        <li>
                          <a href="index-7.html">Home 7</a>
                        </li>
                        <li>
                          <a href="index-8.html">Home 8</a>
                        </li>
                      </ul>
                    </li>
                    <li className="mainmenu__item menu-item-has-children sticky-has-child sticky-has-child">
                      <a href="shop.html" className="mainmenu__link">
                        Shop
                      </a>
                      <ul className="sub-menu hidden-sub">
                        <li className="menu-item-has-children sticky-has-child">
                          <a href="shop.html">Shop Gird</a>
                          <ul className="sub-menu hidden-sub">
                            <li>
                              <a href="shop.html">Shop Left Sidebar</a>
                            </li>
                            <li>
                              <a href="shop-right-sidebar.html">
                                Shop Right Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="shop-fullwidth.html">Shop Full Width</a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-4-column.html">
                                Shop 4 Column
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children sticky-has-child">
                          <a href="shop-list.html">Shop List</a>
                          <ul className="sub-menu hidden-sub">
                            <li>
                              <a href="shop-list-left-sidebar.html">
                                Shop List Left Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="shop-list-right-sidebar.html">
                                Shop List Right Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="shop-list.html">Shop List Full Width</a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children sticky-has-child">
                          <a href="single-product.html">Single Product</a>
                          <ul className="sub-menu hidden-sub">
                            <li>
                              <a href="single-product.html">Tab Style 1</a>
                            </li>
                            <li>
                              <a href="single-product-tab-style-2.html">
                                Tab Style 2
                              </a>
                            </li>
                            <li>
                              <a href="single-product-tab-style-3.html">
                                Tab Style 3
                              </a>
                            </li>
                            <li>
                              <a href="single-product-gallery-left.html">
                                Gallery Left
                              </a>
                            </li>
                            <li>
                              <a href="single-product-gallery-right.html">
                                Gallery Right
                              </a>
                            </li>
                            <li>
                              <a href="single-product-slider-box.html">
                                Slider Box
                              </a>
                            </li>
                            <li>
                              <a href="single-product-slider-full-width.html">
                                Slider Full Width
                              </a>
                            </li>
                            <li>
                              <a href="single-product-sticky-left.html">
                                Sticky Left
                              </a>
                            </li>
                            <li>
                              <a href="single-product-sticky-right.html">
                                Sticky Right
                              </a>
                            </li>
                            <li>
                              <a href="single-product-group.html">
                                Group Product
                              </a>
                            </li>
                            <li>
                              <a href="single-product-variable.html">
                                Variable Product
                              </a>
                            </li>
                            <li>
                              <a href="single-product-affiliate.html">
                                Affiliate Product
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mainmenu__item">
                      <a href="portfolio.html" className="mainmenu__link">
                        Portfolio
                      </a>
                    </li>
                    <li className="mainmenu__item">
                      <a href="blog.html" className="mainmenu__link">
                        Blog
                      </a>
                    </li>
                    <li className="mainmenu__item menu-item-has-children sticky-has-child">
                      <a href="#" className="mainmenu__link">
                        Features
                      </a>
                      <ul className="megamenu three-column hidden-sub">
                        <li>
                          <a href="#" className="megamenu__heading">
                            Pages
                          </a>
                          <ul className="hidden-sub">
                            <li>
                              <a href="about-us.html">About Us</a>
                            </li>
                            <li>
                              <a href="about-us-2.html">About Us 2</a>
                            </li>
                            <li>
                              <a href="contact.html">Contact</a>
                            </li>
                            <li>
                              <a href="contact-2.html">Contact 2</a>
                            </li>
                            <li>
                              <a href="services.html">Services</a>
                            </li>
                            <li>
                              <a href="services-2.html">Services 2</a>
                            </li>
                            <li>
                              <a href="faq.html">Faq</a>
                            </li>
                            <li>
                              <a href="404.html">404</a>
                            </li>
                            <li>
                              <a href="login-register.html">
                                Login &amp; Registration
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#" className="megamenu__heading">
                            Blog
                          </a>
                          <ul className="hidden-sub">
                            <li>
                              <a href="blog.html">Blog Left Sidebar</a>
                            </li>
                            <li>
                              <a href="blog-right-sidebar.html">
                                Blog Right Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="blog-3-column.html">Blog 3 Column</a>
                            </li>
                            <li>
                              <a href="blog-4-column.html">Blog 4 Column</a>
                            </li>
                            <li>
                              <a href="single-blog-image.html">Image Format</a>
                            </li>
                            <li>
                              <a href="single-blog-gallery.html">
                                Gallery Format
                              </a>
                            </li>
                            <li>
                              <a href="single-blog-audio.html">Audio Format</a>
                            </li>
                            <li>
                              <a href="single-blog-video.html">Video Format</a>
                            </li>
                            <li>
                              <a href="single-blog-right-sidebar.html">
                                Right Sidebar
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#" className="megamenu__heading">
                            Shop
                          </a>
                          <ul className="hidden-sub">
                            <li>
                              <a href="cart.html">Cart</a>
                            </li>
                            <li>
                              <a href="checkout.html">Checkout</a>
                            </li>
                            <li>
                              <a href="wishlist.html">Wishlist</a>
                            </li>
                            <li>
                              <a href="compare.html">Compare</a>
                            </li>
                            <li>
                              <a href="my-account.html">My Account</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <div className="sticky-mobile-menu">
                    <span className="sticky-menu-btn" />
                  </div>
                </nav>
                {/* Sticky Mainmenu End */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
