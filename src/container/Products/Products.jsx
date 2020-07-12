import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Products.css";
import { fetchProducts } from "../../store/actions/product";
import ProductItem from "../../components/ProductItem";
const Products = (props) => {
  const dispatch = useDispatch();
  const { products, loading, errorMessage } = useSelector(
    (state) => state.product
  );
  useEffect(() => {
    dispatch(fetchProducts());
    return () => {};
  }, [dispatch]);
  return (
    <div className="container mt-3">
      <div className="row">
        {products.map((p) => (
          <div className="col-4 mt-1" key={p.id}>
            <ProductItem {...p} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
