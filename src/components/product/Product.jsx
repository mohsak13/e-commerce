import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteOneProduct,
  getAllProducts,
} from "../../redux/apiCalls/productApiCall";
import "./product.css";
import { Container } from "react-bootstrap";
import Rating from "../../utility/Rating";
import HeaderTitleComponent from "../../utility/HeaderTitleComponent";
import { Link } from "react-router-dom";

const Product = () => {
  const { products } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div className="product">
      <HeaderTitleComponent title="Our Products" />
      <Container className="d-flex flex-wrap align-item-center justify-content-center container">
        {products.length > 0
          ? products
              .map((item) => (
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/products/${item.id}`}
                  key={item.id}
                  className="product-item mt-5"
                >
                  <div className="product-item-img">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="product-item-title">{item.title}</div>
                  <div className="product-item-price">
                    price : ${item.price}
                  </div>
                  <Rating rating={item.rating.rate} count={item.rating.count} />
                </Link>
              ))
              .slice(0, 8)
          : null}
      </Container>
    </div>
  );
};

export default Product;
