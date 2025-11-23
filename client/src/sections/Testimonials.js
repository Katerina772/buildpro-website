
import React from 'react';

const reviews = [
  {id:1, name:'Олена', text:'Ремонт виконано швидко і якісно! Дуже задоволена результатом.', img:'/images/client1.png'},
  {id:2, name:'Андрій', text:'Чудова команда! Зробили все під ключ і без зайвого клопоту.', img:'/images/client2.png'},
  {id:3, name:'Марина', text:'Ідеальний дизайн інтер’єру, дякую BuildPro!', img:'/images/client3.png'}
];

export default function Testimonials(){
  return (
    <section id="testimonials" className="section bg-white">
      <div className="container">
        <h2 className="text-center mb-4" style={{fontFamily:'Montserrat'}}>Відгуки клієнтів</h2>

        <div id="revCarousel" className="carousel slide" data-bs-ride="carousel">
          
          {/* indicators — точки */}
          <div className="carousel-indicators">
            {reviews.map((r, i) => (
              <button 
                key={r.id}
                type="button"
                data-bs-target="#revCarousel"
                data-bs-slide-to={i}
                className={i === 0 ? "active" : ""}
                aria-current={i === 0 ? "true" : undefined}
                aria-label={`Slide ${i+1}`}
              ></button>
            ))}
          </div>

          {/* самі слайди */}
          <div className="carousel-inner">
            {reviews.map((r,i)=> (
              <div className={`carousel-item ${i===0? 'active':''}`} key={r.id}>
                <div className="d-flex justify-content-center">
                  <div className="testimonial-card col-md-8 p-4 shadow-sm bg-light rounded">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <img 
                        src={r.img} 
                        alt={r.name} 
                        style={{width:70,height:70,objectFit:'cover',borderRadius:10}} 
                      />
                      <div>
                        <h5 className="mb-0" style={{fontFamily:'Montserrat'}}>{r.name}</h5>
                        <small className="text-muted">Клієнт</small>
                      </div>
                    </div>
                    <p className="mb-0">“{r.text}”</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* кнопки керування */}
          <button className="carousel-control-prev" type="button" data-bs-target="#revCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>

          <button className="carousel-control-next" type="button" data-bs-target="#revCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>

        </div>
      </div>
    </section>
  )
}
