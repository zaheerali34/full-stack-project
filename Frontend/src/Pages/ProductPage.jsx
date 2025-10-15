import React from 'react';
import ProductHome from '../Components/Product/ProductHome';
import CardProduct from '../Components/Product/CardProduct';
import ProductFooter from '../Components/Product/ProductFooter';
import CardProductTwo from '../Components/Product/CardProductTwo';

function ProductPage() {
  return (
    <>
      <ProductHome />
      <CardProduct />
      <CardProductTwo />
      <ProductFooter />
    </>
  );
}

export default ProductPage;
