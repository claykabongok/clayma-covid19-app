import React from "react";
import "../../Styles/Footer.scss";

export default function Footer() {
  const date = new Date();
  const dateyear = date.getFullYear();
  return (
    <div className="main-footer">
      <div className="main-footer-container">
     
          <div className="col-lg-12 main-footer-copyright">
            <p> &copy; {dateyear} Clayma. All Right reserved.</p>
            <hr />
          
        </div>
      </div>
    </div>
  );
}
