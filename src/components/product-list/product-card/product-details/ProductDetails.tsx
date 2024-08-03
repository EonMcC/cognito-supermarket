import React from 'react';
import './ProductDetails.scss';

const ProductDetails: React.FC<{
  description: String;
  show: boolean;
}> = ({
  description,
  show
}) => {

  return (
    <div className={show ? "product-details product-details--show" : "product-details"}>
      <p>{description}</p>
    </div>
  )
}

export default ProductDetails;