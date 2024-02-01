import React from 'react';
import { Carousel } from 'react-carousel3';
import '../Styles/Styles.css'; 
import { useMediaQuery } from 'react-responsive';


const HobbiesCarousel = () => {
  const isMobile = useMediaQuery({ maxWidth: 600 }); 

  return (
  
     <div className={`carousel-container ${isMobile ? 'mobile' : ''}`}>
      <Carousel height={isMobile ? 300 : 500} width={980} yOrigin={42} yRadius={48} autoPlay={true}>
      <div key={1}>
        <img alt="" src="../images/hobbie1.png" className="img-hobbie" />
      </div>
      <div key={2}>
        <img alt="" src="../images/hobbie2.png" className="img-hobbiee" />
      </div>
      <div key={3}>
        <img alt="" src="../images/hobbie3.png" className="img-hobbie" />
      </div>
      <div key={4}>
        <img alt="" src="../images/hobbie4.png" className="img-hobbiee" />
      </div>
    </Carousel>
  </div>
 );
};

export default HobbiesCarousel;
