import React, { useState } from "react";
import {
  faBars,
  faShoppingCart,
  faCaretDown,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import "../../Styles/Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function NavBar() {
  
  const [toggleNav, setToggelNav] = useState(false);

  function handleToggle(e) {
    e.preventDefault();
    setToggelNav(!toggleNav);
  }
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
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">
                  Regions
                  <i className="icon ">
                    <FontAwesomeIcon icon={faCaretDown} />
                  </i>
                </a>
                <ul className="products-cat">
                  <li>
                    <a href="/region/africa">Africa</a>
                  </li>
                  <li>
                    <a href="/region/americas">Americas</a>
                  </li>
                  <li>
                    <a href="/region/asia">Asia</a>
                  </li>
                  <li>
                    <a href="/region/europe">Europe</a>
                  </li>
                  <li>
                    <a href="/region/ocenia">Oceania</a>
                  </li>
                </ul>
              </li>
              
              <li>
                <a href="/searchcountry">Search</a>
              </li>

           
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
