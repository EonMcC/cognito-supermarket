import React from 'react';
import './ProductDetails.scss';

const ProductDetails: React.FC<{
  description: String;
  show: boolean;
}> = ({
  description,
  show
}) => {

  // I opted to house the details within ProductCard and to show it when the card is clicked.
  // I made this decision because there is not much in the way of details to show on a full page
  // and this helps keep it neat. On a real site with a lot more information, I would move this
  // to it's own page.

  return (
    <div className={show ? "product-details product-details--show" : "product-details"}>
      <p>{description}</p>
    </div>
  )
}

export default ProductDetails;