import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <main className="container">
    <p>Page not found!</p>
    <p>
      <Link to="/">Return Home</Link>
    </p>
  </main>
);

export default NotFound;
