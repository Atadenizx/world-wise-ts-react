import React from "react";
import PageNav from "../Components/PageNav";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div>
      <PageNav />
      <p>Homepage</p>

      <Link to="/app">GO to the app</Link>
    </div>
  );
};

export default HomePage;
