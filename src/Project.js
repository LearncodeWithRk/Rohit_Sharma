import React from "react";
import "./Project.css";
import Project1 from './img/portfolio-1.jpg';
import Project2 from './img/portfolio-2.jpg';
import Project3 from './img/portfolio-3.jpg';
import Project4 from './img/portfolio-4.jpg';
import Project5 from './img/portfolio-5.jpg';
import Project6 from './img/portfolio-6.jpg';

function Project() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">My Latest Project</h1>
        <p className="heading p__color">
        MY Creative Works.
        </p>
       
      </div>
       <div className="container">
           <div className="row">
             
             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">UI/UX Design</h5>
                     <h4 className="project__text">Doctor Website Landing Page</h4>
                     <a href="https://www.behance.net/gallery/149156581/Doctor-Website-designs-themes-templates" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project2} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">UI/UX Design</h5>
                     <h4 className="project__text">Real Estate Landing Page</h4>
                     <a href="https://www.behance.net/gallery/154829531/real-estate" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project3} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Beauty Landing Page</h5>
                     <h4 className="project__text">Be Natural Ans Glowing</h4>
                     <a href="https://www.behance.net/gallery/155005963/Beauty-Website-Design" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project4} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">UI/Ux Design</h5>
                     <h4 className="project__text">Gym-Landing-Page</h4>
                     <a href="https://www.behance.net/gallery/155173101/Gym-Landing-Page" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project5} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">UI/UX Design</h5>
                     <h4 className="project__text">Rk-Jewellery-Landing-Page</h4>
                     <a href="https://www.behance.net/gallery/155194055/Rk-Jewellery-Landing-Page" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project6} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">E-commerce-Landing</h5>
                     <h4 className="project__text">Bettter Interior Design</h4>
                     <a href="https://www.behance.net/gallery/155021251/E-commerce-Landing-Page" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>
             
             <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
             <a href="https://www.behance.net/learncodewithrk/"><button className="view__more pointer btn">View more</button>
             </a>
             </div>

           </div>
       </div>
    </div>
  );
}

export default Project;