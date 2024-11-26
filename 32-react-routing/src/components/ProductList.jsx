import React from "react";
import ProductItem from "./ProductItem";

export default function ProductList({ products }) {
  return (
    <div>
      {products.map((product) => {
        return <ProductItem key={product.id} product={product} />;
      })}
    </div>
  );
}
