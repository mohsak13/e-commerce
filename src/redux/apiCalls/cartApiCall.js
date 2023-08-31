import { cartActions } from "../slices/cartSlice";

export function getProduct(id) {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const result = await response.json();
      dispatch(cartActions.addItemToCart(result));
    } catch (error) {
      console.log(error);
    }
  };
}
