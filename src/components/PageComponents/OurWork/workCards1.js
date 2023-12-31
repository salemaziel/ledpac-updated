import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "gatsby";

import CostcoAfter_1 from "../../../images/costco/costco-after-442x332.jpg";
import Finley8 from "../../../images/finley/finley-8.jpg";

const WorkCards1 = () => (
  <div>
    <Card className="bg-dark text-white">
      <Link to="/our-work/costco-jewelry">
        <Card.Img src={CostcoAfter_1} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title
            style={{
              color: "white",
              fontWeight: "bold",
              textShadow: "2px 2px 3px black",
            }}
          >
            Costco Jewelry
          </Card.Title>
        </Card.ImgOverlay>
      </Link>
    </Card>
    <Card className="bg-dark text-white">
      <Link to="/our-work/finley-residence">
        <Card.Img src={Finley8} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title
            style={{
              color: "white",
              fontWeight: "bold",
              textShadow: "2px 2px 3px black",
            }}
          >
            Finley Residence
          </Card.Title>
        </Card.ImgOverlay>
      </Link>
    </Card>
  </div>
);

export default WorkCards1;
