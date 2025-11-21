import React from 'react';

export default function Carousel(){
  const imgs = [
    '/images/repair1.jpg',
    '/images/repair2.jpg',
    '/images/repair3.jpg'
  ];
  return (
    <div id="hpCarousel" className="carousel slide rounded-4 shadow-sm" data-bs-ride="carousel">
      <div className="carousel-inner">
        {imgs.map((s,i)=> (
          <div className={`carousel-item ${i===0? 'active':''}`} key={i}>
            <img src={s} className="d-block w-100" alt={`slide-${i}`} style={{height:320,objectFit:'cover'}}/>
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#hpCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#hpCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  )
}