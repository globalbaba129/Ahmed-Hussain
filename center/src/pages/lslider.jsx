import React, { useState, useEffect } from 'react';

function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3); 
    }, 3000); 

   
    return () => clearInterval(interval);
  }, []); 

  return (
    <>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className={activeIndex === 0 ? "carousel-item active" : "carousel-item"}>
            <img src="https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width={100} height={500} className="d-block w-100" alt="..."/>
          </div>
          <div className={activeIndex === 1 ? "carousel-item active" : "carousel-item"}>
            <img src="https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width={100} height={500} className="d-block w-100" alt="..."/>
          </div>
          <div className={activeIndex === 2 ? "carousel-item active" : "carousel-item"}>
            <img src="https://images.pexels.com/photos/3769981/pexels-photo-3769981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width={100} height={500} className="d-block w-100" alt="..."/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
