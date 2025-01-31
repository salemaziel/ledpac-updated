import React from "react";

const FeatureList = ({ features }) => (
  <ul>
    {features.map((feature, index) => (
      <li key={index}>{feature}</li>
    ))}
  </ul>
);

export default FeatureList;
