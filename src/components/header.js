import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation"


const Header = () => (
  <header className="masthead">
    <div>
      <div>
        <Link to="/">
          <h1 className="site-title">Kendall's Website</h1>
        </Link>
        <Navigation></Navigation>
      </div>
    </div>
  </header>
);

export default Header;
