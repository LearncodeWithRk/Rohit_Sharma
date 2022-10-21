import React from "react";
import footerImg1 from "./img/behance.png";
import footerImg2 from "./img/upwork.png";
import footerImg3 from "./img/github.png";
import footerImg4 from "./img/youtube1.png";
import footerImg5 from "./img/whats.png";
function Skill() {
  return (
    <div className="footer">
     

     <a href="https://www.behance.net/learncodewithrk/"><img src={footerImg1} alt="" className="footer__img1 pointer" /></a>
      <a href="https://www.uplabs.com/learncodewithrk"><img src={footerImg2} alt="" className="footer__img2 pointer" /></a>
      <a href="https://github.com/LearncodeWithRk"><img src={footerImg3} alt="" className="footer__img3 pointer" /></a>
      

      <a href="https://www.youtube.com/channel/UCQ188dyxCgqYdG1wRdbJtpw/featured"><img src={footerImg4} alt="" className="footer__img4 pointer" /></a>
      <a href="https://api.whatsapp.com/send?phone=919599695872&text=Hello"><img src={footerImg5} alt="" className="footer__img5 pointer" /></a>

      


      </div>

  );
}

export default Skill;