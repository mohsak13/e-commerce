import { categoryActions } from "../slices/categorySlice";

export function getAllCategories() {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const result = await response.json();
      dispatch(categoryActions.setCategory(result));
    } catch (error) {
      console.log(error);
    }
  };
}

export function getOneCategory(cat) {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${cat}`
      );
      const result = await response.json();
      dispatch(categoryActions.setOneCategory(result));
    } catch (error) {
      console.log(error);
    }
  };
}
