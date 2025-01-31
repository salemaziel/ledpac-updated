import React from "react";
import ProductBox from "../../common/ProductBox";

const ProductBoxes = ({ imageUrl, imageAlt, title, description, link, buttonText, isNew, isComingSoon }) => {
  return (
    <ProductBox
      imageUrl={imageUrl}
      imageAlt={imageAlt}
      title={title}
      description={description}
      link={link}
      buttonText={buttonText}
      isNew={isNew}
      isComingSoon={isComingSoon}
    />
  );
};

export default ProductBoxes;
