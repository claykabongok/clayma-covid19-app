import React, { useState } from "react";
import {
  faBars,
  faCaretDown,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import "../../Styles/Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [toggleNav, setToggelNav] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    setToggelNav(!toggleNav);
  };
  return (
    <div>
      <header>
        <div className="container-nav">
          <nav className={` ${toggleNav ? "active" : ""}`}>
            <div className="menu-icon">
              <FontAwesomeIcon
                icon={faBars}
                className="menu-icon-bar"
                onClick={(e) => handleToggle(e)}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className="menu-icon-close"
                onClick={(e) => handleToggle(e)}
              />
            </div>

            <ul className="navigation-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link>
                  Regions
                  <FontAwesomeIcon icon={faCaretDown} className="icon " />
                </Link>

                <ul className="products-cat">
                  <li>
                    <Link to="/region/africa">Africa</Link>
                  </li>
                  <li>
                    <Link to="/region/americas">Americas</Link>
                  </li>
                  <li>
                    <Link to="/region/asia">Asia</Link>
                  </li>
                  <li>
                    <Link to="/region/europe">Europe</Link>
                  </li>
                  <li>
                    <Link to="/region/oceania">Oceania</Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/searchcountry">Search</Link>
              </li>
              <li>
                <Link to="/charts">Charts</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
