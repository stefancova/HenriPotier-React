import React from "react";
import { useParams } from "react-router-dom";

const PageProduct = () => {
  let { id } = useParams();
  return (
    <>
      <p>Page produit : {id}</p>
    </>
  );
};
export default PageProduct;
