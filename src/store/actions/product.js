import axios from "axios";
import {
  PRODUCT_REQUEST,
  PRODUCT_LOADED,
  PRODUCT_ERROR,
} from "../constant-types/product";

export const productRequest = () => ({
  type: PRODUCT_REQUEST,
});

export const productLoaded = (payload) => ({
  type: PRODUCT_LOADED,
  payload,
});

export const productError = (payload) => ({
  type: PRODUCT_ERROR,
  payload,
});

export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch(productRequest());
    const { data } = await axios.get("/products");
    dispatch(productLoaded(data));
  } catch (error) {
    dispatch(productError(error));
  }
};
