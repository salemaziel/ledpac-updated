import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "gatsby";
import {
    Content,
    ProductBox,
    CategoryRow,
    ProductTitle,
  } from "../Products/products.module.css"


const ProductBoxes = ({ imageUrl, imageAlt, title, description, link, buttonText, isNew, isComingSoon }) => {
    return (
    <div className={ProductBox}>
      <Row className={CategoryRow}>
        <Col>
          <span className="image fit">
            <Link to={link}>
              <img src={imageUrl} alt={imageAlt} />
            </Link>
          </span>
        </Col>
        <Col>
          <h3 className={ProductTitle}>
            <Link to={link}>{title}</Link>
          </h3>
          <p>
            {isNew && <strong>NEW</strong>}
            {isComingSoon && <strong>COMING SOON</strong>} {description}
          </p>
          <ul className="actions">
            <li>
              <Link to={link} className="button">
                {buttonText}
              </Link>
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  );
}

export default ProductBoxes;