import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./utility-css/navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "./../redux/apiCalls/categoryApiCall";
import { Link } from "react-router-dom";

const NavbarCom = () => {
  const [toggle, setToggle] = useState(false);

  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getAllCategories()); //
  }, []);

  return (
    <div className="navbar">
      <Container className="px-4">
        <div className="navbar-user">
          <i class="bi bi-cart shop-icon"></i>
          <Link to="/register" class="bi bi-person user-icon"></Link>
        </div>
        <div className="navbar-list">
          <i
            onClick={() => setToggle(true)}
            class="bi bi-list navbar-list-icon"
          ></i>
        </div>
        <ul
          className="navbar-links"
          style={{ right: toggle === true ? "0px" : "-350px" }}
        >
          <Link
            to="/"
            style={{ textDecoration: "none" }}
            className="navbar-link"
          >
            Home
          </Link>
          <Link
            to="/products"
            style={{ textDecoration: "none" }}
            className="navbar-link"
          >
            Products
          </Link>
          {categories && categories.length > 0
            ? categories.map((cat, index) => (
                <Link
                  to={`/products/category${index + 1}/${cat}`}
                  style={{ textDecoration: "none" }}
                  key={index}
                  className="navbar-link"
                >
                  {cat}
                </Link>
              ))
            : null}
          <div className="navbar-close">
            <i
              onClick={() => setToggle(false)}
              class="bi bi-x-lg navbar-close-icon"
            ></i>
          </div>
        </ul>
      </Container>
    </div>
  );
};

export default NavbarCom;
