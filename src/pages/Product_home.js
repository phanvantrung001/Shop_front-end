import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../models/Product";

function Product_home(props) {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    Product.all().then((res) => {
        setProducts(res);
        console.log(products);
    });
  }, []);
  return (
  <>
    {products}
  </>
  );
}

export default Product_home;
