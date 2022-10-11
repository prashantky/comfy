import React from "react";
import { Link } from "react-router-dom";
export const PageHero = ({ title ,singleProducts}) => {
  return (
    <div>
      <div className="main">
        <Link to="/">Home</Link>
        {singleProducts && <Link to="/products">/Products</Link> }
       / {title}
      </div>
    </div>
  );
};
