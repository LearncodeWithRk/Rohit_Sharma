import React from "react";
import footerImg1 from "./img/logo (1).png";

function Footer() {
  return (
    <>
    <div
      className="footer d__flex align__items__center justify__content__space__between pz-5"
      style={{ padding: "20px 10px", zIndex: "100" }}>


      <a href="https://linktr.ee/LearnCodeWithRK"><img src={footerImg1} alt="" className="footer__img1 pointer" /></a>
    





      <span
        className="copyright"
        style={{ color: "#c6c9d8", fontSize: "14px", opacity: "0.75" }}
      >
     
       
        Copyright © 2022 programmer LearnCode With Rk. All Rights Reserved.
      </span>
      </div>
      </>
  );
}

export default Footer;