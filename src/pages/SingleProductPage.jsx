import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneProduct } from "../redux/apiCalls/productApiCall";
import HeaderTitleComponent from "../utility/HeaderTitleComponent";
import Rating from "./../utility/Rating";
import "./style/singleproductpage.css";
import { Container } from "react-bootstrap";
import { getProduct } from "./../redux/apiCalls/cartApiCall";

const SingleProductPage = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);
  const { cartItems } = useSelector((state) => state.cart);

  console.log(cartItems);

  useEffect(() => {
    dispatch(getOneProduct(id));
  }, [id]);

  return (
    <div className="single-product-page">
      <div className="single-product-page-main-title">
        <HeaderTitleComponent title={product?.category} />
      </div>
      <Container>
        <div className="single-product-page-contain">
          <div className="single-product-img">
            <img src={product?.image} alt={product?.title} />
          </div>
          <div className="single-product-info">
            <h1 className="single-product-info-title">{product?.title}</h1>
            <div className="single-product-info-description">
              {product?.description}
            </div>
            <div className="single-product-info-price">
              Price : ${product?.price}
            </div>
            <div className="single-product-info-rating">
              <div className="single-product-info-rate">
                {product?.rating?.rate}
                <i class="bi bi-star-fill"></i>
              </div>
              <div className="single-product-info-counts">
                count: {product?.rating?.count}
              </div>
            </div>
            <button
              onClick={() => dispatch(getProduct(product?.id))}
              className="add-to-cart"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SingleProductPage;
