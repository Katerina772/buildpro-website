import React from 'react';
import Carousel from '../components/Carousel';

export default function Hero(){
  return (
    <section id="hero" className="hero section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="hero-title" style={{fontFamily:'Montserrat',fontWeight:800}}>BuildPro — ваш надійний партнер у ремонтах будь-якої складності</h1>
            <p className="lead text-muted">Ми виконуємо комплексні ремонти квартир, будинків і офісів “під ключ”. Гарантія якості, дотримання термінів і сучасний дизайн.</p>
            <div className="mt-4">
              <a href="#portfolio" className="btn btn-accent me-3">Наші роботи</a>
              <a href="#contact" className="btn btn-outline-secondary">Зв'язатись з нами</a>
            </div>
          </div>
          <div className="col-md-6">
            <img src="/images/hero.jpg" alt="Hero" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  )
}

