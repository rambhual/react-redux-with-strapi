import {
  PRODUCT_REQUEST,
  PRODUCT_LOADED,
  PRODUCT_ERROR,
} from "../constant-types/product";

const initialState = {
  products: [],
  loading: false,
  errorMessage: "",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCT_REQUEST:
      return { ...state, loading: true };
    case PRODUCT_LOADED:
      return { ...state, loading: false, products: payload };
    case PRODUCT_ERROR:
      return { ...state, loading: false, errorMessage: payload };
    default:
      return state;
  }
};
