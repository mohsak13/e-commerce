import React, { useEffect } from "react";
import HeaderTitleComponent from "../../utility/HeaderTitleComponent";
import "./category.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../redux/apiCalls/categoryApiCall";
import { Container } from "react-bootstrap";

const Category = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  const fontColor = ["#03a9f4", "#ffeb3b", "#673ab7", "#9c27b0"];

  return (
    <div className="category">
      <HeaderTitleComponent title="Our Category" />
      <Container className="text-center">
        <div className="category-items">
          {categories && categories.length > 0
            ? categories.map((cat, index) => (
                <div
                  style={{ color: fontColor[index] }}
                  key={index}
                  className="category-item"
                >
                  {cat}
                </div>
              ))
            : null}
        </div>
      </Container>
    </div>
  );
};

export default Category;
