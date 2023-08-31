import { productActions } from "../slices/productSlice";
import axios from "axios";

export function getAllProducts() {
  return async (dispatch) => {
    const response = await fetch("https://fakestoreapi.com/products");
    const result = await response.json();
    dispatch(productActions.setProduct(result));
  };
}

export function getOneProduct(id) {
  return async (dispatch) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const result = await response.json();
    dispatch(productActions.setOneProduct(result));
  };
}
