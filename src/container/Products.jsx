import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "../store/actions/product";
import ProductItem from "../components/ProductItem";

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchProducts());
    return () => {};
  }, [dispatch]);
  return (
    <div className="container mt-3">
      <div className="row">
        {products.map((product) => (
          <div className="col-4 mt-1" key={product.id}>
            <ProductItem {...product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
