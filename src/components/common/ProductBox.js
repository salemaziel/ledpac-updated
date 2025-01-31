import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "gatsby";
import ImageLink from "./ImageLink";
import ButtonLink from "./ButtonLink";
import {productBox, CategoryRow, productTitle} from "./productBox.module.css";

const ProductBox = ({ imageUrl, imageAlt, title, description, link, buttonText, isNew, isComingSoon }) => (
  <div className={productBox}>
    <Row className={CategoryRow}>
      <Col>
        <span className="image fit">
          <ImageLink to={link} src={imageUrl} alt={imageAlt} />
        </span>
      </Col>
      <Col>
        <h3 className={productTitle}>
          <Link to={link}>{title}</Link>
        </h3>
        <p>
          {isNew && <strong>NEW</strong>}
          {isComingSoon && <strong>COMING SOON</strong>} {description}
        </p>
        <ul className="actions">
          <li>
            <ButtonLink to={link} className="button">
              {buttonText}
            </ButtonLink>
          </li>
        </ul>
      </Col>
    </Row>
  </div>
);

export default ProductBox;
